import axios from "axios";
import { ParsedMatch, parseRiotMatch, RiotMatch } from "server/matchParser";
import {
  Platform,
  PlatformsDictionary,
  Rank,
  RANK_DICTIONARY,
  RegionalEndpoint,
  Tier,
  TIER_DICTIONARY,
} from "./types";

const N_GAMES_PER_PLAYER = 30;

const RIOT_API_KEY = process.env.RIOT_API_KEY;

if (RIOT_API_KEY === undefined) {
  throw new Error("RIOT_API_KEY environment variable not set!");
}

export const PLATFORMS: PlatformsDictionary = {
  EUW: {
    regionalEndpoint: RegionalEndpoint.Europe,
    urlValue: "euw1",
  },
  EUNE: {
    regionalEndpoint: RegionalEndpoint.Europe,
    urlValue: "eun1",
  },
  NA: {
    regionalEndpoint: RegionalEndpoint.Americas,
    urlValue: "na1",
  },
  KR: {
    regionalEndpoint: RegionalEndpoint.Asia,
    urlValue: "kr",
  },
  JP: {
    regionalEndpoint: RegionalEndpoint.Asia,
    urlValue: "jp1",
  },
  BR: {
    regionalEndpoint: RegionalEndpoint.Americas,
    urlValue: "br1",
  },
  LA1: {
    regionalEndpoint: RegionalEndpoint.Americas,
    urlValue: "la1",
  },
  LA2: {
    regionalEndpoint: RegionalEndpoint.Americas,
    urlValue: "la2",
  },
  OC: {
    regionalEndpoint: RegionalEndpoint.Americas,
    urlValue: "oc1",
  },
  TR: {
    regionalEndpoint: RegionalEndpoint.Europe,
    urlValue: "tr1",
  },
  RU: {
    regionalEndpoint: RegionalEndpoint.Europe,
    urlValue: "ru",
  },
};

export default async function getMatchHistoryFromPlatformAndSummonerName(
  platform: Platform,
  summonerName: string
): Promise<ParsedMatch[]> {
  const matchIds = await getMatchIdsFromPlatformAndSummonerName(
    platform,
    summonerName
  );

  const matchHistory = await getMatchesFromPlatformAndArrayOfMatchIds(
    platform,
    matchIds
  );

  return await addAverageRankToMatchList(
    matchHistory.map((match) => parseRiotMatch(match))
  );
}

async function addAverageRankToMatchList(
  matches: ParsedMatch[]
): Promise<ParsedMatch[]> {
  const promises = matches.map(async (match) => {
    const summonerLeagueInfo = await getLeagueInfoFromPuuid(
      getPlatfromFromRiotPlatform(match.platformId),
      match.participants[0].puuid
    );

    return {
      ...match,
      averageRank:
        match.queueId === 420
          ? getSoloQueueRankFromSummonerLeagueInfo(summonerLeagueInfo)
          : getFlexQueueRankFromSummonerLeagueInfo(summonerLeagueInfo),
    };
  });

  const results = await Promise.all(promises);

  return results;
}

function getPlatfromFromRiotPlatform(riotPlatform: string): Platform {
  const platform = Object.entries(PLATFORMS).find(
    ([_, data]) => data.urlValue.toUpperCase() === riotPlatform
  );

  if (platform === undefined) {
    throw new Error(
      "Unsupported Riot Platform provided while converting from Riot Platform to Platform"
    );
  }

  return platform[0] as Platform;
}

async function getMatchesFromPlatformAndArrayOfMatchIds(
  platform: Platform,
  matchIds: string[]
): Promise<RiotMatch[]> {
  const promises = matchIds.map((id) =>
    getMatchDetailsFromPlatformAndMatchId(platform, id)
  );

  const details = await Promise.all(promises);

  return details;
}

async function getMatchDetailsFromPlatformAndMatchId(
  platform: Platform,
  matchId: string
): Promise<RiotMatch> {
  const details = await makeRiotApiRequest<RiotMatch>(
    PLATFORMS[platform as Platform].regionalEndpoint,
    `/lol/match/v5/matches/${matchId}`
  );

  return details;
}

async function getMatchIdsFromPlatformAndSummonerName(
  platform: Platform,
  summonerName: string
): Promise<string[]> {
  const puuid = await getPuuidFromPlatformAndSummonerName(
    platform,
    summonerName
  );

  const matchIds = await makeRiotApiRequest<string[]>(
    PLATFORMS[platform as Platform].regionalEndpoint,
    `/lol/match/v5/matches/by-puuid/${puuid}/ids?count=${N_GAMES_PER_PLAYER}&type=ranked`
  );

  return matchIds;
}

async function getPuuidFromPlatformAndSummonerName(
  platform: Platform,
  summonerName: string
): Promise<string> {
  const summonerInfo = await makeRiotApiRequest<{ puuid: string }>(
    PLATFORMS[platform as Platform].urlValue,
    `/lol/summoner/v4/summoners/by-name/${encodeURI(summonerName)}`
  );

  return summonerInfo.puuid;
}

async function getSummonerIdFromPuuid(
  platform: Platform,
  puuid: string
): Promise<string> {
  const summonerInfo = await makeRiotApiRequest<{ id: string }>(
    PLATFORMS[platform as Platform].urlValue,
    `/lol/summoner/v4/summoners/by-puuid/${puuid}`
  );

  return summonerInfo.id;
}

function getSoloQueueRankFromSummonerLeagueInfo(
  leagueInfo: {
    queueType: string;
    tier: Tier;
    rank: Rank;
  }[]
): number | null {
  const soloQueueInfo = leagueInfo.find(
    (el) => el.queueType === "RANKED_SOLO_5x5"
  );

  if (soloQueueInfo === undefined) {
    return null;
  }

  return (
    TIER_DICTIONARY[soloQueueInfo.tier as Tier] +
    RANK_DICTIONARY[soloQueueInfo.rank as Rank]
  );
}

function getFlexQueueRankFromSummonerLeagueInfo(
  leagueInfo: {
    queueType: string;
    tier: Tier;
    rank: Rank;
  }[]
): number | null {
  const soloQueueInfo = leagueInfo.find(
    (el) => el.queueType === "RANKED_FLEX_SR"
  );

  if (soloQueueInfo === undefined) {
    return null;
  }

  return (
    TIER_DICTIONARY[soloQueueInfo.tier as Tier] +
    RANK_DICTIONARY[soloQueueInfo.rank as Rank]
  );
}

async function getLeagueInfoFromPuuid(platform: Platform, puuid: string) {
  const summonerId = await getSummonerIdFromPuuid(platform, puuid);

  const summonerLeagueInfo = await makeRiotApiRequest<
    [{ queueType: string; tier: Tier; rank: Rank }]
  >(
    PLATFORMS[platform as Platform].urlValue,
    `/lol/league/v4/entries/by-summoner/${summonerId}`
  );

  return summonerLeagueInfo;
}

async function makeRiotApiRequest<T>(
  regionalUrl: string,
  endpoint: string
): Promise<T> {
  const url = `https://${regionalUrl}.api.riotgames.com${endpoint}`;

  try {
    const res = await axios.get<T>(
      `https://${regionalUrl}.api.riotgames.com${endpoint}`,
      {
        headers: {
          "X-Riot-Token": RIOT_API_KEY as string,
        },
      }
    );

    return res.data;
  } catch (err: any) {
    console.log("RIOT ERROR ON REQUEST:" + url);
    console.log(JSON.stringify(err));

    if (err.response && err.response.status) {
      throw {
        status: err.response.status,
        message: "Riot API returned a bad status code:" + err.response.status,
      };
    } else {
      throw {
        status: 500,
        message: "Unknown network error: " + err.message,
      };
    }
  }
}
