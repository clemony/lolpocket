import { defineStore } from 'pinia'

export const useMatchStore = defineStore('matchStore', () => {
  const summonerSearch = ref(null)

  const championTabsQueue = ref<number>(0)

  // match filters
  const filter = ref<MatchFilter>({
    ally: null,
    amount: null,
    champion: null,
    patch: null,
    queue: null,
    role: 'ALL',
    date: {
      end: null,
      start: null,
    },
  })

  function clearFilter() {
    filter.value = Object.assign(filter, {
      ally: null,
      amount: null,
      champion: null,
      patch: null,
      queue: null,
      role: 'ALL',
      date: {
        end: null,
        start: null,
      },
    })
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
