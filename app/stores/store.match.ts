import type { DateRange } from 'reka-ui'
import { defineStore } from 'pinia'

export const useMatchStore = defineStore('matchStore', () => {
  const summonerSearch = ref(null)

  const championTabsQueue = ref<number>(0)

  // match filters
  const filter = ref<MatchFilter>({
    ally: null,
    amount: null,
    champion: null,
    date: {
      end: null,
      start: null,
    },
    patch: null,
    queue: null,
    role: 'ALL',
  })

  function clearFilter() {
    filter.value = Object.assign(filter, {
      ally: null,
      amount: null,
      champion: null,
      date: {
        end: null,
        start: null,
      },
      patch: null,
      queue: null,
      role: 'ALL',
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
