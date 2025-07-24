export function useInitialMatchSync(puuid: string) {
  const ready = ref(false)
  const loading = ref(false)
  const fullMatchData = ref<MatchData[]>([]) // Full match data
  const simplifiedMatchData = ref<SimplifiedMatchData[]>([])

  const { getAllMatches, getAllSimplifiedMatches } = useMatchDexie()

  const fetchInitialMatches = async () => {
    if (!puuid)
      return
    loading.value = true
    try {
      const matches = await getAllMatches()
      if (matches.length === 0)
        return

      fullMatchData.value = matches.sort(
        (a, b) => b.info.gameCreation - a.info.gameCreation,
      )

      const simplifiedMatches = await getAllSimplifiedMatches()
      if (simplifiedMatches.length === 0)
        return

      simplifiedMatchData.value = simplifiedMatches.sort(
        (a, b) => b.gameCreation - a.gameCreation,
      )
    }
    finally {
      loading.value = false
      ready.value = true
    }
  }

  watchEffect(() => {
    if (puuid) {
      fetchInitialMatches()
    }
  })
  const matchData = {
    full: fullMatchData, // ⬅️ full match data
    simplified: simplifiedMatchData,
  }
  return {
    matchData,
    fetchInitialMatches,
    loading,
    ready,
  }
}
