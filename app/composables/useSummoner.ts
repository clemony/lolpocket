export function useSummoner(initialPuuid?: string) {
  console.log("useSummoner:", initialPuuid)

  const as = useAccountStore()
  const summonerStore = useSummonerStore()

  const currentPuuid = ref(initialPuuid || as.userAccount.riot.puuid)

  const usingOwnAccount = computed(
    () =>
      !currentPuuid.value || currentPuuid.value === as.userAccount.riot.puuid
  )

  const summoner = computed(
    () => summonerStore.getSummoner(currentPuuid.value) ?? null
  )

  const loading = ref(false)
  const ready = ref(false)

  const loadingMessage = computed(() => {
    if (!loading.value) return ""
    return usingOwnAccount.value ?
        "Loading your matches..."
      : "Searching for summoner..."
  })

  const fetchSummoner = async (options?: { force?: boolean }) => {
    console.log("fetchSummoner:", options?.force ? "force" : "not force")
    console.log("fetchSummoner: puuid:", currentPuuid.value)
    loading.value = true
    ready.value = false

    const puuid = currentPuuid.value
    if (!puuid) {
      console.log("fetchSummoner: return early, puuid is null")
      loading.value = false
      ready.value = true
      return
    }

    console.log("fetchSummoner: querying cache")
    const cached = summonerStore.getSummoner(puuid)
    if (cached && !options?.force) {
      console.log("fetchSummoner: return early, cached")
      ready.value = true
      loading.value = false
      return
    }

    console.log("fetchSummoner: fetching data from API")
    try {
      const rawSummoner = await useFetchSummonerData(puuid)
      console.log("fetchSummoner: fetched rawSummoner:", rawSummoner)
      await summonerStore.setSummoner(rawSummoner)
      console.log("fetchSummoner: set summoner in store")
      summonerStore.limitCache(10)
    } catch (e) {
      console.error("❌ Error fetching summoner:", e)
    } finally {
      console.log("fetchSummoner: finally")
      loading.value = false
      ready.value = true
    }
  }

  const refreshMatches = async () => {
    if (!summoner.value) return
    console.log("refreshMatches:", summoner.value)

    const updated = await normalizeSummonerForStore(summoner.value)

    summonerStore.setSummoner(updated)
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
    usingOwnAccount,
    fetchSummoner,
    forceReload,
    refreshMatches,
    setPuuid,
  }
}
