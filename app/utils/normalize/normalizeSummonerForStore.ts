/**
 * Normalize a summoner's data for storage in the store.
 * @param summoner The summoner data to normalize
 * @returns The normalized summoner data
 *
 * This function will:
 * - fetch the newest matches for the summoner (up to 50 matches)
 * - merge the new matches with the existing matches
 * - dedupe the matches
 * - sort the matches by game creation date
 * - update the summoner data with the new matches
 */
export async function normalizeSummonerForStore(
  summoner: Summoner
): Promise<Summoner> {
  console.log(" - normalizeSummonerForStore:", summoner)

  const puuid = summoner.puuid
  if (!puuid) throw new Error("normalizeSummonerForStore: puuid is null")

  const as = useAccountStore()
  const { addMatches } = useMatchDexie()

  let newFull: MatchData[] = []
  let newSimplified: SimplifiedMatchData[] = []

  const recentExistingIds =
    summoner.matches?.full
      ?.slice(0, 50) // or 100, depending on your appetite
      .map((m) => m.metadata.matchId) ?? []

  if (puuid === as.userAccount.riot.puuid) {
    const { matchData: syncedMatches, fetchInitialMatches } =
      useInitialMatchSync(puuid)
    await fetchInitialMatches()
    newFull = syncedMatches.full.value
    newSimplified = syncedMatches.simplified.value

    const result = await useGetMatches({
      puuid,
      existingIds: recentExistingIds,

      fetchMode: "new",
    })
    console.log(" - result:", result)

    newFull = result.full
    newSimplified = result.simplified

    await addMatches({ full: newFull, simplified: newSimplified })
  } else {
    const result = await useGetMatches({
      puuid,
      existingIds: recentExistingIds,

      fetchMode: "new",
    })
    console.log(" - result:", result)

    newFull = result.full
    newSimplified = result.simplified
  }

  // Merge with existing and dedupe
  const fullMap = new Map<string, MatchData>()
  for (const m of [...(summoner.matches?.full || []), ...newFull]) {
    fullMap.set(m.metadata.matchId, m)
  }

  const simplifiedMap = new Map<string, SimplifiedMatchData>()
  for (const s of [...(summoner.matches?.simplified || []), ...newSimplified]) {
    simplifiedMap.set(s.matchId, s)
  }

  const sortedFull = Array.from(fullMap.values()).sort(
    (a, b) => b.info.gameCreation - a.info.gameCreation
  )

  const sortedSimplified = Array.from(simplifiedMap.values())
    .sort((a, b) => b.gameCreation - a.gameCreation)
    .filter(isSimplifiedMatchData)

  if (!sortedFull[0]?.info?.participants) {
    throw new Error("normalizeSummonerForStore: invalid first match")
  }

  console.log(" - normalizeSummonerForStore: final summoner:", {
    ...summoner,
    matches: {
      full: sortedFull,
      simplified: sortedSimplified,
      lastUpdate: new Date(),
    },
  })

  return {
    ...summoner,
    matches: {
      full: sortedFull,
      simplified: sortedSimplified,
      lastUpdate: new Date(),
    },
  }
}
