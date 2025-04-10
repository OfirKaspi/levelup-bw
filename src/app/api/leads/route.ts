/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server"
import { MongoClient } from "mongodb"
import axios from "axios"
import { z } from "zod"
import { CONFIG } from "@/lib/config"
import https from "https"

// if (process.env.NODE_ENV !== "production") {
// Allow self-signed certificates in dev
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"
// }

// ✅ ENV config
const {
  MONGODB_URI,
  MONGODB_DB_NAME,
  ZOHO_CLIENT_ID,
  ZOHO_CLIENT_SECRET,
  ZOHO_REFRESH_TOKEN,
  ZOHO_REDIRECT_URI,
} = CONFIG

const client = new MongoClient(MONGODB_URI || "")

// ✅ Zod validation schema for incoming lead data
const leadSchema = z.object({
  fullName: z.string().nonempty("נדרש שם מלא."),
  email: z.string().email("כתובת אימייל שגויה."),
  phone: z.string().regex(/^05\d{8}$/, "אנא מלא מספר טלפון תקין."),
  option: z.enum(["פיתוח אתרים", "עיצוב", "שיווק"]),
  newsletter: z.boolean().optional().default(true), // Newsletter opt-in
})

// ✅ Get a new Zoho access token using refresh token
async function getAccessToken() {
  const isDev = process.env.NODE_ENV !== "production"

  try {
    const response = await axios.post("https://accounts.zoho.com/oauth/v2/token", null, {
      params: {
        refresh_token: ZOHO_REFRESH_TOKEN,
        client_id: ZOHO_CLIENT_ID,
        client_secret: ZOHO_CLIENT_SECRET,
        redirect_uri: ZOHO_REDIRECT_URI,
        grant_type: "refresh_token",
      },
      httpsAgent: isDev ? new https.Agent({ rejectUnauthorized: false }) : undefined,
    })

    return response.data.access_token
  } catch (error: any) {
    console.error("❌ Error fetching Zoho Access Token:", error.response?.data || error.message)
    throw new Error("Failed to get Zoho access token")
  }
}

// ✅ Send the lead data to Zoho CRM and mark synced in MongoDB
async function sendToZoho(accessToken: string, lead: any, db: any) {
  const formattedLead = {
    data: [
      {
        Last_Name: lead.fullName,
        Email: lead.email,
        Phone: lead.phone,
        Lead_Source: lead.option,
        Newsletter: lead.newsletter,
      },
    ],
    trigger: ["workflow"],
  }

  try {
    const response = await axios.post("https://www.zohoapis.com/crm/v2/Leads", formattedLead, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    })

    const zohoResponse = response.data?.data?.[0]

    if (zohoResponse?.code !== "SUCCESS") {
      console.error("❌ Zoho CRM rejected the lead:", zohoResponse)
      throw new Error("Zoho CRM rejected the lead")
    }

    const zohoId = zohoResponse.details?.id
    console.log("✅ Zoho Lead Created:", zohoId)

    // ✅ Update the MongoDB lead record with Zoho ID and sync status
    await db.collection("leads").updateOne(
      { email: lead.email },
      { $set: { zohoSynced: true, zohoId } }
    )

    return zohoId
  } catch (error: any) {
    console.error("❌ Zoho API Error:", error.response?.data || error.message)
    throw new Error("Failed to sync lead with Zoho CRM")
  }
}

// ✅ Main POST handler
export async function POST(req: Request) {
  try {
    const body = await req.json()

    // ✅ Validate body with Zod schema
    const validatedLead = leadSchema.parse(body)

    // ✅ Add timestamp
    const leadWithTimestamp = {
      ...validatedLead,
      createdAt: new Date().toLocaleString("en-US", { timeZone: "Asia/Jerusalem" }),
    }

    // ✅ Connect to MongoDB
    await client.connect()
    const db = client.db(MONGODB_DB_NAME)
    const leadsCollection = db.collection("leads")

    // ✅ Save lead to MongoDB
    await leadsCollection.insertOne(leadWithTimestamp)

    // ✅ Get Zoho access token
    const accessToken = await getAccessToken()

    // ✅ Send lead to Zoho CRM
    const zohoId = await sendToZoho(accessToken, leadWithTimestamp, db)

    // ✅ Success response (shown as green on frontend)
    return NextResponse.json(
      {
        success: true,
        message: "הפרטים נשלחו בהצלחה, ניצור איתך קשר בהקדם",
        zohoId,
      },
      { status: 201 }
    )
  } catch (error: any) {
    console.error("❌ API Error:", error.message)

    // ⚠️ If form validation fails
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, error: error.format() }, { status: 400 })
    }

    // ⚠️ Generic server-side error
    return NextResponse.json(
      { success: false, message: "אירעה שגיאה, אנא נסה שוב מאוחר יותר" },
      { status: 500 }
    )
  } finally {
    await client.close()
  }
}