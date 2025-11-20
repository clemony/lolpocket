import {
  fetchAccountByPuuid,
  fetchRegionByPuuid,
  fetchSummonerByPuuid,
  resolveAccountByEither,
} from "riot"

export default defineEventHandler(async (event) => {
  const { name, puuid: rawPuuid, region: rawRegion, tag } = getQuery(event)

  // resolve puuid/name/tag
  const {
    puuid,
    name: resolvedName,
    tag: resolvedTag,
  } = await resolveAccountByEither({
    puuid: rawPuuid ? String(rawPuuid) : undefined,
    name: name ? String(name) : undefined,
    tag: tag ? String(tag) : undefined,
  })

  if (!puuid) {
    throw createError({
      statusCode: 400,
      statusMessage: "Missing summoner identifier",
    })
  }

  let region = rawRegion as string | undefined

  // autoload region if missing
  if (!region) {
    const r = await fetchRegionByPuuid(puuid)
    region = r.region
  }

  try {
    const summonerV4 = await fetchSummonerByPuuid(puuid, region)

    const accountV1 = await fetchAccountByPuuid(puuid)

    return {
      name: accountV1.gameName,
      puuid: summonerV4.puuid,
      icon: summonerV4.profileIconId,
      lastUpdate: Date.now(),
      level: summonerV4.summonerLevel,
      region: region || "unknown",
      tag: accountV1.tagLine,
    }
  } catch (err) {
    console.error("❌ Failed to resolve summoner:", err)
    throw createError({
      statusCode: 502,
      statusMessage: "Failed to fetch summoner from Riot",
    })
  }
})
