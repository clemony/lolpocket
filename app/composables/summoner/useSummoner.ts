import type { ShallowRef } from "vue"

export interface SummonerProviderApi {
  summoner: ShallowRef<Summoner | null>
  account: ShallowRef<Account | null>
  splash: ComputedRef<string | undefined>
  matches: ShallowRef<MatchData[]>

  loadSummoner: () => Promise<void>
  resolveIdentifier: () => Promise<string | null>

  filteredMatches: ComputedRef<MatchData[]>
  setFilter: <K extends keyof MatchFilter>(
    key: K,
    value: MatchFilter[K]
  ) => void
  clearFilters: () => void
  filter: ShallowRef<MatchFilter>

  champions: Ref<Map<number, ChampionStats> | null>

  allies: Ref<MatchTeammatesReturn | null>

  loadNewer: () => Promise<void>
  loadOlder: () => Promise<void>

  loading: ComputedRef<boolean>
  ready: Ref<boolean>
}

export const SummonerKey = Symbol("SummonerProvider")

export function useSummonerProvider(
  identifierInput: MaybeRef<Identifier | null> | null
) {
  const identifier = shallowRef<Identifier | null>(
    toValue(identifierInput) ?? null
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
    if (!puuid.value) return

    loading.value = true

    const result = await ss().resolveOrFetch(puuid.value)
    summoner.value = result

    account.value = await acc().getByPuuid(result.puuid)
    await refreshLocal()

    loading.value = false
    ready.value = true
  }

  const {
    matches,
    loadNewer,
    loadOlder,
    refreshLocal,
    loading: matchesLoading,
  } = useMatches(summoner)

  const id = computed(() => puuid.value)

  const { filteredMatches, setFilter, filter, clearFilters } = useMatchFilters(
    id,
    matches
  )

  const champions = computedAsync<Map<number, ChampionStats> | null>(
    async () => {
      const currentId = id.value
      if (!currentId) return null

      return await useChampionStats(currentId, filter.value?.queue)
    }
  )

  const allies = ref<MatchTeammatesReturn>(null)
  watch(
    () => filteredMatches.value,
    (val) => {
      if (!puuid.value || !val?.length) {
        allies.value = null
        return
      }
      allies.value = useAllies(puuid.value, filteredMatches)
    },
    { immediate: true }
  )

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

  let resolveLock = false

  watch(
    identifier,
    async () => {
      if (resolveLock) return
      resolveLock = true

      const next = await resolveIdentifier()
      if (next && next !== puuid.value) {
        puuid.value = next
        await loadSummoner()
      }

      resolveLock = false
    },
    { immediate: true }
  )

  watch(
    () => toValue(identifierInput),
    (next) => {
      identifier.value = next ?? null
    },
    { immediate: true }
  )

  const api: SummonerProviderApi = {
    summoner,
    account,
    splash,
    matches,
    loadSummoner,
    resolveIdentifier,
    filteredMatches,
    clearFilters,
    setFilter,
    filter,
    champions,
    allies,
    loadNewer,
    loadOlder,
    loading: computed(() => loading.value || matchesLoading.value),
    ready,
  }

  provide(SummonerKey, api)
  return api
}

export function useSummonerInject() {
  const api = inject<SummonerProviderApi>(SummonerKey)
  if (!api) throw new Error("No Summoner provider found.")
  return api
}
