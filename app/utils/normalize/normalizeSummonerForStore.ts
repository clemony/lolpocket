export async function normalizeSummonerForStore(
  summoner: Summoner,
): Promise<Summoner> {
  if (!summoner.puuid)
    throw new Error('puuid is null')

  const { addMatches, sortMatchIdsByCreation, getAllMatchIds } = useIndexedDB()

  // Get all stored match IDs so we don't re-fetch
  const existingIds = await getAllMatchIds()

  // Fetch new matches from our server API
  const { matchData: newMatches } = await $fetch('/api/matches/fetch', {
    params: {
      puuid: summoner.puuid,
      existingIds,
    },
  })

  // Store full matches in Dexie
  if (newMatches.length) {
    await addMatches({ matchData: newMatches })
  }

  // Merge all match IDs (existing + new) and sort by creation
  const allIds = Array.from(new Set([
    ...(summoner.matchIds || []),
    ...newMatches.map(m => m.matchId),
  ]))

  const sortedIds = await sortMatchIdsByCreation(allIds)

  return {
    ...summoner,
    matchIds: sortedIds,
    lastUpdate: new Date(),
  }
}