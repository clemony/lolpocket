import { createSupabaseClient } from "~~/layers/supabase/server/utils/client.supabase"

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

  const content = extractReadableText(body.comment.content)

  if (body.removed === 'user') {
    const { data, error } = await client.rpc('remove_comment', {
      p_comment_id: body.comment.id,
      p_content: null,
      p_html: '<p>Comment deleted by user.</p>',
      p_removed: 'user',
      p_removed_content: content,
    })
    console.log('📎 - data:', data)
    if (error) {
      console.error('Insert RPC error', error)
      throw createError({ statusCode: 500, statusMessage: error.message })
    }

    return data
  }
  if (body.removed === 'user') {
    const { data, error } = await client.rpc('update_comment', {
      p_comment_id: body.comment_id,
      p_content: null,
      p_html: '<p>Comment removed by moderator.</p>',
    })
    if (error) {
      console.error('Insert RPC error', error)
      throw createError({ statusCode: 500, statusMessage: error.message })
    }

    return data
  }
})
