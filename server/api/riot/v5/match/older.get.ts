// /server/api/matches/older.get.ts
import { idsByPuuid, matchById, transformMatchData } from "~~/server/helpers"
import type { MatchData, MatchReturn } from "~~/shared"

export default defineEventHandler(async (event): Promise<MatchReturn> => {
  const puuid = getQuery(event).puuid as string
  const cursor = Number(getQuery(event).cursor || 0)
  const region = getQuery(event).region as string
  const queue = getQuery(event).queue

  const batchSize = 20
  const results: MatchData[] = []

  // fetch next window of ids
  const ids = await idsByPuuid({
    puuid,
    region,
    queue,
    start: cursor,
    count: batchSize,
  })

  if (!ids.length) {
    // no more matches at all
    return { matches: [], cursor, done: true }
  }

  // stream-match loading to avoid blowing ram
  for (const id of ids) {
    // fetch each match individually to prevent promise.all spikes
    const m = await matchById(id, region)
    results.push(transformMatchData(m))
  }

  const nextCursor = cursor + ids.length
  const done = ids.length < batchSize // if we didn’t fill the window, we're out of matches

  return {
    matches: results,
    cursor: nextCursor,
    done,
  }
})
