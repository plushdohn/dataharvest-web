import omit from "lodash/omit";
import { MYTHICS_SET } from "shared/dictionaries";

enum RiotPlatformid {
  BR1 = "BR1",
  EUN1 = "EUN1",
  EUW1 = "EUW1",
  JP1 = "JP1",
  KR = "KR",
  LA1 = "LA1",
  LA2 = "LA2",
  NA1 = "NA1",
  OC1 = "OC1",
  TR1 = "TR1",
  RU = "RU",
}

type RiotParticipant = {
  assists: number;
  baronKills: number;
  bountyLevel: number;
  champLevel: number;
  championId: number;
  damageDealtToBuildings: number;
  damageDealtToObjectives: number;
  damageDealtToTurrets: number;
  damageSelfMitigated: number;
  deaths: number;
  detectorWardsPlaced: number;
  dragonKills: number;
  gameEndedInEarlySurrender: boolean;
  gameEndedInSurrender: boolean;
  goldEarned: number;
  goldSpent: number;
  inhibitorKills: number;
  inhibitorsLost: number;
  item0: number;
  item1: number;
  item2: number;
  item3: number;
  item4: number;
  item5: number;
  item6: number;
  itemsPurchased: number;
  kills: number;
  longestTimeSpentLiving: number;
  magicDamageDealt: number;
  magicDamageDealtToChampions: number;
  magicDamageTaken: number;
  neutralMinionsKilled: number;
  objectivesStolen: number;
  pentaKills: number;
  physicalDamageDealt: number;
  physicalDamageDealtToChampions: number;
  physicalDamageTaken: number;
  puuid: string;
  sightWardsBoughtInGame: number;
  spell1Casts: number;
  spell2Casts: number;
  spell3Casts: number;
  spell4Casts: number;
  summoner1Casts: number;
  summoner1Id: number;
  summoner2Casts: number;
  summoner2Id: number;
  summonerLevel: number;
  summonerName: string;
  teamId: number;
  teamPosition: string;
  timeCCingOthers: number;
  totalDamageDealt: number;
  totalDamageDealtToChampions: number;
  totalDamageShieldedOnTeammates: number;
  totalDamageTaken: number;
  totalHeal: number;
  totalMinionsKilled: number;
  totalTimeSpentDead: number;
  trueDamageDealt: number;
  trueDamageDealtToChampions: number;
  trueDamageTaken: number;
  turretKills: number;
  visionScore: number;
  visionWardsBoughtInGame: number;
  wardsKilled: number;
  wardsPlaced: number;
  win: boolean;
  perks: {
    statPerks: {
      offense: number;
      flex: number;
      defense: number;
    };
    styles: {
      style: number;
      selections: {
        perk: number;
        var1: number;
        var2: number;
        var3: number;
      }[];
    }[];
  };
};

type RiotSingleObjective = {
  first: boolean;
  kills: number;
};

export type RiotTeam = {
  bans: {
    championId: number;
    pickTurn: number;
  }[];
  objectives: {
    baron: RiotSingleObjective;
    dragon: RiotSingleObjective;
    inhibitor: RiotSingleObjective;
    riftHerald: RiotSingleObjective;
    tower: RiotSingleObjective;
    champion: RiotSingleObjective;
  };
  win: boolean;
  teamId: number;
};

export type RiotMatch = {
  metadata: {
    matchId: string;
    dataVersion: string;
  };
  info: {
    platformId: RiotPlatformid;
    gameVersion: string;
    queueId: string;
    gameStartTimestamp: number;
    gameEndTimestamp: number;
    participants: RiotParticipant[];
    teams: RiotTeam[];
  };
};

export type ParsedSingleRune = {
  id: number;
  var1: number;
  var2: number;
  var3: number;
};

export type ParsedParticipant = {
  assists: number;
  baronKills: number;
  bountyLevel: number;
  champLevel: number;
  championId: number;
  damageDealtToBuildings: number;
  damageDealtToObjectives: number;
  damageDealtToTurrets: number;
  damageSelfMitigated: number;
  deaths: number;
  detectorWardsPlaced: number;
  dragonKills: number;
  gameEndedInEarlySurrender: boolean;
  gameEndedInSurrender: boolean;
  goldEarned: number;
  goldSpent: number;
  inhibitorKills: number;
  inhibitorsLost: number;
  item0: number;
  item1: number;
  item2: number;
  item3: number;
  item4: number;
  item5: number;
  item6: number;
  itemsPurchased: number;
  kills: number;
  longestTimeSpentLiving: number;
  magicDamageDealt: number;
  magicDamageDealtToChampions: number;
  magicDamageTaken: number;
  neutralMinionsKilled: number;
  objectivesStolen: number;
  pentaKills: number;
  physicalDamageDealt: number;
  physicalDamageDealtToChampions: number;
  physicalDamageTaken: number;
  puuid: string;
  runes: {
    primary: {
      style: number;
      keystone: ParsedSingleRune;
      rune1: ParsedSingleRune;
      rune2: ParsedSingleRune;
      rune3: ParsedSingleRune;
    };
    secondary: {
      style: number;
      rune1: ParsedSingleRune;
      rune2: ParsedSingleRune;
    };
    stats: {
      offense: number;
      flex: number;
      defense: number;
    };
  };
  sightWardsBoughtInGame: number;
  spell1Casts: number;
  spell2Casts: number;
  spell3Casts: number;
  spell4Casts: number;
  summoner1Casts: number;
  summoner1Id: number;
  summoner2Casts: number;
  summoner2Id: number;
  summonerLevel: number;
  summonerName: string;
  teamId: number;
  teamPosition: string;
  timeCCingOthers: number;
  totalDamageDealt: number;
  totalDamageDealtToChampions: number;
  totalDamageShieldedOnTeammates: number;
  totalDamageTaken: number;
  totalHeal: number;
  totalMinionsKilled: number;
  totalTimeSpentDead: number;
  trueDamageDealt: number;
  trueDamageDealtToChampions: number;
  trueDamageTaken: number;
  turretKills: number;
  visionScore: number;
  visionWardsBoughtInGame: number;
  wardsKilled: number;
  wardsPlaced: number;
  win: boolean;
};

export type ParsedTeam = {
  bans: number[];
  objectives: {
    barons: number;
    dragons: number;
    heralds: number;
    towers: number;
    inhibitors: number;
  };
  win: boolean;
  teamId: number;
};

export type ParsedMatch = {
  _id: string;
  platformId: string;
  dataVersion: string;
  patch: string;
  queueId: string;
  gameStartTimestamp: number;
  gameEndTimestamp: number;
  participants: ParsedParticipant[];
  teams: ParsedTeam[];
};

function findMythicInItemArray(items: number[]): number | null {
  for (const item of items) {
    if (MYTHICS_SET.has(item)) {
      return item;
    }
  }

  return null;
}

function getParticipantItemsAsArray(participant: RiotParticipant) {
  return [
    participant.item0,
    participant.item1,
    participant.item2,
    participant.item3,
    participant.item4,
    participant.item5,
    participant.item6,
  ];
}

export function parseRiotMatch(match: RiotMatch): ParsedMatch {
  return {
    _id: match.metadata.matchId,
    platformId: match.info.platformId,
    dataVersion: match.metadata.dataVersion,
    patch: match.info.gameVersion.split(".").slice(0, 2).join("."),
    queueId: match.info.queueId,
    gameStartTimestamp: match.info.gameStartTimestamp,
    gameEndTimestamp: match.info.gameEndTimestamp,
    participants: match.info.participants.map((participant) => ({
      ...omit(participant, "perks"),
      items: getParticipantItemsAsArray(participant),
      mythic: findMythicInItemArray(getParticipantItemsAsArray(participant)),
      runes: {
        primary: {
          style: participant.perks.styles[0].style,
          keystone: {
            id: participant.perks.styles[0].selections[0].perk,
            var1: participant.perks.styles[0].selections[0].var1,
            var2: participant.perks.styles[0].selections[0].var2,
            var3: participant.perks.styles[0].selections[0].var3,
          },
          rune1: {
            id: participant.perks.styles[0].selections[1].perk,
            var1: participant.perks.styles[0].selections[1].var1,
            var2: participant.perks.styles[0].selections[1].var2,
            var3: participant.perks.styles[0].selections[1].var3,
          },
          rune2: {
            id: participant.perks.styles[0].selections[2].perk,
            var1: participant.perks.styles[0].selections[2].var1,
            var2: participant.perks.styles[0].selections[2].var2,
            var3: participant.perks.styles[0].selections[2].var3,
          },
          rune3: {
            id: participant.perks.styles[0].selections[3].perk,
            var1: participant.perks.styles[0].selections[3].var1,
            var2: participant.perks.styles[0].selections[3].var2,
            var3: participant.perks.styles[0].selections[3].var3,
          },
        },
        secondary: {
          style: participant.perks.styles[1].style,
          rune1: {
            id: participant.perks.styles[1].selections[0].perk,
            var1: participant.perks.styles[1].selections[0].var1,
            var2: participant.perks.styles[1].selections[0].var2,
            var3: participant.perks.styles[1].selections[0].var3,
          },
          rune2: {
            id: participant.perks.styles[1].selections[1].perk,
            var1: participant.perks.styles[1].selections[1].var1,
            var2: participant.perks.styles[1].selections[1].var2,
            var3: participant.perks.styles[1].selections[1].var3,
          },
        },
        stats: {
          offense: participant.perks.statPerks.offense,
          flex: participant.perks.statPerks.flex,
          defense: participant.perks.statPerks.defense,
        },
      },
    })),
    teams: match.info.teams.map((team) => ({
      ...team,
      bans: team.bans.map((ban) => ban.championId),
      objectives: {
        dragons: team.objectives.dragon.kills,
        towers: team.objectives.tower.kills,
        inhibitors: team.objectives.inhibitor.kills,
        heralds: team.objectives.riftHerald.kills,
        barons: team.objectives.baron.kills,
      },
    })),
  };
}
