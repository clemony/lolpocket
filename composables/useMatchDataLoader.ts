

export function useMatchDataLoader() {
  const matchData = ref<MatchData[]>([])
  const loading = ref(false)

  const { getAllMatches } = useMatchDexie()

  const loadMatches = async () => {
    loading.value = true
    const matches = await getAllMatches()
    matchData.value = matches.sort((a, b) => b.info.gameCreation - a.info.gameCreation)
    loading.value = false
  }

  return {
    matchData,
    loading,
    loadMatches,
  }
}