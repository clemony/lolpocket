export function useFilteredMatches(
  fullMatches: Ref<MatchData[]>,
) {
  const ms = useMatchStore()
  const { matches: simplifiedMatches, queueSelect, championSelect, playerSelect, patchSelect } = storeToRefs(ms)
  console.log('💠 - simplifiedMatches:', simplifiedMatches)

  // Map full matches by gameEndTimestamp (assuming it's unique + matches the simplified data)
  const matchMap = computed(() => {
    return new Map(
      fullMatches.value.map(match => [match.info.gameEndTimestamp, match]),
    )
  })

  // filter using piniaMatchData[]
  const filteredSimplified = computed(() => {
    return simplifiedMatches.value.filter((match) => {
      const ds = useDataStore()

      const matchesPatch
  = !patchSelect.value || patchSelect.value === ds.currentPatch || match.gameVersion === patchSelect.value

      const matchesQueue
  = !queueSelect.value || Number(queueSelect.value) === 0 || match.queueId === Number(queueSelect.value)

      const matchesChampion
        = !championSelect.value
          || championSelect.value === 'All'
          || match.championName === championSelect.value

      const matchesPlayer
      = !playerSelect.value || match.participants.some(p => p.riotIdGameName === playerSelect.value)

      return matchesPatch && matchesQueue && matchesChampion && matchesPlayer
    })
  })

  // ✅ guard to prevent filtering too early
  const dataReady = computed(() => {
    return fullMatches.value.length > 0 && simplifiedMatches.value.length > 0
  })

  const filteredMatches = computed(() => {
    if (!dataReady.value)
      return []

    return filteredSimplified.value
      .map(simplified => matchMap.value.get(simplified.gameEndTimestamp))
      .filter(Boolean)
      .sort((a, b) => b.info.gameEndTimestamp - a.info.gameEndTimestamp) as MatchData[]
  })

  const championsPlayed = computed(() => {
    return Array.from(
      new Set(simplifiedMatches.value.map(m => m.championName)),
    )
  })

  return {
    filteredMatches,
    dataReady,
    championsPlayed,
  }
}