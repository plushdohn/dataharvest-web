import { Db, MongoClient } from "mongodb";
import { ParsedMatch } from "server/matchParser";

let client: MongoClient | null = null;
let db: Db;

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
const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = process.env.DB_NAME;

export async function connectToMongoInstance() {
  if (db) {
    return db;
  }

  if (!MONGODB_URI) {
    throw new Error("No MONGODB_URI environment variable was set.");
  }

  if (!DB_NAME) {
    throw new Error("No MONGOD_DB environment variable was set.");
  }

  if (!client) {
    client = new MongoClient(MONGODB_URI);

    await client.connect();
  }

  db = client.db(DB_NAME);

  return db;
}
