import type { MatchData, MatchReturn } from "~~/shared"
import { idsByPuuid, matchById, transformMatchData } from ".."

export async function fetchNewerMatches(
  puuid: string,
  since: number
): Promise<MatchReturn> {
  const region = "americas"

  let index = 0
  const batchSize = 100
  const results: MatchData[] = []
  let hitOlderThanSince = false

  while (!hitOlderThanSince) {
    const ids = await idsByPuuid({
      puuid,
      region,
      start: index,
      count: batchSize,
    })
    if (!ids.length) break

    const matches = await Promise.all(ids.map((id) => matchById(id, region)))
    const transformed = matches.map(transformMatchData)

    for (const m of transformed) {
      if (m.gameEndTimestamp > since) {
        results.push(m)
        continue
      }
      hitOlderThanSince = true
      break
    }

    index += batchSize
    if (ids.length < batchSize) break
  }

  const newestTimestamp = results[0]?.gameEndTimestamp ?? since
  const done = results.length === 0 || index >= 10000 // optional: arbitrary max limit

  return {
    matches: results,
    newestTimestamp,
    cursor: index,
    done,
  }
}
