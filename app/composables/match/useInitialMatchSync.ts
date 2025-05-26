import { ref, watchEffect } from 'vue'

export function useInitialMatchSync(puuid: string) {
  const ready = ref(false)
  const loading = ref(false)
  const matchData = ref<MatchData[]>([]) // Full match data

  const ms = useMatchStore()
  const as = useAccountStore()
  const { getAllMatches } = useMatchDexie()
  const { simplifyMatch } = useMatchSimplifier(puuid)

  const fetchInitialMatches = async () => {
    if (!puuid)
      return
    loading.value = true
    try {
      const matches = await getAllMatches()
      if (matches.length === 0)
        return

      matchData.value = matches.sort((a, b) => b.info.gameCreation - a.info.gameCreation)
      const simplified = matchData.value.map(simplifyMatch).filter(Boolean) as SimplifiedMatchData[]
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
    matchData, // ⬅️ full match data
    fetchInitialMatches,
    loading,
    ready,
  }
}