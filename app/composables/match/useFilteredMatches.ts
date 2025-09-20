import { matchFilters } from '~~/shared/appdata/filters/match-filters'

export function useFilteredMatches(puuid: string, matches: MatchData[]) {
  console.log('puuid: ', puuid)
  console.log('matches: ', matches)
  const matchMap = computed(() => {
    return new Map(matches.map(match => [match.gameEndTimestamp, match]))
  })

  console.log('matchMap: ', matchMap)
  const filtered = computed(() => {
    return matches.filter(match =>
      matchFilters(puuid, match, {
        ally: ms().filter.ally ?? null,
        champion: ms().filter.champion ?? null,
        patch: ms().filter.patch ?? null,
        queue: ms().filter.queue ?? null,
        role: ms().filter.role ?? null,
      })
    )
  })
  const filteredNoRole = computed(() => {
    return matches.filter(match =>
      matchFilters(puuid, match, {
        ally: ms().filter.ally ?? null,
        champion: ms().filter.champion ?? null,
        ignoreRole: true,
        patch: ms().filter.patch ?? null,
        queue: ms().filter.queue ?? null,
      })
    )
  })

  // Check if matches are still loading
  const loading = computed(() => {
    return matches.length === 0
  })

  // Only compute filtered matches if data is available
  const filteredMatches = computed(() => {
    if (loading.value)
      return []

    // Ensure we only filter when matches  are available
    return filtered.value
      .map(simplified => matchMap.value.get(simplified.gameEndTimestamp))
      .filter(Boolean) // Ensure no undefined matches
      .sort((a, b) => b.gameEndTimestamp - a.gameEndTimestamp)
  })
  const championsPlayed = computed(() => {
    return Array.from(
      new Set(
        matches.map(p =>
          ix().champNameById(
            p.participants.find(p => p.puuid === puuid).championId
          )
        )
      )
    )
  })

  return {
    championsPlayed,
    filtered,
    filteredMatches,
    filteredNoRole,
    loading,
  }
}
