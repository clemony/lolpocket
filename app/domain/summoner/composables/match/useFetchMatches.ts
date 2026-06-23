export async function useFetchMatches(summoner: Summoner) {
  if (!summoner.puuid) throw new Error("puuid is null")
  if (!summoner.region) throw new Error("region is null")

  const { getAllMatchIdsForPuuid, getMatchesForSummoner, putMatchData } =
    useIndexedDB()

  // Get all matches already stored for this summoner
  const existingIds = await getAllMatchIdsForPuuid(summoner.puuid)
  void existingIds

  // Ask server for new matches
  const { matches: newMatches } = await $fetch<MatchReturn>(
    "/api/riot/v5/match/newer",
    {
      params: { puuid: summoner.puuid, region: summoner.region, since: 0 }
    }
  )

  // Store new matches
  if (newMatches.length) {
    await putMatchData(newMatches)

    // ranked update if ranked matches are present
    const hasRanked = newMatches.some(
      (m) => m.queueId === 420 || m.queueId === 440
    )
    if (hasRanked) {
      void summonerStore().refreshRanked(summoner.puuid, summoner.region, {
        force: true
      })
    }
  }

  // Return all matches for this summoner
  return await getMatchesForSummoner(summoner.puuid)
}
