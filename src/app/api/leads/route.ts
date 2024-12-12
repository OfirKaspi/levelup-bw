import { z } from "zod";
import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";
import { CONFIG } from "@/lib/config";

// MongoDB setup
const uri = CONFIG.MONGODB_URI || "";
const client = new MongoClient(uri);
const dbName = CONFIG.MONGODB_NAME

// Validation schema
const leadSchema = z.object({
  fullname: z.string().nonempty("Full name is required."),
  email: z.string().email("Invalid email address."),
  phone: z.string().regex(/^05\d{8}$/, "Invalid Israeli phone number."),
});

export async function POST(req: Request) {
  try {
    // Parse and validate the request body
    const body = await req.json();
    leadSchema.parse(body);

    // Connect to the MongoDB database
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection("leads");

    // Insert the lead into the database
    const result = await collection.insertOne({
      ...body,
      createdAt: new Date(),
    });

    return NextResponse.json({ success: true, id: result.insertedId });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors.map((e) => e.message) },
        { status: 400 }
      );
    } else if (error instanceof Error) {
      console.error("Unexpected error:", error.message);
      return NextResponse.json(
        { error: "Internal Server Error" },
        { status: 500 }
      );
    } else {
      console.error("Unknown error occurred");
      return NextResponse.json(
        { error: "An unexpected error occurred" },
        { status: 500 }
      );
    }
  } finally {
    await client.close();
  }
}
