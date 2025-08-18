export async function useFetchMatches(puuid: string) {
  console.log('puuid: ', puuid)
  if (!puuid)
    throw new Error('puuid is null')

  const { addMatches, getAllMatchIdsForPuuid, getMatchesForSummoner } = useIndexedDB()

  // Get all matches already stored for this summoner
  const existingIds = await getAllMatchIdsForPuuid(puuid)
  console.log('existingIds: ', existingIds)

  // Ask server for new matches (politely)
  const { matchData: newMatches } = await $fetch('/api/matches/fetch', {
    params: { puuid, existingIds },
  })

  // Store new matches
  if (newMatches.length) {
    await addMatches({ matchData: newMatches })
  }

  // Return all matches for this summoner from IndexedDB
  return await getMatchesForSummoner(puuid)
}