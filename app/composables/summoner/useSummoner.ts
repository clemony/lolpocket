export function useSummoner(identifier: string) {
  console.log('identifier: ', identifier)
  const ss = useSummonerStore()
  const { getMatchesForSummoner } = useIndexedDB()

  const loading = ref(false)
  const ready = ref(false)
  const summoner = ref<Summoner | null>(null)
  const currentPuuid = ref<string | null>(
    typeof identifier === 'string' ? identifier : null,
  )

  console.log('currentPuuid: ', currentPuuid)
  const loadingMessage = ref('')

  // --- REF FOR MATCHES ---
  const matches = ref<MatchData[]>([])

  // --- UPDATE MATCHES + TEAMS (optimized) ---
  const updateMatches = async () => {
    if (!summoner.value)
      return

    const newMatches = await getMatchesForSummoner(summoner.value.puuid)

    // Only process matches we haven't counted yet
    const existingMatchIds = new Set(summoner.value.processedMatchIds || [])
    const unprocessedMatches = newMatches.filter(m => !existingMatchIds.has(m.matchId))

    // Merge processed matchIds
    summoner.value.processedMatchIds = [
      ...(summoner.value.processedMatchIds || []),
      ...unprocessedMatches.map(m => m.matchId),
    ]

    matches.value = newMatches

    // --- Update repeatedTeammates only for new matches ---
    const teammates = { ...summoner.value.repeatedTeammates ?? {} }

    for (const match of unprocessedMatches) {
      for (const ally of match.participants) {
        if (ally.puuid === summoner.value.puuid)
          continue
        const key = ally.riotIdGameName
        if (!teammates[key])
          teammates[key] = { games: 0, wins: 0, profileIcon: 0, riotIdGameName: '' }
        teammates[key].games++
        if (ally.win)
          teammates[key].wins++
      }
    }

    summoner.value.repeatedTeammates = teammates
    ss.mergeSummonerData(summoner.value.puuid, {
      repeatedTeammates: teammates,
      processedMatchIds: summoner.value.processedMatchIds,
    })
  }

  // --- FETCH SUMMONER ---
  const fetchSummoner = async (options?: { force?: boolean }) => {
    console.log('currentPuuid.vakhkhkhkhkhklue: ', currentPuuid.value)
    if (!currentPuuid.value)
      return
    loading.value = true
    loadingMessage.value = 'Loading Summoner...'
    ready.value = false

    try {
      if (!options?.force) {
        const cached = ss.getSummoner(currentPuuid.value)
        if (cached) {
          summoner.value = cached
          await updateMatches()
          ready.value = true
          loading.value = false
          return
        }
      }

      const resolved = await ss.resolveSummoner(
        typeof identifier === 'string'
          ? { puuid: identifier }
          : identifier,
      )
      currentPuuid.value = resolved.puuid

      /*       const splash = await fetchProfileSplash(resolved.puuid)
      if (splash)
        resolved.profileSplash = splash.splash_url */

      summoner.value = resolved
      ss.setSummoner(resolved)
      ss.limitCache(30)
    /*   await updateMatches() */
    }
    catch (e) {
      console.error('❌ fetchSummoner failed:', e)
    }
    finally {
      loading.value = false
      ready.value = true
    }
  }

  // --- FETCH MASTERY ---
  const fetchMastery = async () => {
    if (!currentPuuid.value)
      return null
    return await fetchSummonerMastery(currentPuuid.value)
  }

  // --- WATCH PUUID ---
  /*   watch(
    currentPuuid,
    () => {
      fetchSummoner()
    },
    { immediate: true },
  )
 */
  return {
    summoner,
    currentPuuid,
    loading,
    ready,
    loadingMessage,
    matches,
    fetchSummoner,
    updateMatches,
    refreshMatches: updateMatches,
    forceReload: () => fetchSummoner({ force: true }),
    fetchMastery,
    setPuuid: (newPuuid: string) => (currentPuuid.value = newPuuid),
  }
}