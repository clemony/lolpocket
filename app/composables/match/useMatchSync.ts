// composables/useMatchSync.ts
export function useMatchSync(puuid: string) {
  const loading = ref(false)
  const ready = ref(false)
  const matchData = ref<MatchData[]>([])

  const { getAllMatches, getAllMatchIds } = useMatchDexie()
  const ms = useMatchStore()

  /*   const initialSync = async () => {
    if (!puuid || ms.matches.length > 0) return
    loading.value = true
    try {
      const storedMatches = await getAllMatches()
      matchData.value = storedMatches.sort((a, b) => b.info.gameCreation - a.info.gameCreation)

      if (storedMatches.length > 0) {
        const { simplified } = await useGetMatches({
          puuid,
          existingIds: storedMatches.map(m => m.metadata.matchId),
        })
        // matchData already contains Dexie content
        // useGetMatches handles pushing to Pinia
      }
    } finally {
      loading.value = false
      ready.value = true
    }
  } */

  const loadMoreMatches = async ({
    fetchMode = "new",
    count = 20,
  }: {
    fetchMode?: "new" | "old"
    count?: number
  } = {}) => {
    loading.value = true
    try {
      const existingIds = (await getAllMatchIds()).map(String)
      const { full } = await useGetMatches({
        puuid,
        existingIds,
        count,
        fetchMode,
      })

      matchData.value.push(...full)
      matchData.value.sort((a, b) => b.info.gameCreation - a.info.gameCreation)
    } finally {
      loading.value = false
    }
  }

  /*   watchEffect(() => {
    if (puuid && ms.matches.length === 0) {
      initialSync()
    }
  })  */

  return {
    matchData,
    ready,
    loading,
    loadMoreMatches,
  }
}
