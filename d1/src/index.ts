import { getMatchHistory, insertMatchIds } from './handlers'

export default {
  async fetch(req: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(req.url)

    if (req.method === 'POST' && url.pathname === '/insert') {
      const body = await req.json()
      const { puuid, matchIds } = body

      if (!puuid || !matchIds?.length)
        return new Response('Missing data', { status: 400 })

      await insertMatchIds({ puuid, matchIds, db: env.DB })
      return Response.json({ success: true })
    }

    if (req.method === 'GET' && url.pathname === '/history') {
      const puuid = url.searchParams.get('puuid')
      const before = url.searchParams.get('before')
      const limit = url.searchParams.get('limit')

      if (!puuid)
        return new Response('Missing puuid', { status: 400 })

      const data = await getMatchHistory({
        puuid,
        before: before ? Number.parseInt(before) : undefined,
        limit: limit ? Number.parseInt(limit) : 40,
        db: env.DB,
      })

      return Response.json(data)
    }

    return new Response('Not Found', { status: 404 })
  },
}

interface Env {
  DB: D1Database
}