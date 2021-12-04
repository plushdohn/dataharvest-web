import { Db, MongoClient } from "mongodb";
import { ParsedMatch } from "utils/matchParser";

let client: MongoClient | null = null;

export async function addGamesToDatabase(
  matches: ParsedMatch[]
): Promise<number> {
  const db = await getDatabase();

  const res = await db.collection("matches").bulkWrite(
    matches.map((match) => ({
      updateOne: {
        filter: { _id: match._id },
        update: { $set: match },
        upsert: true,
      },
    }))
  );

  return res.insertedCount;
}

async function getDatabase(): Promise<Db> {
  const MONGODB_URI = process.env.MONGODB_URI;

  if (!MONGODB_URI) {
    throw new Error("MONGODB_URI environment variable was not set.");
  }

  if (client !== null) return client.db();

  client = new MongoClient(MONGODB_URI);
  client = await client.connect();

  return client.db();
}
