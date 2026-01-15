import { defineStore } from "pinia"
import type { DateRange } from "reka-ui"

export interface MatchFilter {
  ally?: string | null
  champion?: string | null
  patch?: number | null
  queue?: number
  ignoreRole?: boolean
  role?: string | null
  date?: MaybeRef<DateRange>
  amount?: number
}
export const useMatchStore = defineStore("matchStore", () => {
  const summonerSearch = ref(null)

  const championTabsQueue = ref<number>(0)

  // match filters
  const filter = ref<MatchFilter>({
    ally: null,
    champion: null,
    patch: null,
    queue: null,
    role: "ALL",
    date: {
      start: null,
      end: null,
    },
    amount: null,
  })

  function clearFilter() {
    filter.value = Object.assign(filter, {
      ally: null,
      champion: null,
      patch: null,
      queue: null,
      role: "ALL",
      date: {
        start: null,
        end: null,
      },
      amount: null,
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
