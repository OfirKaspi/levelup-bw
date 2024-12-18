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
  fullname: z.string().nonempty("נדרש שם מלא."),
  email: z.string().email("כתובת אימייל שגויה."),
  phone: z.string().regex(/^05\d{8}$/, "אנא מלא מספר טלפון תקין."),
  option: z
    .enum(["option1", "option2", "option3"])
    .refine((val) => val !== undefined, { message: "אנא בחר אופציה מהרשימה." }),
});


export async function POST(req: Request) {
  try {
    const body = await req.json();
    leadSchema.parse(body);

    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection("leads");

    const result = await collection.insertOne({
      ...body,
      createdAt: new Date(),
    });

    return NextResponse.json({ success: true, id: result.insertedId });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Validation failed", details: error.errors.map((e) => e.message) },
        { status: 400 }
      );
    } else {
      console.error("Unexpected error:", error);
      return NextResponse.json(
        { error: "Internal Server Error" },
        { status: 500 }
      );
    }
  } finally {
    await client.close();
  }
}
