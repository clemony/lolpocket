import { serverSupabaseClient } from '#supabase/server'
import * as v from 'valibot'

export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient(event)

  const { data, error: authError } = await client.auth.getUser()
  if (authError || !data?.user) {
    throw createError({ statusCode: 401, statusMessage: 'Not authenticated' })
  }

  const body = await readBody<{ account: Partial<Account> }>(event)
  const parsed = v.safeParse(AccountSchema, body?.account ?? {})
  const validatedAccount = parsed.success ? parsed.output : AccountSchema

  const { error } = await client
    .from('user_account')
    .upsert({ uuid: data.user.id, ...validatedAccount }, { onConflict: 'uuid' })

  if (error) {
    throw createError({ statusCode: 500, statusMessage: error.message })
  }

  return { success: true }
})
