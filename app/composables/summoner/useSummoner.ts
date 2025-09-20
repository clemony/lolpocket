import { matchFilters } from '~~/shared/appdata'

export const SummonerKey = Symbol('SummonerProvider')

export interface PlayerData {
  allMatches: MatchData[]
  clearFilters: () => void
  fetchMastery: () => void
  filter: MatchFilter
  filteredChampions: any
  findSummoner: () => void
  links: Record<string, string>
  loading: boolean
  matches: MatchData[]
  setFilter: (string, key) => void
  summoner: Summoner
  useAllies: any
  useChampions: any
  useItems: any
  useRoles: any
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
  console.log('🌱 - useSummonerProvider - getMatchesForSummoner:', getMatchesForSummoner)
  const allMatches = ref<MatchData[]>([])

  // --- FILTER STATE ---
  const filter = ref<MatchFilter>({
    ally: null,
    champion: null,
    patch: null,
    queue: 0,
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
      ally: null,
      champion: null,
      patch: null,
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

  const loadMatchesFromDB = async () => {
    if (!summoner.value)
      return
    allMatches.value = await getMatchesForSummoner(summoner.value.puuid)
  }

  const findSummoner = async (options?: { force?: boolean }) => {
    console.log('🌱 - findSummoner - currentPuuid.value:', currentPuuid.value)
    if (!currentPuuid.value)
      return
    loading.value = true
    ready.value = false

    try {
      const resolved = await ss().resolveSummoner({ puuid: currentPuuid.value })
      console.log('🌱 - findSummoner - resolved:', resolved)

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
    allMatches,
    clearFilters,
    fetchMastery,
    fetchNewMatches: async () => {
      if (!summoner.value)
        return
      console.log('fetchNewMatches:')
      allMatches.value = await useFetchMatches(currentPuuid.value)
      summoner.value.lastMatchUpdate = new Date()
    },
    filter,
    filteredChampions: (championName?: string) =>
      useChampions(summoner.value.puuid, matches.value, championName),
    findSummoner,
    forceReload: () => findSummoner({ force: true }),
    links: () => generateSummonerLinks(summoner.value),
    loading,
    loadMatches: () => loadMatchesFromDB,
    matches,
    ready,
    setFilter,
    summoner,
    useAllies: () =>
      useRepeatedTeammates(summoner.value.puuid, allMatches.value),
    useChampions: (championName?: string) =>
      useChampions(summoner.value.puuid, allMatches.value, championName),
    useRoles: () => useMatchRoles(summoner.value.puuid, allMatches),
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
