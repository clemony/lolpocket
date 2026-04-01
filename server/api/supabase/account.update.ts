import { readBody } from 'h3'
import { requireUser } from '../client.supabase' // assuming you export it

export default defineEventHandler(
  async (event): Promise<{ data: unknown | null; error: unknown | null }> => {
    const { client, user } = await requireUser(event)
    const body = await readBody(event)
    if (!body) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Missing body context',
      })
    }
    const update = {
      p_color: body.color,
      p_puuid: body.puuid,
      p_title: body.title,
      p_username: body.username,
      p_peer_messages: body.peer_messages,
      p_public_pockets: body.public_pockets,
      p_splash: body.splash,
    }

    // strip null/undefined keys
    const patch = Object.fromEntries(
      Object.entries(update).filter(([_, v]) => v != null)
    )

    // nothing to update
    if (!Object.keys(patch).length) return { data: null, error: null }

    const { data, error } = await client.rpc('update_account', {
      ...patch,
      p_uuid: user.id,
    })

    if (error) {
      console.error('Insert RPC error', error)
      throw createError({ statusCode: 500, statusMessage: error.message })
    }

    return { data: data ?? null, error: null }
  }
)
