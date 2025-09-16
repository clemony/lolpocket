import { serverSupabaseClient } from '#supabase/server'
import * as v from 'valibot'

export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient(event)

  const body = await readBody<{ uuid: string, settings?: Partial<Settings> }>(
    event
  )
  const parsed = v.safeParse(SettingsSchema, body.settings ?? {})

  const validatedSettings = parsed.success ? parsed.output : SettingsSchema

  const { error } = await client
    .from('user_settings')
    .upsert({ uuid: body.uuid, ...validatedSettings }, { onConflict: 'uuid' })

  if (error)
    throw createError({ statusCode: 500, statusMessage: error.message })

  return { success: true }
})
