import { MongoClient } from "mongodb";
import 'dotenv/config';

const URI = process.env.MONGO_URI;

const client = new MongoClient(URI);

await client.connect();

export const db = client.db("spotifyAula");

// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection)

