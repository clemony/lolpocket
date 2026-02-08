import { fetchRegion, fetchResolvedAccount, fetchSummonerByPuuid } from '#shared/utils'

export default defineEventHandler(async (event) => {
  const { name, puuid: rawPuuid, region: rawRegion, tag } = getQuery(event)

  // resolve puuid/name/tag
  const {
    puuid,
    gameName: resolvedName,
    tagLine: resolvedTag,
  } = await fetchResolvedAccount({
    name: name ? String(name) : undefined,
    puuid: rawPuuid ? String(rawPuuid) : undefined,
    tag: tag ? String(tag) : undefined,
  })

  if (!puuid) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing summoner identifier',
    })
  }

  let region = rawRegion as string | undefined

  // autoload region if missing
  if (!region) {
    const r = await fetchRegion(puuid)
    region = r.region
  }

  try {
    const summonerV4 = await fetchSummonerByPuuid(puuid, region)

    return {
      name: resolvedName,
      puuid: summonerV4.puuid,
      icon: summonerV4.profileIconId,
      lastUpdate: Date.now(),
      level: summonerV4.summonerLevel,
      region: region || 'unknown',
      tag: resolvedTag,
    }
  }
  catch (err) {
    console.error('❌ Failed to resolve summoner:', err)
    throw createError({
      statusCode: 502,
      statusMessage: 'Failed to fetch summoner from Riot',
    })
  }
})
