import type { MatchData, MatchReturn } from "@constants"
import pLimit from "p-limit"
import { idsByPuuid, matchById, transformMatchData } from "~~/server/domain"

export default defineEventHandler(async (event): Promise<MatchReturn> => {
  const puuid = getQuery(event).puuid as string
  const region = getQuery(event).region as string
  const since = Number(getQuery(event).since || 0)
  const queue = getQuery(event).queue
  console.log("🥸 - queue:", queue)

  const batchSize = 20
  const ids = await idsByPuuid({
    puuid,
    region,
    queue,
    start: 0,
    count: batchSize,
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
    .filter(Boolean)
    .filter((m) => m!.gameEndTimestamp > since)

  matches.sort((a, b) => b.gameEndTimestamp - a.gameEndTimestamp)

  return {
    matches,
    newestTimestamp: matches[0]?.gameEndTimestamp ?? since,
    cursor: ids.length,
    done: true,
  }

  //return null
})
