import { defineStore } from 'pinia'

export const useMatchStore = defineStore('matchStore', () => {
  const ds = useDataStore()

  const patchGames = ref()

  const summonerSearch = ref(null)

  const championTabsQueue = ref<number>(0)

  // analysis filters
  const af = ref<MatchFilter>({
    patch: ds.currentPatch,
    queue: 0,
    champion: null,
    ally: null,
    role: 'ALL',
  })

  // match filters
  const mf = ref<MatchFilter>({
    patch: null,
    queue: 0,
    champion: null,
    ally: null,
    role: 'ALL',
  })

  const seasonTotals = ref()

  const analysisPatchSelect = computedAsync (() => ds.currentPatch)
  const analysisQueueSelect = ref<number>(0)

  return {
    mf,
    af,
    summonerSearch,
    championTabsQueue,
    patchGames,
    seasonTotals,

    analysisPatchSelect,
    analysisQueueSelect,

  }
}, {
  persist: {
    storage: piniaPluginPersistedstate.localStorage(),
    key: 'analysisStore',
    pick: ['matches'],
  },
})
