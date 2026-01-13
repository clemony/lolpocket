import equal from "fast-deep-equal/es6"
import type { DateRange } from "reka-ui"
import { computed, shallowRef, unref } from "vue"

const GLOBAL_KEYS = new Set([
  "participants.championName",
  "participants.name",
  "participants.tag",
])

const RESTRICTED_KEYS = new Set(["participants.role", "participants.items"])
const SEARCH_KEYS = [
  ["participants", "championName"],
  ["participants", "name"],
  ["participants", "tag"],
  ["participants", "role"],
  ["participants", "items"],
]
const defaultFilter: MatchFilter = {
  ally: "",
  champion: "",
  patch: null,
  queue: 0,
  role: "all",
  date: {
    start: null,
    end: null,
  },
  number: null,
}

export function useMatchFilters(
  puuid: MaybeRef<string | null | undefined>,
  matches: MaybeRef<MatchData[] | null | undefined>
) {
  const query = shallowRef<string>("")
  const filter = shallowRef<MatchFilter>({})

  function setFilter<K extends keyof MatchFilter>(
    key: K,
    value: MatchFilter[K]
  ) {
    filter.value = { ...filter.value, [key]: value }
  }

  function clearFilters() {
    filter.value = defaultFilter
  }

  function filterEmpty(): boolean {
    return equal(filter.value, defaultFilter)
  }

  function setDateStart<K extends keyof DateRange>(value: DateRange[K]) {
    filter.value = { ...filter.value, date: { start: value, end: value } }
  }

  const filteredByFilters = computed<MatchData[]>(() => {
    const id = unref(puuid)
    const arr = unref(matches) ?? []
    const f = filter.value

    if (!id) return arr

    const empty =
      !f.ally &&
      !f.champion &&
      !f.patch &&
      !f.queue &&
      !f.number &&
      f.role === "all"

    if (empty) return arr

    return arr.filter((m) => matchFilters(id, m, f))
  })

  const limitedMatches = computed<MatchData[]>(() => {
    const f = filter.value
    const arr = filteredByFilters.value

    if (!f.number || f.number >= arr.length) return arr

    return arr.slice(0, f.number)
  })

  const search = useSearch(limitedMatches, query, {
    keys: SEARCH_KEYS,
    includeMatches: true,
  })

  const filteredMatches = computed<MatchData[]>(() =>
    search.value.length ? search.value : limitedMatches.value
  )

  return {
    filter,
    query,
    setFilter,
    setDateStart,
    clearFilters,
    filterEmpty,
    filteredMatches,
  }
}
