import { fetchAccountByPuuid, fetchAccountByRiotId } from '#server/api/riot'

export default defineEventHandler(async (event) => {
  const q = getQuery(event)

  const name = q.name ? String(q.name) : undefined
  const puuid = q.puuid ? String(q.puuid) : undefined
  const tag = q.tag ? String(q.tag) : undefined

  if (puuid) {
    const account = await fetchAccountByPuuid(puuid)
    return {
      gameName: account.gameName,
      puuid: account.puuid,
      tagLine: account.tagLine,
    }
  }

  else if (name && tag) {
    const account = await fetchAccountByRiotId(name, tag)
    return {
      gameName: account.gameName,
      puuid: account.puuid,
      tagLine: account.tagLine,
    }
  }

  throw createError({
    statusCode: 400,
    statusMessage: 'Missing puuid OR (name + tag)',
  })
})
