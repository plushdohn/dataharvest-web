import { Db, MongoClient } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = process.env.DB_NAME;

let db: Db;
let client: MongoClient;

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
