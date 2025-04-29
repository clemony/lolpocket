export function useSummoner(initialPuuid?: string) {
  const as = useAccountStore()
  const summonerStore = useSummonerStore() // Get the Pinia store

  const currentPuuid = ref(initialPuuid || as.userAccount.puuid)
  const usingOwnAccount = computed(() => !currentPuuid.value || currentPuuid.value === as.userAccount.puuid)

  const summoner = ref<Summoner | null>(null)
  const loading = ref(false)
  const ready = ref(false)

  const loadingMessage = computed(() => {
    if (!loading.value)
      return ''
    if (usingOwnAccount.value)
      return 'Loading your matches...'
    return 'Searching for summoner...'
  })

  const matchData = ref<MatchData[]>([])

  const fetchSummoner = async (options?: { force?: boolean }) => {
    loading.value = true
    ready.value = false

    const puuid = currentPuuid.value
    if (!puuid) {
      loading.value = false
      ready.value = true
      return
    }

    if (!options?.force) {
      const cachedSummoner = summonerStore.getSummoner(puuid)
      if (cachedSummoner) {
        summoner.value = cachedSummoner
        matchData.value = cachedSummoner.matches
        loading.value = false
        ready.value = true
        return
      }
    }

    const matchesPromise = (async () => {
      if (usingOwnAccount.value) {
        const { matchData: initialMatches, fetchInitialMatches } = useInitialMatchSync(puuid)
        await fetchInitialMatches()
        return initialMatches.value
      }
      else {
        const { newMatches } = await useGetMatches({ puuid, start: 0, count: 20 })
        return newMatches
      }
    })()

    const summonerPromise = useFetchSummonerData(puuid)

    const [matchesResult, summonerResult] = await Promise.all([matchesPromise, summonerPromise])
    summonerResult.matches = matchesResult
    matchData.value = matchesResult

    const normalizedSummoner = normalizeSummonerForStore(summonerResult)
    if (puuid === as.userAccount.puuid) {
      as.userSummoner = normalizedSummoner
    }

    summoner.value = normalizedSummoner

    summonerStore.setSummoner(normalizedSummoner)
    summonerStore.limitCache(5)

    loading.value = false
    ready.value = true
  }

  const forceReload = () => fetchSummoner({ force: true })

  watch(currentPuuid, () => {
    fetchSummoner()
  }, { immediate: true })

  const setPuuid = (newPuuid: string) => {
    currentPuuid.value = newPuuid
  }

  return {
    summoner,
    loading,
    loadingMessage,
    ready,
    usingOwnAccount,
    setPuuid,
    fetchSummoner,
    forceReload,
  }
}