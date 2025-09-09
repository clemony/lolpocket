import { serverSupabaseClient } from '#supabase/server'
import * as v from 'valibot'

export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient(event)

  const { data, error: authError } = await client.auth.getUser()
  if (authError || !data?.user) {
    throw createError({ statusCode: 401, statusMessage: 'Not authenticated' })
  }

  const body = await readBody<{ publicData: Partial<PublicData> }>(event)
  const parsed = v.safeParse(PublicDataSchema, body.publicData ?? {})

  const validatedPublic = parsed.success ? parsed.output : PublicDataSchema

  const { error } = await client
    .from('user_public')
    .upsert({ uuid: data.user.id, ...validatedPublic })

  if (error)
    throw createError({ statusCode: 500, statusMessage: error.message })

  return { success: true }
})