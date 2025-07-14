import { matchFilters } from "utils/filters/matchFilters"

export function useFilteredMatches(
  puuid: string,
  filters: MatchFilter,
  matches?: Ref<MatchData[]>
) {
  const ss = useSummonerStore()
  const summoner = ss.getSummoner(puuid)
  const simplifiedMatches = ref<SimplifiedMatchData[]>([])

  if (summoner) {
    simplifiedMatches.value = summoner.matches.simplified
  }

  const matchMap = computed(() => {
    return new Map(
      summoner.matches.full.map((match) => [match.info.gameEndTimestamp, match])
    )
  })

  const filteredSimplified = computed(() => {
    return simplifiedMatches.value.filter((match) =>
      matchFilters(match, {
        patch: filters.patch ?? null,
        queue: filters.queue ?? null,
        champion: filters.champion ?? null,
        ally: filters.ally ?? null,
        role: filters.role ?? null,
      })
    )
  })
  const filteredSimplifiedNoRole = computed(() => {
    return simplifiedMatches.value.filter((match) =>
      matchFilters(match, {
        patch: filters.patch ?? null,
        queue: filters.queue ?? null,
        champion: filters.champion ?? null,
        ally: filters.ally ?? null,
        ignoreRole: true,
      })
    )
  })

  // Check if matches are still loading
  const loading = computed(() => {
    return (
      simplifiedMatches.value.length === 0 || summoner.matches.full.length === 0
    )
  })

  // Only compute filtered matches if data is available
  const filteredMatches = computed(() => {
    if (loading.value) return []

    // Ensure we only filter when simplifiedMatches and fullMatches are available
    return filteredSimplified.value
      .map((simplified) => matchMap.value.get(simplified.gameEndTimestamp))
      .filter(Boolean) // Ensure no undefined matches
      .sort((a, b) => b.info.gameEndTimestamp - a.info.gameEndTimestamp)
  })
  const championsPlayed = computed(() => {
    return Array.from(
      new Set(simplifiedMatches.value.map((m) => m.championName))
    )
  })

  return {
    filteredMatches,
    loading,
    filteredSimplified,
    filteredSimplifiedNoRole,
    championsPlayed,
  }
}
