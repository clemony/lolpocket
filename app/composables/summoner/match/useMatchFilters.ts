import type { DateRange } from "reka-ui"

export function useMatchFilters(
  puuid: MaybeRef<string>,
  matches: MaybeRef<MatchData[]>
) {
  if (!puuid) return

  const filter = shallowRef<MatchFilter>({
    ally: "",
    champion: "",
    patch: null,
    queue: 0,
    role: "ALL",
    date: {
      start: null,
      end: null,
    },
    number: null,
  })

  function setFilter<K extends keyof MatchFilter>(
    key: K,
    value: MatchFilter[K]
  ) {
    filter.value = { ...filter.value, [key]: value }
  }

  function setDateStart<K extends keyof DateRange>(value: DateRange[K]) {
    filter.value = { ...filter.value, date: { start: value, end: value } }
  }

  function clearFilters() {
    filter.value = {
      ally: "",
      champion: "",
      patch: 0,
      queue: 0,
      role: "ALL",
      date: {
        start: null,
        end: null,
      },
      number: null,
    }
  }

  const filteredMatches = computed(() => {
    const f = filter.value
    const id = toValue(puuid) ?? null
    const arr = toValue(matches) ?? null
    const date = toValue(f.date) ?? null

    const empty =
      !f.ally &&
      !f.champion &&
      !f.patch &&
      !f.queue &&
      !date.end &&
      !date.start &&
      !f.number &&
      f.role === "ALL"

    if (empty) return arr

    const filt = arr.filter((m) => matchFilters(id, m, f))

    if (filter.value.number !== arr.length) return filt
    else return filt.slice(0, filter.value.number)
  })

  const filteredChampionList = computed(() => {
    const f = filter.value
    const id = toValue(puuid)
    const arr = toValue(matches)
    const date = toValue(f.date) ?? null

    const empty =
      !f.ally &&
      !f.champion &&
      !f.patch &&
      !f.queue &&
      !date.end &&
      !date.start &&
      !f.number &&
      f.role === "ALL"

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
