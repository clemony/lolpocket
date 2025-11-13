import { createSupabaseClient } from "../../client.supabase"

export default defineEventHandler(async (event) => {
  const { user, client } = await createSupabaseClient(event)
  if (!user) return

  const body = await readBody(event)
  console.log("📎 - body:", body)
  if (!body)
    throw createError({
      statusCode: 404,
      statusMessage: "Missing body context",
    })

  const { data, error } = await client
    .from("comments")
    .upsert({
      content: body.content,
      html: body.html,
    })
    .eq("comment_id", body.comment_id)

  if (error) {
    console.error("Insert RPC error", error)
    throw createError({ statusCode: 500, statusMessage: error.message })
  }

  return { statusCode: 200, body: data }
})
