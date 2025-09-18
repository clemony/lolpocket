import { defineStore } from 'pinia'

export const useMatchStore = defineStore('matchStore', () => {
  const ds = useDataStore()

  const summonerSearch = ref(null)

  const championTabsQueue = ref<number>(0)

  // match filters
  const filter = ref<MatchFilter>({
    ally: null,
    champion: null,
    patch: null,
    queue: 0,
    role: 'ALL',
  })

  function clearFilter() {
    filter.value = Object.assign(filter, {
      ally: null,
      champion: null,
      patch: null,
      queue: 0,
      role: 'ALL',
    })
  }

  const seasonTotals = ref()

  const analysisPatchSelect = computedAsync(() => ds.currentPatch)
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
