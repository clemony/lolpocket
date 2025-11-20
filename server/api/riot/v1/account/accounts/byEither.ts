import { fetchAccountByPuuid, fetchAccountByRiotId } from "riot"

export async function resolveAccountByEither(opts: {
  puuid?: string
  name?: string
  tag?: string
}) {
  const { puuid, name, tag } = opts

  if (puuid) {
    const account = await fetchAccountByPuuid(puuid)
    return {
      puuid: account.puuid,
      name: account.gameName,
      tag: account.tagLine,
    }
  }

  if (name && tag) {
    const account = await fetchAccountByRiotId(name, tag)
    return {
      puuid: account.puuid,
      name: account.gameName,
      tag: account.tagLine,
    }
  }

  throw createError({
    statusCode: 400,
    statusMessage: "Missing puuid OR (name + tag)",
  })
}
