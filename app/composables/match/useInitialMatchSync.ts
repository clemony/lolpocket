export function useInitialMatchSync(puuid: string) {
  const ready = ref(false)
  const loading = ref(false)
  const matchData = ref<MatchData[]>([])

  const { getAllMatches } = useIndexedDB()

  const fetchInitialMatches = async () => {
    if (!puuid)
      return
    loading.value = true
    try {
      const matches = await getAllMatches()
      if (matches.length === 0)
        return

      matchData.value = matches.sort(
        (a, b) => b.gameEndTimestamp - a.gameEndTimestamp
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

  return {
    matchData,
    fetchInitialMatches,
    loading,
    ready,
  }
}
