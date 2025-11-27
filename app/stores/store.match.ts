import { defineStore } from "pinia"
import type { DateRange } from "reka-ui"

export interface MatchFilter {
  ally?: string | null
  champion?: string | null
  patch?: number | null
  queue?: number | null
  ignoreRole?: boolean
  role?: string | null
  date?: MaybeRef<DateRange>
  number?: number
}
export const useMatchStore = defineStore("matchStore", () => {
  const summonerSearch = ref(null)

  const championTabsQueue = ref<number>(0)

  // match filters
  const filter = ref<MatchFilter>({
    ally: null,
    champion: null,
    patch: null,
    queue: 0,
    role: "ALL",
    date: {
      start: null,
      end: null,
    },
    number: null,
  })

  function clearFilter() {
    filter.value = Object.assign(filter, {
      ally: null,
      champion: null,
      patch: null,
      queue: 0,
      role: "ALL",
      date: {
        start: null,
        end: null,
      },
      number: null,
    })
  }

  const seasonTotals = ref()

  const analysisPatchSelect = computedAsync(() => ds().currentPatch)
  const analysisQueueSelect = ref<number>(0)

  return {
    analysisPatchSelect,
    analysisQueueSelect,
    championTabsQueue,
    clearFilter,
    filter,
    seasonTotals,
    summonerSearch,
  }
})
