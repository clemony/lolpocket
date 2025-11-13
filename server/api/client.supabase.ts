import { serverSupabaseClient } from "#supabase/server"

export async function createSupabaseClient(event) {
  const client = await serverSupabaseClient(event)
  const { data, error: authError } = await client.auth.getUser()
  if (authError || !data?.user)
    throw createError({ statusCode: 401, statusMessage: "Not authenticated" })
  else
    return {
      user: data,
      client: client,
    }
}
