//
import pLimit from "p-limit"
import { idsByPuuid, matchById } from "~~/server/domain"

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

  const matches = (
    await Promise.all(
      ids.map((id) =>
        limit(async () => {
          const match = await matchById(id, region)
          return match ? transformMatchData(match) : null
        })
      )
    )
  )
    .filter((m): m is MatchData => Boolean(m))
    .filter((m) => m.gameEndTimestamp > since)

  matches.sort((a, b) => b.gameEndTimestamp - a.gameEndTimestamp)

  return {
    cursor: ids.length,
    done: true,
    matches,
    newestTimestamp: matches[0]?.gameEndTimestamp ?? since,
  }

  // return null
})
