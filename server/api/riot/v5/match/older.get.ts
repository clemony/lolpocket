//
// /server/api/matches/older.get.ts
import { idsByPuuid, matchById } from "#server/domain"
import {
  getSummonerCacheDbForEvent,
  upsertCachedMatchParticipants,
} from "~~/server/domain/d1/summoner-cache"
import {
  getMatchAnalyticsDb,
  persistMatchAnalytics,
  toMatchAnalyticsTallyProjection
} from "~~/server/domain/riot/match/analytics"
import { transformMatchData } from "~~/server/domain/riot/match/transformMatchData"

export default defineEventHandler(async (event): Promise<MatchReturn> => {
  const puuid = getQuery(event).puuid as string
  const cursor = Number(getQuery(event).cursor || 0)
  const region = getQuery(event).region as string
  const queueQuery = getQuery(event).queue
  const queue = Array.isArray(queueQuery) ? queueQuery[0] : queueQuery
  const normalizedQueue =
    typeof queue === "string" || typeof queue === "number" ? queue : undefined

  const batchSize = 20
  const results: MatchData[] = []
  const analytics = []

  // fetch next window of ids
  const ids = await idsByPuuid({
    puuid,
    count: batchSize,
    queue: normalizedQueue,
    region,
    start: cursor,
  })

  if (!ids.length) {
    // no more matches at all
    console.log("🥸 - ids.length:", ids.length)
    return { cursor, done: true, matches: [] }
  }

  // stream-match loading to avoid blowing ram
  for (const id of ids) {
    // fetch each match individually to prevent promise.all spikes
    const rawMatch = await matchById(id, region)
    const clientMatch = transformMatchData(rawMatch)
    results.push(clientMatch)
    analytics.push(toMatchAnalyticsTallyProjection(rawMatch, clientMatch))
  }

  const nextCursor = cursor + ids.length
  const done = ids.length < batchSize // if we didn’t fill the window, we're out of matches
  await upsertCachedMatchParticipants(
    await getSummonerCacheDbForEvent(event),
    results
  )
  try {
    const analyticsDb = getMatchAnalyticsDb(event)
    await persistMatchAnalytics(analyticsDb, analytics)
  } catch (err) {
    console.warn("Failed match analytics persistence", err)
  }

  return {
    cursor: nextCursor,
    done,
    matches: results,
  }
})
