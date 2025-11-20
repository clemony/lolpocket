import { resolveAccountByEither } from "./byEither"

export default defineEventHandler(async (event) => {
  const q = getQuery(event)

  return resolveAccountByEither({
    puuid: q.puuid ? String(q.puuid) : undefined,
    name: q.name ? String(q.name) : undefined,
    tag: q.tag ? String(q.tag) : undefined,
  })
})
