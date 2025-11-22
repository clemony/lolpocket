import { idsByPuuid, matchById, transformMatchData } from ".."

export async function fetchOlderMatches(
  puuid: string,
  cursor: number,
  region = "americas"
) {
  // fetch 100 older match IDs starting from cursor
  const ids = await idsByPuuid({ puuid, start: cursor, count: 100, region })

  if (!ids.length) {
    return { matches: [], nextCursor: cursor, done: true }
  }

  const data = await Promise.all(ids.map((id) => matchById(id, region)))

  const transformed = data.map(transformMatchData)

  return {
    matches: transformed,
    nextCursor: cursor + ids.length,
    done: ids.length < 100, // riot history exhausted
  }
}
