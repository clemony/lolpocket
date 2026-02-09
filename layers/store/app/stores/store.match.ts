//
import { defineStore } from "pinia"

export const useMatchStore = defineStore("matchStore", () => {
  const summonerSearch = ref<string | null>(null)

  const championTabsQueue = ref<number>(0)

  // match filters
  const filter = ref<MatchFilter>({
    ally: null,
    amount: undefined,
    champion: null,
    patch: undefined,
    queue: undefined,
    role: "ALL",
    date: {
      end: undefined,
      start: undefined,
    },
  })

  function clearFilter() {
    filter.value = {
      ally: null,
      amount: undefined,
      champion: null,
      patch: undefined,
      queue: undefined,
      role: "ALL",
      date: {
        end: undefined,
        start: undefined,
      },
    }
  }

  const seasonTotals = ref()

  const analysisPatchSelect = pathIndex[0]
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
