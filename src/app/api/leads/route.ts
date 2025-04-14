/* eslint-disable @typescript-eslint/no-explicit-any */

// ✅ This API route receives new leads from the frontend.
// It stores the lead in Redis and pushes the key to `crm:unsynced:list`,
// so it can be synced to Zoho CRM later by the cron job.

import { NextResponse } from "next/server"
import { z } from "zod"
import axios from "axios"
import { CONFIG } from "@/lib/config"

const {
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

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const validatedLead = leadSchema.parse(body)

    const leadWithTimestamp = {
      ...validatedLead,
      createdAt: new Date().toLocaleString("en-IL", { timeZone: "Asia/Jerusalem" }),
      zohoSynced: false,
    }

    const id = crypto.randomUUID()
    const key = `lead:${id}`

    // ✅ Save the lead
    await axios.post(`${UPSTASH_REDIS_REST_URL}/set/${key}`, leadWithTimestamp, {
      headers: {
        Authorization: `Bearer ${UPSTASH_REDIS_REST_TOKEN}`,
        "Content-Type": "application/json",
      },
    })

    // ✅ Add key to unsynced:list for background sync
    await axios.post(`${UPSTASH_REDIS_REST_URL}/lpush/crm:unsynced:list`, key, {
      headers: {
        Authorization: `Bearer ${UPSTASH_REDIS_REST_TOKEN}`,
        "Content-Type": "application/json",
      },
    })

    return NextResponse.json(
      {
        success: true,
        message: "הפרטים נשלחו בהצלחה, ניצור איתך קשר בהקדם",
      },
      { status: 201 }
    )
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