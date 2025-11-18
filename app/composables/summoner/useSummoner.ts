import { bgArt } from '#shared/data'
import type { MatchFilter } from '~/stores'

export const SummonerKey = Symbol('SummonerProvider')

export function useSummonerProvider(identifier: string) {
  const loading = ref(false)
  const ready = ref(false)
  const summoner = ref<Summoner | null>(null)
  const currentPuuid = ref<string | null>(
    typeof identifier === 'string' ? identifier : null
  )

  const { getMatchesForSummoner } = useIndexedDB()

  const allMatches = ref<MatchData[]>([])

  // --- FILTER STATE ---
  const filter = ref<MatchFilter>({
    ally: '',
    champion: '',
    patch: 0,
    queue: 0,
    role: 'ALL',
  })

  // --- FILTER HELPERS ---
  function setFilter<K extends keyof MatchFilter>(
    key: K,
    value: MatchFilter[K]
  ) {
    filter.value[key] = value
  }

  function clearFilters() {
    filter.value = {
      ally: '',
      champion: '',
      patch: 0,
      queue: 0,
      role: 'ALL',
    }
  }

  // --- FILTERED MATCHES ---
  const matches = computed(() => {
    if (
      !filter.value
      || Object.values(filter.value).every(v => !v || v === 0 || v === 'ALL')
    ) {
      return allMatches.value
    }
    return allMatches.value.filter(match =>
      matchFilters(currentPuuid.value!, match, filter.value)
    )
  })

  const filteredChampionList = computed(() => {
    if (
      !filter.value
      || Object.values(filter.value).every(v => !v || v === 0 || v === 'ALL')
    ) {
      return allMatches.value
    }
    return allMatches.value.filter(match =>
      matchFiltersIgnoreChampion(currentPuuid.value!, match, filter.value)
    )
  })

  const loadMatchesFromDB = async () => {
    if (!summoner.value)
      return
    allMatches.value = await getMatchesForSummoner(summoner.value.puuid)
  }

  const findSummoner = async (options?: { force?: boolean }) => {
    if (!currentPuuid.value)
      return
    loading.value = true
    ready.value = false

    try {
      const resolved = await ss().resolveByPuuid(currentPuuid.value)

      currentPuuid.value = resolved.puuid
      summoner.value = resolved

      await loadMatchesFromDB()
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

  // --- SPLASH ---
  const splash = computed(() => {
    if (!allMatches.value.length)
      return getRandom(Object.values(bgArt))
    const c = useChampions(currentPuuid.value, allMatches.value)?.top()?.key
    if (!c)
      return getRandom(Object.values(bgArt))
    else return getSplash(c, 'uncentered', getRandom(skinIndex[c]))
  })

  // --- WATCH PUUID ---
  watch(currentPuuid, () => findSummoner(), { immediate: true })

  const state = {
    summoner,

    // match
    allMatches,
    matches,

    // data
    allies: () => useRepeatedTeammates(summoner.value.puuid, allMatches.value),
    fetchMastery,
    roles: () => useMatchRoles(summoner.value.puuid, allMatches),

    // champions
    champions: (opt?: UseChampionOptions) =>
      useChampions(
        summoner.value.puuid,
        opt?.filtered ? filteredChampionList.value : allMatches.value,
        opt?.champion
      ),
    findSummoner,
    splash,

    // filters
    clearFilters,
    filter,
    filteredChampionList,
    setFilter,

    // loading
    forceReload: () => findSummoner({ force: true }),
    loading,
    ready,

    // fetch
    fetchNewMatches: async () => {
      if (!summoner.value)
        return
      allMatches.value = await useFetchMatches(summoner.value)
      summoner.value.updatedMatch = Date.now()
    },
    loadMatches: () => loadMatchesFromDB,
  }

  provide(SummonerKey, state)
  return state
}

export function useSummonerInject() {
  const state = inject<SummonerInject>(SummonerKey)

  if (!state) {
    throw new Error(
      'No Summoner provider found. Make sure provideSummoner is called in a parent component.'
    )
  }
  return state
}
