import { NextApiRequest, NextApiResponse } from "next";
import { addGamesToDatabase } from "server/mongo";
import getMatchHistoryFromPlatformAndSummonerName, {
  PLATFORMS,
} from "server/riot";
import { Platform } from "server/types";
import verifyCaptcha from "utils/captcha";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { summonerName, platform } = await verifyRequest(req);

    try {
      const matches = await getMatchHistoryFromPlatformAndSummonerName(
        platform,
        summonerName
      );

      const addedGamesCount = await addGamesToDatabase(matches);

      return res.status(200).json({ addedGamesCount });
    } catch (err: any) {
      if (err.status === 404) {
        return res.status(404).json({ message: "Summoner not found." });
      }

      console.log("BAD ERROR: " + err.message);
      return res.status(500).json({ message: "Internal server error" });
    }
  } catch (err) {
    return res.status(400).json({ message: "Bad request: " + err });
  }
}

async function verifyRequest(req: NextApiRequest): Promise<{
  summonerName: string;
  platform: Platform;
}> {
  if (req.method !== "PUT") {
    throw new Error("Only supported method is PUT");
  }

  await verifyCaptcha(req.query.captcha as string);

  const { summonerName, region } = req.query;

  if (
    !summonerName ||
    typeof summonerName !== "string" ||
    (summonerName as string).trim().length === 0
  ) {
    throw new Error("Invalid summoner name.");
  }

  if (!region || typeof region !== "string" || !PLATFORMS[region as Platform]) {
    throw new Error("Invalid region.");
  }

  return {
    summonerName,
    platform: region as Platform,
  };
}
