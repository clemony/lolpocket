import { fetchMatchById, fetchMatchIds } from "riot"

export async function fetchNewMatches(
  puuid: string,
  region: string,
  existingIds: string[]
) {
  const newestIds = await fetchMatchIds(puuid, region, 0, 100)

  if (!newestIds.length) return { matchData: [] }

  const missing = newestIds.filter((id) => !existingIds.includes(id))
  if (!missing.length) return { matchData: [] }

  const idsToFetch = missing.slice(0, 20)

  const matches = await Promise.all(
    idsToFetch.map((id) => fetchMatchById(id, region))
  )

  return {
    matchData: matches.map(transformMatchData),
  }
}
