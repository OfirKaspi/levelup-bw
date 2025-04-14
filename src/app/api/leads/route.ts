/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server"
import { z } from "zod"
import axios from "axios"
import { CONFIG } from "@/lib/config"
import https from "https"

const {
  ZOHO_CLIENT_ID,
  ZOHO_CLIENT_SECRET,
  ZOHO_REFRESH_TOKEN,
  ZOHO_REDIRECT_URI,
  UPSTASH_REDIS_REST_URL,
  UPSTASH_REDIS_REST_TOKEN,
} = CONFIG

// ✅ Zod validation schema
const leadSchema = z.object({
  fullName: z.string().nonempty("נדרש שם מלא."),
  email: z.string().email("כתובת אימייל שגויה."),
  phone: z.string().regex(/^05\d{8}$/, "אנא מלא מספר טלפון תקין."),
  option: z.enum(["פיתוח אתרים", "עיצוב", "שיווק"]),
  newsletter: z.boolean().optional().default(true),
})

// ✅ Get a new Zoho access token using refresh token
async function getZohoAccessToken() {
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

// ✅ Send the lead data to Zoho CRM and update lead with sync status
async function sendToZoho(accessToken: string, lead: any, key: string) {
  const syncSource = "Zoho CRM"
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
      throw new Error("Zoho CRM rejected the lead")
    }

    const zohoId = zohoResponse.details?.id

    await axios.post(`${UPSTASH_REDIS_REST_URL}/set/${key}`, {
      ...lead,
      zohoSynced: true,
      zohoId,
      syncedAt: new Date().toLocaleString("en-IL", { timeZone: "Asia/Jerusalem" }),
      syncSource,
    }, {
      headers: {
        Authorization: `Bearer ${UPSTASH_REDIS_REST_TOKEN}`,
        "Content-Type": "application/json",
      },
    })
  } catch (error: any) {
    console.error("❌ Zoho API Error for key", key, ":", error.message)

    await axios.post(`${UPSTASH_REDIS_REST_URL}/set/${key}:sync_error`, {
      error: error.message,
      time: new Date().toLocaleString("en-IL", { timeZone: "Asia/Jerusalem" }),
      syncSource,
    }, {
      headers: {
        Authorization: `Bearer ${UPSTASH_REDIS_REST_TOKEN}`,
        "Content-Type": "application/json",
      },
    })
  }
}

// ✅ Main POST handler
export async function POST(req: Request) {
  try {
    const body = await req.json()

    const validatedLead = leadSchema.parse(body)

    const leadWithTimestamp = {
      ...validatedLead,
      createdAt: new Date().toLocaleString("en-IL", { timeZone: "Asia/Jerusalem" }),
    }

    const id = crypto.randomUUID()
    const key = `lead:${id}`

    await axios.post(`${UPSTASH_REDIS_REST_URL}/set/${key}`, leadWithTimestamp, {
      headers: {
        Authorization: `Bearer ${UPSTASH_REDIS_REST_TOKEN}`,
        "Content-Type": "application/json",
      },
    })

    // ✅ Continue sync in background
    getZohoAccessToken()
      .then((token) => sendToZoho(token, leadWithTimestamp, key))
      .catch((err) => console.error("❌ Zoho sync setup failed:", err.message))

    // ✅ Respond immediately for great UX
    const response = NextResponse.json(
      {
        success: true,
        message: "הפרטים נשלחו בהצלחה, ניצור איתך קשר בהקדם",
      },
      { status: 201 }
    )

    return response
  } catch (error: any) {
    console.error("❌ API Error:", error.message)

    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, error: error.format() }, { status: 400 })
    }

    return NextResponse.json(
      { success: false, message: "אירעה שגיאה, אנא נסה שוב מאוחר יותר" },
      { status: 500 }
    )
  }
}