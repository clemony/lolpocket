import { createSupabaseClient } from "../../../routes/supabase/client.supabase"

export default defineEventHandler(async (event) => {
  const { client, user } = await createSupabaseClient(event)
  console.log("📎 - user:", user)

  const body = await readBody(event)
  console.log("📎 - body:", body)
  if (!body) {
    throw createError({
      statusCode: 404,
      statusMessage: "Missing body context",
    })
  }
  try {
    const { data, error } = await client.rpc("get_thread", {
      p_thread_id: body.thread_id,
    })

    console.log("📎 - data:", data)

    return {
      data,
      error,
    }
  } catch (err) {
    console.error("Unexpected error in hydrateUser:", err)
    throw createError({
      statusCode: 500,
      statusMessage: "Unexpected server error",
    })
  }
})
