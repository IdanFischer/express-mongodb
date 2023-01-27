import { MongoClient } from "mongodb";
import dotenv from "dotenv"
dotenv.config()

const URI = process.env.URI
const DB = process.env.DB

export function dbConnect() {
    const client = new MongoClient(URI)
    return client.db(DB)
}
