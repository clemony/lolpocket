import { renderStaticHTML } from "~~/shared/utils/mentions/renderStaticHTML"
import { createSupabaseClient } from "../client.supabase"

export default defineEventHandler(async (event) => {
  const { client, user } = await createSupabaseClient(event)
  if (!user) return

  const body = await readBody(event)
  if (!body) {
    throw createError({
      statusCode: 404,
      statusMessage: "Missing body context",
    })
  }

  const { data, error } = await client.rpc("insert_comment", {
    p_comment_id: crypto.randomUUID(),
    p_parent_id: body.parent_id || null,
    p_thread_id: body.thread_id,
    p_content: body.content, // stored JSON
    p_html: renderStaticHTML(body.content), // server-generated HTML
  })

  if (error) {
    console.error("Insert RPC error", error)
    throw createError({ statusCode: 500, statusMessage: error.message })
  }

  return { data, error }
})
