import { fetchSummonerMastery } from "./helpers/fetchSummonerMastery"

export function useSummoner(identifier: string | SummonerIdentifier = {}) {
  const ss = useSummonerStore()
  const loading = ref(false)
  const ready = ref(false)

  const loadingMessage = computed(() => {
    if (!loading.value) return ""
    return "Loading Summoner..."
  })

  const currentPuuid = ref<string | null>(
    typeof identifier === "string" ? identifier : identifier.puuid || null
  )
  const summoner = ref<Summoner | null>(null)

  const fetchSummoner = async (options?: { force?: boolean }) => {
    loading.value = true
    ready.value = false
    try {
      if (!options?.force && currentPuuid.value) {
        const cached = ss.getSummoner(currentPuuid.value)
        if (cached) {
          summoner.value = cached
          ready.value = true
          loading.value = false
          return
        }
      }

      const resolved = await ss.resolveSummoner(
        typeof identifier === "string" ? { puuid: identifier } : identifier
      )

      summoner.value = resolved
      currentPuuid.value = resolved.puuid
      ss.limitCache(10)
    } catch (e) {
      console.error("❌ fetchSummoner failed:", e)
    } finally {
      loading.value = false
      ready.value = true
    }
  }

  const refreshMatches = async () => {
    if (!summoner.value) return
    console.log("refreshMatches:", summoner.value)

    const updated = await normalizeSummonerForStore(summoner.value)

    ss.setSummoner(updated)
  }

  watch(
    currentPuuid,
    () => {
      fetchSummoner()
    },
    { immediate: true }
  )

  async function fetchMastery(full = false) {
    if (!currentPuuid.value) return null
    return await fetchSummonerMastery(currentPuuid.value, full)
  }

  return {
    summoner,
    loading,
    loadingMessage,
    ready,
    fetchSummoner,
    refreshMatches,
    forceReload: () => fetchSummoner({ force: true }),
    fetchMastery,
    setPuuid: (newPuuid: string) => (currentPuuid.value = newPuuid),
  }
}
