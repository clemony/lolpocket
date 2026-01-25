import { createSupabaseClient } from "~~/layers/supabase/server/utils/client.supabase"

export default defineEventHandler(async (event): Promise<ThreadReturn> => {
  const { client } = await createSupabaseClient(event)

  const body = await readBody(event)
  if (!body?.thread_id) {
    throw createError({
      statusCode: 400,
      statusMessage: 'thread_id is required',
    })
  }

  const { data, error } = await client.rpc('get_thread', {
    p_thread_id: body.thread_id,
  })
  console.log('📎 - data:', data)

  if (error) {
    console.error('🔥 get_thread RPC failed:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch thread',
    })
  }

  // RPC returns: { comments: [...], authors: { uuid: account } }
  return data
})
