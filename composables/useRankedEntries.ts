// composables/useRankedEntries.ts
export async function fetchRankedEntries(puuid: string) {
  const { leagueEntry } = await $fetch('/api/shieldbow/get-summoner-ranked-data', {
    query: { puuid },
  })

  const entries: Record<string, RankedEntry> = {}

  for (const queue in leagueEntry) {
    const entry = leagueEntry[queue]
    entries[queue] = {
      tier: entry.tier,
      division: entry.division,
      lp: entry.lp,
      wins: entry.wins,
      losses: entry.losses,
      queueType: queue,
    }
  }

  const as = useAccountStore()
  as.rankedEntries = entries
  console.log("💠 - fetchRankedEntries - as.rankedEntries:", as.rankedEntries)

  return entries
}