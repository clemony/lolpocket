import { fetchAccountByPuuid, fetchAccountByRiotId } from '#server/api'

export async function resolveAccountByEither(opts: {
  puuid?: string
  name?: string
  tag?: string
}) {
  const { name, puuid, tag } = opts

  if (puuid) {
    const account = await fetchAccountByPuuid(puuid)
    return {
      name: account.gameName,
      puuid: account.puuid,
      tag: account.tagLine,
    }
  }

  if (name && tag) {
    const account = await fetchAccountByRiotId(name, tag)
    return {
      name: account.gameName,
      puuid: account.puuid,
      tag: account.tagLine,
    }
  }

  throw createError({
    statusCode: 400,
    statusMessage: 'Missing puuid OR (name + tag)',
  })
}
