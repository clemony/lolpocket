import * as v from 'valibot'
import { createSupabaseClient } from '../../../../layers/client/server/client.supabase'

export default defineEventHandler(async (event) => {
  const { client, user } = await createSupabaseClient(event)
  if (!user)
    return
  const body = await readBody<Pocket>(event)
  console.log('🚀 pocket raw:', JSON.stringify(body.items[0].id, null, 2))
  const parsed = v.safeParse(pocketSchema, body)
  if (!parsed.success) {
    console.log('📎 - data:', parsed.issues)
    throw createError({
      data: parsed.issues,
      statusCode: 400,
      statusMessage: 'Validation failed',
    })
  }
  const validatedPocket = parsed.output

  const { error } = await client
    .from('pockets')
    .upsert(validatedPocket)
    .eq('key', validatedPocket.key)

  if (error)
    throw createError({ statusCode: 500, statusMessage: error.message })

  return { error }
})
