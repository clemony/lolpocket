//
import pLimit from "p-limit"
import { idsByPuuid, matchById } from "~~/server/domain"
import {
  getSummonerCacheDbForEvent,
  upsertCachedMatchParticipants,
} from "~~/server/domain/d1/summoner-cache"
import {
  getMatchAnalyticsDbForEvent,
  persistMatchAnalytics,
  toMatchAnalyticsTallyProjection
} from "~~/server/domain/riot/match/analytics"
import { transformMatchData } from "~~/server/domain/riot/match/transformMatchData"

export default defineEventHandler(async (event): Promise<MatchReturn> => {
  const puuid = getQuery(event).puuid as string
  const region = getQuery(event).region as string
  const since = Number(getQuery(event).since || 0)
  const queueQuery = getQuery(event).queue
  const queue = Array.isArray(queueQuery) ? queueQuery[0] : queueQuery
  const normalizedQueue =
    typeof queue === "string" || typeof queue === "number" ? queue : undefined
  console.log("🥸 - queue:", queue)

  const batchSize = 20
  const ids = await idsByPuuid({
    puuid,
    count: batchSize,
    queue: normalizedQueue,
    region,
    start: 0,
  })

  const limit = pLimit(5)

  const projectedMatches = (
    await Promise.all(
      ids.map((id) =>
        limit(async () => {
          const rawMatch = await matchById(id, region)
          if (!rawMatch) return null

          const clientMatch = transformMatchData(rawMatch)
          return {
            analytics: toMatchAnalyticsTallyProjection(rawMatch, clientMatch),
            clientMatch
          }
        })
      )
    )
  )
    .filter((m): m is {
      analytics: ReturnType<typeof toMatchAnalyticsTallyProjection>
      clientMatch: MatchData
    } => Boolean(m))
    .filter((m) => m.clientMatch.gameEndTimestamp > since)

  const matches = projectedMatches.map(item => item.clientMatch)
  matches.sort((a, b) => b.gameEndTimestamp - a.gameEndTimestamp)
  console.log("🥸 - matches:", matches)
  await upsertCachedMatchParticipants(
    await getSummonerCacheDbForEvent(event),
    matches
  )
  try {
    const analyticsDb = await getMatchAnalyticsDbForEvent(event)
    await persistMatchAnalytics(
      analyticsDb,
      projectedMatches.map(item => item.analytics)
    )
  } catch (err) {
    console.warn("Failed match analytics persistence", err)
  }

  return {
    done: true,
    matches,
    newestTimestamp: matches[0]?.gameEndTimestamp ?? since,
  }

  // return null
})
