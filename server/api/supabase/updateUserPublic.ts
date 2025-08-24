import { serverSupabaseClient } from '#supabase/server'
import { jwtDecode } from 'jwt-decode'
import * as v from 'valibot'

export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient(event)

  const authHeader = getHeader(event, 'authorization')
  if (!authHeader)
    throw createError({ statusCode: 401, statusMessage: 'Missing token' })

  const token = authHeader.replace('Bearer ', '')
  const decoded: any = jwtDecode(token)
  const uuid = decoded.sub
  if (!uuid)
    throw createError({ statusCode: 401, statusMessage: 'Invalid token' })

  const body = await readBody<{ publicData: Partial<PublicData> }>(event)
  const parsed = v.safeParse(PublicDataSchema, body.publicData ?? {})

  const validatedPublic = parsed.success ? parsed.output : PublicDataSchema

  const { error } = await client
    .from('user_public')
    .upsert({ uuid, ...validatedPublic })

  if (error)
    throw createError({ statusCode: 500, statusMessage: error.message })

  return { success: true }
})