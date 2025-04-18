/* eslint-disable @typescript-eslint/no-explicit-any */

// ✅ This API route is triggered by a Vercel Cron Job every 5 minutes.
// It looks for unsynced leads in the Redis list `crm:unsynced:list`,
// sends them to Zoho CRM, marks them as synced, and removes them from the list.

import { NextResponse } from "next/server"
import axios from "axios"
import { CONFIG } from "@/config/config"
import https from "https"

// ✅ Load environment variables
const {
	ZOHO_CLIENT_ID,
	ZOHO_CLIENT_SECRET,
	ZOHO_REFRESH_TOKEN,
	ZOHO_REDIRECT_URI,
	UPSTASH_REDIS_REST_URL,
	UPSTASH_REDIS_REST_TOKEN,
	CRON_SECRET,
} = CONFIG

// ✅ Get a Zoho access token
async function getZohoAccessToken() {
	try {
		const response = await axios.post("https://accounts.zoho.com/oauth/v2/token", null, {
			params: {
				refresh_token: ZOHO_REFRESH_TOKEN,
				client_id: ZOHO_CLIENT_ID,
				client_secret: ZOHO_CLIENT_SECRET,
				redirect_uri: ZOHO_REDIRECT_URI,
				grant_type: "refresh_token",
			},
			httpsAgent: new https.Agent({ rejectUnauthorized: false }),
		})

		return response.data.access_token
	} catch (error: any) {
		console.error("❌ Failed to get Zoho token:", error.response?.data || error.message)
		throw new Error("Zoho auth failed")
	}
}

// ✅ Send a lead to Zoho CRM
async function sendToZoho(accessToken: string, lead: any) {
	const payload = {
		data: [
			{
				Last_Name: lead.full_name,
				Email: lead.email,
				Phone: lead.phone,
				Lead_Source: lead.lead_source,
				// OPTIONAL FIELDS
				...(lead.newsletter && { Newsletter: lead.newsletter }),
				...(lead.company && { Company: lead.company }),
				...(lead.industry && { Industry: lead.industry }),
				...(lead.requested_service && { Requested_Service: lead.requested_service }),
				...(lead.lead_message && { Lead_Message: lead.lead_message }),
			},
		],
		trigger: ["workflow"],
	}

	const response = await axios.post("https://www.zohoapis.com/crm/v2/Leads", payload, {
		headers: {
			Authorization: `Bearer ${accessToken}`,
			"Content-Type": "application/json",
		},
	})

	const result = response.data?.data?.[0]
	if (result?.code !== "SUCCESS") throw new Error("Zoho rejected lead")
	return result.details.id
}

// ✅ Main GET handler (cron job)
export async function GET(req: Request) {

	// ✅ Protect cron job with a secret token
	if (
		CRON_SECRET && req.headers.get("Authorization") !== `Bearer ${CRON_SECRET}`
	) {
		return new Response("Unauthorized", { status: 401 })
	}

	try {
		const listKey = "crm:unsynced:list"

		// ✅ Fetch all unsynced lead keys
		const listRes = await axios.get(`${UPSTASH_REDIS_REST_URL}/lrange/${listKey}/0/-1`, {
			headers: { Authorization: `Bearer ${UPSTASH_REDIS_REST_TOKEN}` },
		})

		const rawKeys: string[] = listRes.data.result || []
		const keys = rawKeys.map((k) => k.replace(/^"|"$/g, ""))

		if (!keys.length) return NextResponse.json({ message: "No unsynced leads" })

		const accessToken = await getZohoAccessToken()
		const results: any[] = []

		for (const key of keys) {
			try {
				// ✅ Get lead data from Redis
				const leadRes = await axios.get(`${UPSTASH_REDIS_REST_URL}/get/${key}`, {
					headers: { Authorization: `Bearer ${UPSTASH_REDIS_REST_TOKEN}` },
				})

				const raw = leadRes.data.result
				if (!raw) throw new Error("Lead not found in Redis")

				const lead = JSON.parse(raw)
				if (lead.crm_synced) continue

				// ✅ Send to Zoho
				const zoho_id = await sendToZoho(accessToken, lead)

				// ✅ Update lead with Zoho ID
				await axios.post(`${UPSTASH_REDIS_REST_URL}/set/${key}`, JSON.stringify({
					...lead,
					crm_synced: true,
					zoho_id,
					synced_at: new Date().toLocaleString("en-IL", { timeZone: "Asia/Jerusalem" }),
				}), {
					headers: {
						Authorization: `Bearer ${UPSTASH_REDIS_REST_TOKEN}`,
						"Content-Type": "application/json",
					},
				})

				// ✅ Remove from unsynced list
				await axios.post(`${UPSTASH_REDIS_REST_URL}/lrem/${listKey}/0/${JSON.stringify(key)}`, null, {
					headers: { Authorization: `Bearer ${UPSTASH_REDIS_REST_TOKEN}` },
				})

				results.push({ key, status: "synced", zoho_id })
			} catch (err: any) {
				results.push({ key, error: err.message })
			}
		}

		return NextResponse.json({ success: true, results })
	} catch (error: any) {
		console.error("❌ Sync Job Error:", error.message)
		return NextResponse.json({ success: false, message: error.message }, { status: 500 })
	}
}