import { serverSupabaseClient } from '#supabase/server'
import { jwtDecode } from 'jwt-decode'
import * as v from 'valibot'
import type { Pocket } from '../../../shared/types'

export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient(event)

  // --- Auth ---
  const authHeader = getHeader(event, 'authorization')
  if (!authHeader)
    throw createError({ statusCode: 401, statusMessage: 'Missing token' })

  const token = authHeader.replace('Bearer ', '')
  const decoded: any = jwtDecode(token)
  const uuid = decoded.sub
  if (!uuid)
    throw createError({ statusCode: 401, statusMessage: 'Invalid token' })

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
      uuid,
      pockets: validatedPocket,
      updated: new Date().toISOString(),
    })

  if (error)
    throw createError({ statusCode: 500, statusMessage: error.message })

  return { success: true }
})