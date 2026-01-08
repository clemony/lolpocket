import type { ShallowRef } from "vue"

export interface SummonerProviderApi {
  summoner: ShallowRef<Summoner | null>
  account: ShallowRef<Account | null>
  splash: ComputedRef<string | undefined>
  matches: ShallowRef<MatchData[]>
  timelines: ShallowRef<PlayerTimeline[]>
  loadSummoner: () => Promise<void>
  resolveIdentifier: () => Promise<string | null>
  filteredMatches: ComputedRef<MatchData[]>
  setFilter: <K extends keyof MatchFilter>(
    key: K,
    value: MatchFilter[K]
  ) => void
  clearFilters: () => void
  filterEmpty: () => boolean
  filter: ShallowRef<MatchFilter>
  champions: ShallowRef<AggregatedStats[]>
  allies: ShallowRef<AllyStatDetail[]>
  mastery: () => Promise<PlayerChampionMastery[]>
  loadNewer: () => Promise<void>
  loadOlder: () => Promise<void>
  loading: ComputedRef<boolean>
  loadingOlder: ShallowRef<boolean>
  ready: Ref<boolean>
  whenReady: () => Promise<void>
}

export const SummonerKey = Symbol("SummonerProvider")

export function useSummonerProvider() {
  function whenReady() {
    if (ready.value) return Promise.resolve()

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
        const [name, tag] = String(slug).split("_")

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
  const summoner = shallowRef<Summoner | null>(null)
  const account = shallowRef<Account | null>(null)

  const loading = ref(false)
  const ready = ref(false)

  async function resolveIdentifier() {
    const value = identifier.value
    if (!value) return null

    if (value.puuid) return value.puuid

    const hit = ss().resolveBySlug(value.region, value.name, value.tag)
    if (hit) return hit.puuid

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
      const result = await ss().resolveOrFetch(puuid.value)
      summoner.value = result
      account.value = await acc().getByPuuid(result.puuid)
      await refreshLocal()
    } finally {
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
    matches,
    loadNewer,
    loadOlder,
    loadingOlder,
    refreshLocal,
    loading: matchesLoading,
  } = useMatches(summoner)

  // ID

  const id = computed(() => puuid.value)

  // TIMELINES

  const { getAllTimelinesForPuuid } = useTimeline()

  const timelines = computedAsync<PlayerTimeline[] | null>(async () => {
    if (!id.value) return null
    return await getAllTimelinesForPuuid(id.value)
  })

  // FILTERS

  const { filteredMatches, filter, ...rest } = useMatchFilters(id, matches)

  // CHAMPIONS
  const champions = computedAsync<AggregatedStats[]>(async () => {
    if (!id.value) return null
    return await useChampionStats(filteredMatches, id.value).value
  })

  // ALLIES

  const allies = computed<AllyStatDetail[]>(() => {
    if (!id.value) return null
    return aggregateAllies(filteredMatches, id.value).value
  })

  // SPLASH

  const splash = computed(() => {
    if (account.value?.splash) return account.value.splash

    const arr = matches.value || []
    if (!arr.length || !puuid.value) return undefined

    const first = arr[0]
    const self = first.participants?.find((p) => p.puuid === puuid.value)
    if (!self) return undefined

    const a = champKeyById(self.championId)
    if (a && a !== "0")
      return getSplash(a, "uncentered", getRandom(skinIndex[a]))

    return undefined
  })

  watch(
    identifier,
    async (next) => {
      if (!next) return

      const nextPuuid = await resolveIdentifier()
      if (nextPuuid && nextPuuid !== puuid.value) {
        puuid.value = nextPuuid
        await loadSummoner()
      }
    },
    { immediate: true }
  )

  const api: SummonerProviderApi = {
    summoner,
    account,
    splash,
    matches,
    timelines,
    loadSummoner,
    resolveIdentifier,
    filteredMatches,
    ...rest,
    filter,
    champions,
    allies,
    mastery,
    loadNewer,
    loadOlder,
    loading: computed(() => loading.value || matchesLoading.value),
    loadingOlder,
    ready,
    whenReady,
  }

  provide(SummonerKey, api)
  return api
}

export function useSummonerInject() {
  const api = inject<SummonerProviderApi>(SummonerKey)
  if (!api) throw new Error("No Summoner provider found.")
  return api
}
