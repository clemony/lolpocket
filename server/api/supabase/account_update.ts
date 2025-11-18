import { readBody } from 'h3'
import { requireUser } from '../client.supabase' // assuming you export it

export default defineEventHandler(async (event) => {
  const { client, user } = await requireUser(event)
  const body = await readBody(event)

  // strip null/undefined keys
  const patch = Object.fromEntries(
    Object.entries(body).filter(([_, v]) => v != null)
  )

  // nothing to update
  if (!Object.keys(patch).length)
    return { data: null }

  // enforce correct uuid linkage
  patch.uuid = user.id

  const { data, error } = await client
    .from('account')
    .upsert(patch, {
      ignoreDuplicates: false,
      onConflict: 'uuid',
    })
    .select()
    .single()

  if (error) {
    throw createError({
      statusCode: 500,
      statusMessage: error.message,
    })
  }

  return { data }
})
