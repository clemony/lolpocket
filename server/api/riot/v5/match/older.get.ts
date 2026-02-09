//
// /server/api/matches/older.get.ts
import { idsByPuuid, matchById } from "#server/domain"

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
    const m = await matchById(id, region)
    results.push(transformMatchData(m))
  }

  const nextCursor = cursor + ids.length
  const done = ids.length < batchSize // if we didn’t fill the window, we're out of matches

  return {
    cursor: nextCursor,
    done,
    matches: results,
  }
})
