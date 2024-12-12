import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";
import { CONFIG } from "@/lib/config";

const uri = CONFIG.MONGODB_URI;
const client = new MongoClient(uri || 'mongo uri');
const dbName = CONFIG.MONGODB_NAME;

export async function POST(req: Request) {
  try {
    const { fullname, email, phone } = await req.json();

    if (!fullname || !email || !phone) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection("leads");

    // Save the lead
    const result = await collection.insertOne({ fullname, email, phone, createdAt: new Date() });

    return NextResponse.json({ success: true, id: result.insertedId });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to save lead. Please try again later." },
      { status: 500 }
    );
  } finally {
    await client.close();
  }
}
