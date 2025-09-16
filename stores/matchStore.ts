import { defineStore } from 'pinia'

export const useMatchStore = defineStore('matchStore', () => {
  const ds = useDataStore()

  const patchGames = ref()

  const summonerSearch = ref(null)

  const championTabsQueue = ref<number>(0)

  // match filters
  const filter = ref<MatchFilter>({
    patch: null,
    queue: 0,
    champion: null,
    ally: null,
    role: 'ALL',
  })

  function clearFilter() {
    filter.value = Object.assign(filter, {
      patch: null,
      queue: 0,
      champion: null,
      ally: null,
      role: 'ALL',
    })
  }

  const seasonTotals = ref()

  const analysisPatchSelect = computedAsync(() => ds.currentPatch)
  const analysisQueueSelect = ref<number>(0)

  return {
    filter,
    clearFilter,
    summonerSearch,
    championTabsQueue,
    patchGames,
    seasonTotals,

    analysisPatchSelect,
    analysisQueueSelect,
  }
})
