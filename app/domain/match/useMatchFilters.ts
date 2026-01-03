import equal from "fast-deep-equal/es6"
import type { DateRange } from "reka-ui"
import { computed, shallowRef, unref } from "vue"

export function useMatchFilters(
  puuid: MaybeRef<string | null | undefined>,
  matches: MaybeRef<MatchData[] | null | undefined>
) {
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

  const defaultFilter: MatchFilter = {
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
  }

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

  const filteredMatches = computed<MatchData[]>(() => {
    const id = unref(puuid) || null
    const arr = unref(matches) ?? []
    const f = filter.value

    const empty =
      !f.ally &&
      !f.champion &&
      !f.patch &&
      !f.queue &&
      !f.number &&
      f.role === "ALL"

    if (!id) return arr
    if (empty) return arr

    const filt = arr.filter((m) => matchFilters(id, m, f))

    if (!f.number || f.number >= filt.length) return filt
    return filt.slice(0, f.number)
  })

  return {
    filter,
    setFilter,
    setDateStart,
    clearFilters,
    filterEmpty,
    filteredMatches,
  }
}
