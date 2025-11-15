import * as v from "valibot"
import { createSupabaseClient } from "../client.supabase"
export default defineEventHandler(async (event) => {
  const { client, user } = await createSupabaseClient(event)
  if (!user) return
  const body = await readBody(event)

  // build a patch object with only real values (skips null + undefined)
  const patch = Object.fromEntries(
    Object.entries({
      puuid: body.puuid,
      title: body.title,
      username: body.username,
      peer_messages: body.peer_messages,
      splash: body.splash,
    }).filter(([_, v]) => v !== null && v !== undefined)
  )

  if (Object.keys(patch).length === 0) {
    return { data: null } // nothing to update
  }

  // always include uuid for matching
  patch.uuid = user.id

  // upsert only the provided fields
  const { data, error } = await client
    .from("account")
    .upsert(patch, { onConflict: "uuid", ignoreDuplicates: false })

  if (error) {
    throw createError({ statusCode: 500, statusMessage: error.message })
  }

  return { data }
})
