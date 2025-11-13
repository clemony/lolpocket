import * as v from "valibot"
import type { Pocket } from "~~/shared/schema"
import { PocketSchema } from "~~/shared/schema"
import { createSupabaseClient } from "../client.supabase"

export default defineEventHandler(async (event) => {
  const { user, client } = await createSupabaseClient(event)
  if (!user) return
  const body = await readBody<Pocket>(event)
  console.log("🚀 pocket raw:", JSON.stringify(body.items[0].id, null, 2))
  const parsed = v.safeParse(PocketSchema, body)
  if (!parsed.success) {
    console.log("📎 - data:", parsed.issues)
    throw createError({
      statusCode: 400,
      statusMessage: "Validation failed",
      data: parsed.issues,
    })
  }
  const validatedPocket = parsed.output

  const { error } = await client
    .from("pockets")
    .upsert(validatedPocket)
    .eq("key", validatedPocket.key)

  if (error)
    throw createError({ statusCode: 500, statusMessage: error.message })

  return { success: true }
})
