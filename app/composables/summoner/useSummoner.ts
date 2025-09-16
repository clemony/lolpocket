import { matchFilters } from '~~/shared/appdata'

export const SummonerKey = Symbol('SummonerProvider')

export interface PlayerData {
  summoner: Summoner
  matches: MatchData[]
  allMatches: MatchData[]
  filteredChampions: any
  useChampions: any
  useRoles: any
  useAllies: any
  useItems: any
  links: Record<string, string>
  loading: boolean
  filter: MatchFilter
  fetchMastery: () => void
  findSummoner: () => void
  setFilter: (string, key) => void
  clearFilters: () => void
}
export function useSummonerProvider(identifier: string) {
  console.log('identifier: ', identifier)

  const loading = ref(false)
  const ready = ref(false)
  const summoner = ref<Summoner | null>(null)
  const currentPuuid = ref<string | null>(
    typeof identifier === 'string' ? identifier : null
  )
  console.log('currentPuuid: ', currentPuuid)

  const { getMatchesForSummoner } = useIndexedDB()
  const allMatches = ref<MatchData[]>([])

  // --- FILTER STATE ---
  const filter = ref<MatchFilter>({
    patch: null,
    queue: 0,
    champion: null,
    ally: null,
    role: 'ALL',
  })

  // Example: Update filters directly
  /**
   * @example
   * const { setFilter } = useSummonerProvider(summoner.puuid)
   * function selectRole(role: string) {
   *   setFilter('role', role)
   * }
   *
   * function selectAlly(ally: string) {
   *   setFilter('ally', ally)
   * }
   */
  // --- FILTER HELPERS ---
  function setFilter<K extends keyof MatchFilter>(
    key: K,
    value: MatchFilter[K]
  ) {
    filter.value[key] = value
  }

  function clearFilters() {
    filter.value = {
      patch: null,
      queue: 0,
      champion: null,
      ally: null,
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
      const resolved = await ss().resolveSummoner({ puuid: currentPuuid.value })

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

  /*      FETCH from supabase user_public! table
  /*

 */
  // --- WATCH PUUID ---
  watch(currentPuuid, () => findSummoner(), { immediate: true })

  const state = {
    summoner,
    matches,
    allMatches,
    filter,
    setFilter,
    clearFilters,
    fetchMastery,
    findSummoner,
    useChampions: (championName?: string) =>
      useChampions(summoner.value.puuid, allMatches.value, championName),
    filteredChampions: (championName?: string) =>
      useChampions(summoner.value.puuid, matches.value, championName),
    useAllies: () =>
      useRepeatedTeammates(summoner.value.puuid, allMatches.value),
    useRoles: () => useMatchRoles(summoner.value.puuid, allMatches),
    links: () => generateSummonerLinks(summoner.value),
    loadMatches: () => loadMatchesFromDB,

    fetchNewMatches: async () => {
      if (!summoner.value)
        return
      console.log('fetchNewMatches:')
      allMatches.value = await useFetchMatches(currentPuuid.value)
      summoner.value.lastMatchUpdate = new Date()
    },

    forceReload: () => findSummoner({ force: true }),
    loading,
    ready,
  }

  provide(SummonerKey, state)
  return state
}

export function useSummonerInject() {
  const state = inject<{
    summoner: Ref<Summoner | null>
    currentPuuid: Ref<string | null>
    allMatches: Ref<MatchData[]>
    matches: Ref<MatchData[]>
    links: Record<string, string>
    filteredChampions: any
    useChampions: any
    useRoles: any
    filter: MatchFilter
    loading: Ref<boolean>
    ready: Ref<boolean>
    findSummoner: () => Promise<void>
    fetchNewMatches: () => Promise<void>
    setFilter: (string, key) => void
    forceReload: () => void
    fetchMastery: () => Promise<any>
    clearFilter: () => void
  }>(SummonerKey)

  if (!state) {
    throw new Error(
      'No Summoner provider found. Make sure provideSummoner is called in a parent component.'
    )
  }

  return state
}
