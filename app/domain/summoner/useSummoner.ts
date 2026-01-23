import type { ShallowRef } from 'vue'

export type SummonerApi = ReturnType<typeof useSummonerProvider>

export interface SummonerProviderApi {
  account: ShallowRef<Account | null>
  allies: ShallowRef<AllyStatDetail[]>
  champions: ShallowRef<AggregatedStats[]>
  clearFilters: () => void
  filter: ShallowRef<MatchFilter>
  filteredMatches: ComputedRef<MatchData[]>
  filterEmpty: () => boolean
  loading: ComputedRef<boolean>
  loadingOlder: ShallowRef<boolean>
  loadMessage: ShallowRef<string>
  loadNewer: () => Promise<string>
  loadOlder: () => Promise<void>
  loadSummoner: () => Promise<void>
  mastery: () => Promise<PlayerChampionMastery[]>
  matches: ShallowRef<MatchData[]>
  query: ShallowRef<string>
  ready: Ref<boolean>
  resolveIdentifier: () => Promise<string | null>
  setFilter: <K extends keyof MatchFilter>(
    key: K,
    value: MatchFilter[K]
  ) => void
  splash: ComputedRef<string | undefined>
  summoner: ShallowRef<Summoner | null>
  timelines: ShallowRef<PlayerTimeline[]>
  whenReady: () => Promise<void>
}

export const SummonerKey = Symbol('SummonerProvider')

export function useSummonerProvider() {
  function whenReady() {
    if (ready.value)
      return Promise.resolve()

    return new Promise<void>((resolve) => {
      const stop = watch(
        ready,
        (v) => {
          if (v) {
            stop()
            resolve()
          }
        },
        { immediate: true }
      )
    })
  }
  const route = useRoute()

  const identifier = shallowRef<Identifier | null>(null)

  watch(
    () => route.fullPath,
    () => {
      const { puuid, region, slug } = route.params

      if (puuid) {
        identifier.value = { puuid: String(puuid) }
        return
      }

      if (region && slug) {
        const [name, tag] = String(slug).split('_')

        identifier.value = {
          name: name.toLowerCase(),
          region: String(region).toLowerCase(),
          tag: tag.toLowerCase(),
        }
        return
      }

      identifier.value = null
    },
    { immediate: true }
  )

  const puuid = shallowRef<string | null>(null)
  const summoner = computed(() =>
    puuid.value ? ss().resolveByPuuid(puuid.value) : null
  )

  watch(
    () => summoner.value,
    (v) => {
      console.log('💠 - watch - newVal:', v)
    }
  )
  const account = shallowRef<Account | null>(null)

  const loading = ref<boolean>(false)
  const ready = ref<boolean>(false)

  async function resolveIdentifier() {
    const value = identifier.value
    if (!value)
      return null

    // await until(() => ss().hydrated).toBe(true)

    if (value.puuid)
      return value.puuid

    const hit = ss().resolveBySlug(value.region, value.name, value.tag)
    console.log('🥸 - resolveIdentifier - hit:', hit)
    if (hit)
      return hit.puuid

    //  legal to fetch
    const fetched = await ss().ensureSummoner(value)
    return fetched.puuid
  }

  async function loadSummoner() {
    if (!puuid.value) {
      ready.value = true
      return
    }

    loading.value = true
    try {
      // This guarantees the store has the summoner
      await ss().resolveOrFetch(puuid.value)

      // summoner.value is  live from the store
      if (summoner.value) {
        account.value = await acc().getByPuuid(summoner.value.puuid)
        await refreshLocal()
      }
    }
    finally {
      loading.value = false
      ready.value = true
    }
  }
  // MASTERY

  async function mastery(): Promise<PlayerChampionMastery[]> {
    await whenReady()
    return await getOrFetchAllMastery(puuid.value!, summoner.value!.region)
  }

  // MATCHES

  const {
    loading: matchesLoading,
    loadingOlder,
    loadMessage,
    loadNewer,
    loadOlder,
    matches,
    refreshLocal,
  } = useMatches(summoner)

  // ID

  const id = computed(() => puuid.value)

  // TIMELINES

  const { getAllTimelinesForPuuid } = useTimeline()

  const timelines = computedAsync<PlayerTimeline[] | null>(async () => {
    if (!id.value)
      return null
    return await getAllTimelinesForPuuid(id.value)
  })

  // FILTERS

  const { filter, filteredMatches, ...rest } = useMatchFilters(id, matches)

  // CHAMPIONS
  const champions = computedAsync<AggregatedStats[]>(async () => {
    if (!id.value)
      return null
    return await useChampionStats(filteredMatches, id.value).value
  })

  // ALLIES

  const allies = computed<AllyStatDetail[]>(() => {
    if (!id.value)
      return null
    return aggregateAllies(filteredMatches, id.value).value
  })

  // SPLASH

  const splash = computed(() => {
    if (account.value?.splash)
      return account.value.splash

    const arr = matches.value || []
    if (!arr.length || !puuid.value)
      return undefined

    const first = arr[0]
    const self = first.participants?.find(p => p.puuid === puuid.value)
    if (!self)
      return undefined

    const a = champKeyById(self.championId)
    if (a && a !== '0')
      return getSplash(a, 'uncentered', getRandom(skinIndex[a]))

    return undefined
  })

  watch(
    identifier,
    async (next) => {
      if (!next)
        return

      const nextPuuid = await resolveIdentifier()
      if (nextPuuid && nextPuuid !== puuid.value) {
        puuid.value = nextPuuid
        await loadSummoner()
      }
    },
    { immediate: true }
  )

  const api: SummonerProviderApi = {
    account,
    filteredMatches,
    loadSummoner,
    matches,
    resolveIdentifier,
    splash,
    summoner,
    timelines,
    ...rest,
    allies,
    champions,
    filter,
    loading: computed(() => loading.value || matchesLoading.value),
    loadingOlder,
    loadMessage,
    loadNewer,
    loadOlder,
    mastery,
    ready,
    whenReady,
  }

  provide(SummonerKey, api)
  return api
}

export function useSummonerInject() {
  const api = inject<SummonerProviderApi>(SummonerKey)
  if (!api)
    throw new Error('No Summoner provider found.')
  return api
}
