import type { H3Event } from 'h3'
import { serverSupabaseClient } from '#supabase/server'

export async function createSupabaseClient(event: H3Event) {
  const client = await serverSupabaseClient(event)
  const { data, error } = await client.auth.getUser()

  if (error || !data?.user) {
    throw createError({ statusCode: 401, statusMessage: 'Not authenticated' })
  }

  return {
    client,
    user: data.user, // <-- the actual user
  }
}

export async function requireUser(event: H3Event) {
  const { client, user } = await createSupabaseClient(event)
  return { client, user }
}
