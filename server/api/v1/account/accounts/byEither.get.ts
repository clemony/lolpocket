import { resolveAccountByEither } from './byEither'

export default defineEventHandler(async (event) => {
  const q = getQuery(event)

  return resolveAccountByEither({
    name: q.name ? String(q.name) : undefined,
    puuid: q.puuid ? String(q.puuid) : undefined,
    tag: q.tag ? String(q.tag) : undefined,
  })
})
