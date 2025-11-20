import { bgArt } from "#shared/data"
import type { MatchFilter } from "~/stores"

export const SummonerKey = Symbol("SummonerProvider")

export async function useSummonerProvider(identifier?: string) {
  const loading = ref(false)
  const ready = ref(false)
  const summoner = ref<Summoner | null>(null)
  const currentPuuid = ref<string | null>(
    typeof identifier === "string" ? identifier : null
  )

  const findSummoner = async (options?: { force?: boolean }) => {
    if (!currentPuuid.value) return
    loading.value = true
    ready.value = false

    try {
      const resolved = await ss().resolveOrFetch(currentPuuid.value)

      currentPuuid.value = resolved.puuid
      summoner.value = resolved
    } finally {
      loading.value = false
      ready.value = true
    }
  }

  const { matches, filteredMatches, filteredChampionList, loadCachedMatches } =
    await useMatches(currentPuuid.value)

  // --- FETCH MASTERY ---
  const fetchMastery = async () => {
    if (!currentPuuid.value) return null
    return await fetchSummonerMastery(currentPuuid.value)
  }

  // --- SPLASH ---
  const splash = computed(() => {
    if (!matches.value.length) return getRandom(Object.values(bgArt))
    const c = useChampions(currentPuuid.value, matches.value)?.top()?.key
    if (!c) return getRandom(Object.values(bgArt))
    else return getSplash(c, "uncentered", getRandom(skinIndex[c]))
  })

  /* Watch Puuid ---------------------------------------------------- */

  watch(currentPuuid, () => findSummoner(), { immediate: true })

  /* State ---------------------------------------------------------- */

  const state = {
    summoner,

    // data
    allies: () => useRepeatedTeammates(summoner.value.puuid, matches.value),
    fetchMastery,
    roles: () => useMatchRoles(summoner.value.puuid, matches),

    // champions
    champions: (opt?: UseChampionOptions) =>
      useChampions(
        summoner.value.puuid,
        opt?.filtered ? filteredChampionList.value : matches.value,
        opt?.champion
      ),
    findSummoner,
    splash,

    //matches
    filteredMatches,
    matches,
    fetchNewMatches: async () => {
      if (!summoner.value) return
      matches.value = await useFetchMatches(summoner.value)
      summoner.value.updatedMatch = Date.now()
    },
    loadMatches: () => loadCachedMatches,

    // loading
    forceReload: () => findSummoner({ force: true }),
    loading,
    ready,
  }

  provide(SummonerKey, state)
  return state
}

export function useSummonerInject() {
  const state = inject<SummonerInject>(SummonerKey)

  if (!state) {
    throw new Error(
      "No Summoner provider found. Make sure provideSummoner is called in a parent component."
    )
  }
  return state
}
