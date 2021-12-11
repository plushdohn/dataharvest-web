import type { NextApiRequest, NextApiResponse } from "next";
import verifyCaptcha from "server/captcha";
import { connectToMongoInstance } from "../../server/mongo";
import { parse } from "../../server/queryParser";

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
