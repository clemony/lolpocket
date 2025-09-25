export async function useFetchMatches(puuid: string) {
  if (!puuid)
    throw new Error('puuid is null')

  const { getAllMatchIdsForPuuid, addMatches, getMatchesForSummoner }
    = useIndexedDB()
  const summonerStore = useSummonerStore()

  // Get all matches already stored for this summoner
  const existingIds = await getAllMatchIdsForPuuid(puuid)

  // Ask server for new matches
  const { matchData: newMatches } = await $fetch('/api/matches/fetch', {
    params: { puuid, existingIds },
  })

  // Store new matches
  if (newMatches.length) {
    await addMatches({ matchData: newMatches })

    // Fire-and-forget ranked update if new ranked matches are present
    const hasRanked = newMatches.some(
      m => m.queueId === 420 || m.queueId === 440
    )
    if (hasRanked) {
      ;(async () => {
        try {
          const summoner = summonerStore.getSummoner(puuid)
          if (summoner) {
            const ranked = await $fetch('/api/riot/fetchRankedData', {
              params: { puuid: summoner.puuid, region: summoner.region },
            })
            summonerStore.mergeSummonerData(puuid, ranked)
          }
        }
        catch (err) {
          console.error('🔥 Failed ranked refresh', err)
        }
      })()
    }
  }

  // Return all matches for this summoner
  return await getMatchesForSummoner(puuid)
}