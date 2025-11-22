export const SummonerKey = Symbol("SummonerProvider")
import { bgArt } from "#shared/data"

export function useSummonerProvider(identifier?: string) {
  const currentPuuid = ref(identifier ?? null)
  const account = shallowRef<Account>(null)

  const loading = ref(false)
  const ready = ref(false)
  const summoner = shallowRef(null)

  async function findSummoner() {
    if (!currentPuuid.value) return

    loading.value = true
    const result = await ss().resolveOrFetch(currentPuuid.value)
    summoner.value = result
    currentPuuid.value = result.puuid
    account.value = await acc().getByPuuid(currentPuuid.value)
    console.log("🥸 - findSummoner - acc():", acc().accounts)
    console.log("🥸 - findSummoner - account.value:", account.value)
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

  const {
    filter,
    setFilter,
    clearFilters,
    filteredMatches,
    filteredChampionList,
  } = useMatchFilters(currentPuuid, matches)

  /* mastery */
  const fetchMastery = async () => {
    if (!currentPuuid.value) return null
    return await fetchSummonerMastery(currentPuuid.value)
  }

  const splash = computed(() => {
    if (account && account.value?.splash) return account.value?.splash
    const { top } = useChampions(summoner?.value?.puuid, matches?.value)
    if (top()?.key && top()?.key !== "0")
      return getSplash(
        top()?.key,
        "uncentered",
        getRandom(skinIndex[top()?.key])
      )
    //
    return getRandom(Object.values(bgArt))
  })
  watch(currentPuuid, findSummoner, { immediate: true })

  const api = {
    summoner,
    account,
    splash,
    //splash: () => useSummonerSplash(account, summoner, matches.value),
    //
    matches,
    filteredMatches,
    filteredChampionList,

    //
    fetchMastery,
    roles: () => useMatchRoles(summoner.value.puuid, matches),
    allies: () => useRepeatedTeammates(summoner.value.puuid, matches.value),
    champions: (opt?: UseChampionOptions) =>
      useChampions(
        summoner.value.puuid,
        opt?.filtered ? filteredChampionList.value : matches.value,
        opt?.champion
      ),

    filter,
    setFilter,
    clearFilters,

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
