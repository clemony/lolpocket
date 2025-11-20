export async function useMatches(puuid: string) {
  const { getMatchesForSummoner } = useIndexedDB()

  const matches = ref<MatchData[]>([])

  /* Filter State--------------------------------------------------- */

  const filter = ref<MatchFilter>({
    ally: "",
    champion: "",
    patch: 0,
    queue: 0,
    role: "ALL",
  })

  /* Filter Helpers ------------------------------------------------- */

  function setFilter<K extends keyof MatchFilter>(
    key: K,
    value: MatchFilter[K]
  ) {
    filter.value[key] = value
  }

  function clearFilters() {
    filter.value = {
      ally: "",
      champion: "",
      patch: 0,
      queue: 0,
      role: "ALL",
    }
  }

  /* Filtered Matches ----------------------------------------------- */

  const filteredMatches = computed(() => {
    if (
      !filter.value ||
      Object.values(filter.value).every((v) => !v || v === 0 || v === "ALL")
    ) {
      return matches.value
    }
    return matches.value.filter((match) =>
      matchFilters(puuid!, match, filter.value)
    )
  })

  const filteredChampionList = computed(() => {
    if (
      !filter.value ||
      Object.values(filter.value).every((v) => !v || v === 0 || v === "ALL")
    ) {
      return matches.value
    }
    return matches.value.filter((match) =>
      matchFiltersIgnoreChampion(puuid!, match, filter.value)
    )
  })

  const loadCachedMatches = async () => {
    if (!puuid) return
    matches.value = await getMatchesForSummoner(puuid)
  }

  return {
    // match
    matches,
    filteredMatches,

    //load
    loadCachedMatches,

    // filters
    clearFilters,
    filter,
    filteredChampionList,
    setFilter,
  }
}

export type UseMatchesReturn = ReturnType<typeof useMatches>
