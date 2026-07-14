import { readBody } from "h3"
import { requireUser } from "../client.supabase" // assuming you export it

export default defineEventHandler(async (event): Promise<Account | null> => {
  const { client, user } = await requireUser(event)
  const body = await readBody<Partial<Account>>(event)
  if (!body) {
    throw createError({
      statusCode: 400,
      statusMessage: "Missing body context"
    })
  }
  const patch = Object.fromEntries(
    Object.entries({
      puuid: body.puuid,
      splash: body.splash,
      username: body.username,
      peer_messages: body.peer_messages,
      public_pockets: body.public_pockets,
      color: body.color
    }).filter(([, v]) => v !== undefined)
  )

  const { data, error } = await client.rpc("update_account", {
    p_patch: patch
  })

  if (error) {
    console.error("Insert RPC error", error)
    throw createError({ statusCode: 500, statusMessage: error.message })
  }

  return (data ?? null) as Account | null
})
