import { idsByPuuid, matchById, transformMatchData } from "~~/server/helpers"
import type { MatchReturn } from "~~/shared"

export default defineEventHandler(async (event): Promise<MatchReturn> => {
  const puuid = getQuery(event).puuid as string
  const cursor = Number(getQuery(event).cursor || 0)
  const region = "americas"
  const batchSize = 100

  // fetch next batch of match IDs
  const ids = await idsByPuuid({
    puuid,
    region,
    start: cursor,
    count: batchSize,
  })
  if (!ids.length) {
    return { matches: [], cursor, done: true }
  }

  const matches = await Promise.all(ids.map((id) => matchById(id, region)))
  const transformed = matches.map(transformMatchData)

  return {
    matches: transformed,
    cursor: cursor + batchSize,
    done: transformed.length < batchSize,
  }
})
