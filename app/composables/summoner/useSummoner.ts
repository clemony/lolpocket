export const SummonerKey = Symbol("SummonerProvider")
import { bgArt } from "#shared/data"

export interface Identifier {
  puuid?: string
  region?: string
  name?: string
  tag?: string
}
export function useSummonerProvider(
  identifierInput: MaybeRef<Identifier> | null
) {
  // reactive identity inputs
  const identifier = shallowRef(toValue(identifierInput))
  const puuid = shallowRef<string | null>(null)
  const summoner = shallowRef<Summoner | null>(null)
  const account = shallowRef<Account | null>(null)

  const loading = ref(false)
  const ready = ref(false)

  // -- resolve identifier into a puuid ---------
  async function resolveIdentifier() {
    const value = identifier.value
    if (!value) return null

    // already a puuid
    if (value.puuid) return value.puuid

    // region/name/tag object
    const hit = ss().resolveBySlug(value.region, value.name, value.tag)
    if (hit) return hit.puuid

    // fallback: fetch using the composite
    const fetched = await ss().ensureSummoner(value)
    return fetched.puuid
  }

  // -- load full summoner once puuid known -----
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

  // ----- matches subsystem --------------------
  const {
    matches,
    loadNewer,
    loadOlder,
    refreshLocal,
    loading: matchesLoading,
  } = useMatches(summoner)

  const filters = useMatchFilters(puuid, matches)
  // ----- data --------------------

  const allies = ref<MatchTeammatesReturn>(null)

  watch(
    () => matches?.value,
    (newVal) => {}
  )

  const champions = ref<ChampionStats[]>([])
  watch(
    () => filters.filteredMatches.value,
    () => {
      champions.value = useBasicChampionStats(
        unref(filters.filteredMatches.value),
        puuid.value
      )

      allies.value = useAllies(puuid.value, filters.filteredMatches)
    }
  )

  // ----- background splash --------------------
  const splash = computed(() => {
    if (account.value?.splash) return account.value?.splash
    const t = ix().champKeyById(champions.value[0]?.id)
    if (t && t !== "0") {
      return getSplash(t, "uncentered", getRandom(skinIndex[t]))
    }
    return getRandom(Object.values(bgArt))
  })

  // ---------- watcher logic -------------------
  let resolveLock = false

  watch(
    identifier,
    async () => {
      if (resolveLock) return
      resolveLock = true
      const next = await resolveIdentifier()
      if (next && next !== puuid.value) {
        puuid.value = next
        filters.clearFilters()
        await loadSummoner()
      }

      resolveLock = false
    },
    { immediate: true }
  )

  watch(
    () => toValue(identifierInput),
    (next) => {
      filters.clearFilters()
      identifier.value = next
    },
    { immediate: true }
  )

  // -------- public api ------------------------
  const api = {
    summoner,
    account,
    splash,
    matches,
    filteredMatches: filters.filteredMatches,
    //filteredChampionList,
    loadSummoner,
    resolveIdentifier,

    fetchMastery: async () => {
      if (!puuid.value) return null
      return await fetchSummonerMastery(puuid.value)
    },

    champions,
    // roles,
    allies,
    ...filters,
    loadNewer,
    loadOlder,

    loading: computed(() => loading.value || matchesLoading.value),
    ready,
  }

  provide(SummonerKey, api)
  return api
}
export function useSummonerInject() {
  const api = inject<SummonerInject>(SummonerKey)

  if (!api) {
    throw new Error(
      "No Summoner provider found. Make sure provideSummoner is called in a parent component."
    )
  }
  return api
}
