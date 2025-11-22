export function useMatchFilters(
  puuid: MaybeRef<string>,
  matches: MaybeRef<MatchData[]>
) {
  const filter = shallowRef<MatchFilter>({
    ally: "",
    champion: "",
    patch: 0,
    queue: 0,
    role: "ALL",
  })

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

  const filteredMatches = computed(() => {
    const f = filter.value
    const id = toValue(puuid)
    const arr = toValue(matches)

    const empty =
      !f.ally && !f.champion && !f.patch && !f.queue && f.role === "ALL"

    if (empty) return arr

    return arr.filter((m) => matchFilters(id, m, f))
  })

  const filteredChampionList = computed(() => {
    const f = filter.value
    const id = toValue(puuid)
    const arr = toValue(matches)

    const empty =
      !f.ally && !f.champion && !f.patch && !f.queue && f.role === "ALL"

    if (empty) return arr

    return arr.filter((m) => matchFiltersIgnoreChampion(id, m, f))
  })

  return {
    filter,
    setFilter,
    clearFilters,
    filteredMatches,
    filteredChampionList,
  }
}
