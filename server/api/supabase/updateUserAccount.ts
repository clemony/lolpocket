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

  const body = await readBody<{ account: Partial<Account> }>(event)
  const parsed = v.safeParse(AccountSchema, body.account ?? {})

  const validatedAccount = parsed.success ? parsed.output : AccountSchema

  const { error } = await client
    .from('user_account')
    .upsert({ uuid, ...validatedAccount })

  if (error)
    throw createError({ statusCode: 500, statusMessage: error.message })

  return { success: true }
})