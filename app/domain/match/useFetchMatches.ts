export async function useFetchMatches(summoner: Summoner) {
  if (!summoner.puuid) throw new Error("puuid is null")
  if (!summoner.region) throw new Error("region is null")

  const { getAllMatchIdsForPuuid, getMatchesForSummoner } = useIndexedDB()

  // Get all matches already stored for this summoner
  const existingIds = await getAllMatchIdsForPuuid(summoner.puuid)

  // Ask server for new matches
  const { matches: newMatches } = await $fetch<MatchReturn>(
    "/riot/v5/match/batch",
    {
      params: { puuid: summoner.puuid, existingIds, region: summoner.region },
    }
  )

  // Store new matches
  if (newMatches.length) {
    // await useAddMatches(newMatches)

    // ranked update if ranked matches are present
    const hasRanked = newMatches.some(
      (m) => m.queueId === 420 || m.queueId === 440
    )
    if (hasRanked) {
      ;(async () => {
        try {
          const res = await $fetch<{ ranked: Summoner["ranked"] }>(
            "/riot/v4/league/entries/byPuuid",
            {
              params: { puuid: summoner.puuid, region: summoner.region },
            }
          )

          sSummoner().mergeRanked(summoner.puuid, res.ranked)
        } catch (err) {
          console.error("🔥 Failed ranked refresh", err)
        }
      })()
    }
  }

  // Return all matches for this summoner
  return await getMatchesForSummoner(summoner.puuid)
}
