import { createSupabaseClient } from "#layers/client/server/client.supabase"

export default defineEventHandler(async (event) => {
  const { client, user } = await createSupabaseClient(event)
  if (!user)
    return

  const body = await readBody(event)
  console.log('📎 - body:', body)
  if (!body) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Missing body context',
    })
  }

  const { data, error } = await client.rpc('update_comment', {
    p_comment_id: body.comment_id,
    p_content: body.content,
    p_html: body.html,
  })

  if (error) {
    console.error('Insert RPC error', error)
    throw createError({ statusCode: 500, statusMessage: error.message })
  }

  return { data, error }
})
