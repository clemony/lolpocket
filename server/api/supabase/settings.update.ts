import type { Settings } from '#shared/types'
import { getEmptySettings, settingsSchema } from '#shared/schema'
import * as v from 'valibot'
import { requireUser } from '../client.supabase'

export default defineEventHandler(async (event): Promise<Settings> => {
  const { client, user } = await requireUser(event)

  const body = await readBody<{ settings?: Partial<Settings> }>(
    event
  )
  const parsed = v.safeParse(settingsSchema, {
    ...getEmptySettings(),
    ...(body.settings ?? {}),
    updated: new Date().toISOString(),
  })

  if (!parsed.success) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid settings payload',
      data: parsed.issues,
    })
  }

  const validatedSettings = parsed.output

  const { error } = await client
    .from('settings')
    .upsert({ uuid: user.id, ...validatedSettings }, { onConflict: 'uuid' })

  if (error)
    throw createError({ statusCode: 500, statusMessage: error.message })

  return validatedSettings as Settings
})
