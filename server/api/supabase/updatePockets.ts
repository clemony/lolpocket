import { serverSupabaseClient } from '#supabase/server'
import * as v from 'valibot'

export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient(event)

  const { data, error: authError } = await client.auth.getUser()
  if (authError || !data?.user) {
    throw createError({ statusCode: 401, statusMessage: 'Not authenticated' })
  }

  // --- Read & validate body ---
  const body = await readBody<{ pocket: Pocket }>(event)
  const parsed = v.safeParse(PocketSchema, body.pocket ?? {})

  const validatedPocket = parsed.success
    ? parsed.output
    : v.getDefaults(PocketSchema)

  // --- Upsert into Supabase ---
  const { error } = await client
    .from('user_pockets')
    .upsert({
      uuid: data.user.id,
      pockets: validatedPocket,
      updated: new Date().toISOString(),
    })

  if (error)
    throw createError({ statusCode: 500, statusMessage: error.message })

  return { success: true }
})