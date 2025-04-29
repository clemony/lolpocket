import { matchFilters } from 'utils/filters/matchFilters'

export function useFilteredMatches(fullMatches: Ref<MatchData[]>, puuid: string) {
  const ms = useMatchStore()
  const ss = useSummonerStore()
  const summoner = ss.getSummoner(puuid)
  const simplifiedMatches = ref<SimplifiedMatchData[]>([])

  if (summoner) {
    simplifiedMatches.value = summoner.simplifiedMatches
  }

  const { queueSelect, championSelect, playerSelect, patchSelect, roleSelect } = storeToRefs(ms)

  // Map full matches by gameEndTimestamp
  const matchMap = computed(() => {
    return new Map(
      fullMatches.value.map(match => [match.info.gameEndTimestamp, match]),
    )
  })
  const filteredSimplified = computed(() => {
    return simplifiedMatches.value.filter(match =>
      matchFilters(match, {
        patchSelect: patchSelect.value,
        queueSelect: queueSelect.value,
        championSelect: championSelect.value,
        playerSelect: playerSelect.value,
        roleSelect: roleSelect.value,
      }),
    )
  })

  const filteredSimplifiedNoRole = computed(() => {
    return simplifiedMatches.value.filter(match =>
      matchFilters(match, {
        patchSelect: patchSelect.value,
        queueSelect: queueSelect.value,
        championSelect: championSelect.value,
        playerSelect: playerSelect.value,
        roleSelect: roleSelect.value,
        ignoreRole: true,
      }),
    )
  })

  // Check if matches are still loading
  const loading = computed(() => {
    return (
      simplifiedMatches.value.length === 0
      || fullMatches.value.length === 0
    )
  })

  // Only compute filtered matches if data is available
  const filteredMatches = computed(() => {
    if (loading.value)
      return []

    // Ensure we only filter when simplifiedMatches and fullMatches are available
    return filteredSimplified.value
      .map(simplified => matchMap.value.get(simplified.gameEndTimestamp))
      .filter(Boolean) // Ensure no undefined matches
      .sort((a, b) => b.info.gameEndTimestamp - a.info.gameEndTimestamp)
  })
  const championsPlayed = computed(() => {
    return Array.from(
      new Set(simplifiedMatches.value.map(m => m.championName)),
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