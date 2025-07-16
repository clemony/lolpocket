interface SummonerIdentifier {
  puuid?: string
  region?: string
  name?: string
  tag?: string
}

export async function resolveSummonerFromRiot(
  region: string,
  name: string,
  tag: string
): Promise<Summoner> {
  const result = await $fetch<Summoner>("/api/resolve-summoner", {
    params: { region, name, tag },
  })
  return result
}

export function useSummoner(identifier: string | SummonerIdentifier = {}) {
  const as = useAccountStore()
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

      const resolved = await ss.resolveSummoner({
        puuid: currentPuuid.value,
      })

      summoner.value = resolved
      currentPuuid.value = resolved.puuid // in case it was resolved from name+tag
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

  const forceReload = () => fetchSummoner({ force: true })

  watch(
    currentPuuid,
    () => {
      fetchSummoner()
    },
    { immediate: true }
  )

  const setPuuid = (newPuuid: string) => {
    currentPuuid.value = newPuuid
  }

  return {
    summoner,
    loading,
    loadingMessage,
    ready,
    fetchSummoner,
    forceReload,
    refreshMatches,
    setPuuid,
  }
}
