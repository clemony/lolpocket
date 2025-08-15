import { matchFilters } from '~/utils/filter/matchFilters'

export function useFilteredMatches(puuid: string, filters: MatchFilter) {
  const ss = useSummonerStore()
  const { matches: data } = useSummoner(puuid)
  const matches = ref<MatchData[]>([])

  if (data) {
    matches.value = data.value
  }

  const matchMap = computed(() => {
    return new Map(
      data.value.map(match => [match.gameEndTimestamp, match]),
    )
  })

  const filtered = computed(() => {
    return matches.value.filter(match =>
      matchFilters(puuid, match, {
        patch: filters.patch ?? null,
        queue: filters.queue ?? null,
        champion: filters.champion ?? null,
        ally: filters.ally ?? null,
        role: filters.role ?? null,
      }),
    )
  })
  const filteredNoRole = computed(() => {
    return matches.value.filter(match =>
      matchFilters(puuid, match, {
        patch: filters.patch ?? null,
        queue: filters.queue ?? null,
        champion: filters.champion ?? null,
        ally: filters.ally ?? null,
        ignoreRole: true,
      }),
    )
  })

  // Check if matches are still loading
  const loading = computed(() => {
    return (
      data.value.length === 0
    )
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
      new Set(matches.value.map(p => ix().champNameById(p.participants.find(p => p.puuid == puuid).championId))),
    )
  })

  return {
    filteredMatches,
    loading,
    filtered,
    filteredNoRole,
    championsPlayed,
  }
}
