import {
  fetchRegion,
  fetchResolvedAccount,
  fetchSummonerByPuuid,
} from "#shared/utils"
import {
  findCachedSummoner,
  getSummonerCacheDbForEvent,
  isSummonerCacheFresh,
  toCachedSummoner,
  upsertCachedSummoner,
} from "~~/server/domain/d1/summoner-cache"

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const name = query.name ? String(query.name) : undefined
  const rawPuuid = query.puuid ? String(query.puuid) : undefined
  const rawRegion = query.region ? String(query.region) : undefined
  const tag = query.tag ? String(query.tag) : undefined
  const force = query.force === "true" || query.force === "1"
  const cacheDb = await getSummonerCacheDbForEvent(event)

  if (cacheDb && !force) {
    try {
      const cached = await findCachedSummoner(cacheDb, {
        name,
        puuid: rawPuuid,
        region: rawRegion,
        tag,
      })

      if (cached && isSummonerCacheFresh(cached)) {
        return toCachedSummoner(cached)
      }
    } catch (err) {
      console.warn("Failed summoner cache lookup, falling back to Riot", err)
    }
  }

  // resolve puuid/name/tag
  const {
    puuid,
    gameName: resolvedName,
    tagLine: resolvedTag,
  } = await fetchResolvedAccount({
    name,
    puuid: rawPuuid,
    tag,
  })

  if (!puuid) {
    throw createError({
      statusCode: 400,
      statusMessage: "Missing summoner identifier",
    })
  }

  let region = rawRegion

  // autoload region if missing
  if (!region) {
    const r = await fetchRegion(puuid)
    region = r.region
  }

  try {
    const summonerV4 = await fetchSummonerByPuuid(puuid, region)
    const now = Date.now()
    const summoner = {
      icon: summonerV4.profileIconId,
      lastUpdate: now,
      level: summonerV4.summonerLevel,
      name: resolvedName,
      puuid: summonerV4.puuid,
      region: region || "unknown",
      tag: resolvedTag,
    }

    if (cacheDb) {
      try {
        await upsertCachedSummoner(cacheDb, {
          gameName: resolvedName,
          lastRiotSyncAt: now,
          lastSeenAt: now,
          profileIconId: summonerV4.profileIconId,
          puuid: summonerV4.puuid,
          region,
          summonerLevel: summonerV4.summonerLevel,
          tagLine: resolvedTag,
          updatedAt: now,
        })
      } catch (err) {
        console.warn("Failed summoner cache upsert", err)
      }
    }

    return summoner
  } catch (err) {
    console.error("❌ Failed to resolve summoner:", err)
    throw createError({
      statusCode: 502,
      statusMessage: "Failed to fetch summoner from Riot",
    })
  }
})
