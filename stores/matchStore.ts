import { defineStore } from 'pinia'

export const useMatchStore = defineStore('matchStore', () => {
  const ds = useDataStore()

  const currentPatch = ref(ds.currentPatch)
  const patchGames = ref()

  const summonerSearch = ref(null)

  const championTabsQueue = ref<number>(0)

  // analysis filters
  const af = ref<Filters>({
    patch: ds.currentPatch,
    queue: 0,
    champion: null,
    ally: null,
    role: 'ALL',
  })

  // match filters
  const mf = ref<Filters>({
    patch: null,
    queue: 0,
    champion: null,
    ally: null,
    role: 'ALL',
  })
  const previousPatch = computed(() => {
    return getPatchList().sort((a, b) => (b - a))
  })
  const seasonTotals = ref()

  const analysisPatchSelect = computedAsync (() => ds.currentPatch)
  const analysisQueueSelect = ref<number>(0)

  return {
    mf,
    af,
    summonerSearch,
    championTabsQueue,

    currentPatch,
    patchGames,
    seasonTotals,
    previousPatch,

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
