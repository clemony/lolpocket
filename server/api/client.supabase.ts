import { serverSupabaseClient } from "#supabase/server"
import type { User } from "@supabase/supabase-js"

export async function createSupabaseClient(event) {
  const client = await serverSupabaseClient(event)
  const { data, error: authError } = await client.auth.getUser()
  if (authError || !data?.user) {
    throw createError({ statusCode: 401, statusMessage: "Not authenticated" })
  } else {
    return {
      client,
      user: data ? (data as unknown as User) : null,
    }
  }
}
