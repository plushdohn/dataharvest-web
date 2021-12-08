import type { NextApiRequest, NextApiResponse } from "next";
import createRateLimiter from "server/rateLimiter";
import verifyCaptcha from "utils/captcha";
import { connectToMongoInstance } from "../../utils/mongo";
import { parse } from "../../utils/queryParser";

const rateLimiter = createRateLimiter({
  uniqueTokenPerInterval: 300,
  interval: 10,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(400).send("Only POST requests are allowed.");
  }

  // Verify captcha
  const captcha = req.body.captcha;

  try {
    await verifyCaptcha(captcha);
  } catch (err) {
    return res.status(403).send("Invalid captcha.");
  }

  // Verify rate limit
  const allowed = await rateLimiter.checkRequest(req);

  if (!allowed) {
    return res.status(429).send("Too many queries.");
  }

  // Try to parse query
  let parsedQuery;
  try {
    parsedQuery = parse(req.body.query);
  } catch (err) {
    return res.status(400).send("The requested query was invalid:" + err);
  }

  // Connect to the database
  let db;
  try {
    db = await connectToMongoInstance();
  } catch (err) {
    return res
      .status(500)
      .send("Couldn't establish connection to database:" + err);
  }

  try {
    const games = await db
      .collection("matches")
      .aggregate(parsedQuery)
      .toArray();

    return res.status(200).json(games);
  } catch (err) {
    return res.status(500).send("Error while querying for games:" + err);
  }
}
