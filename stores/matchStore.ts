import { defineStore } from 'pinia'

export const useMatchStore = defineStore('matchStore', () => {
  const ds = useDataStore()

  const userMatchData = ref<PlayerHistoryData[]>([])

  const currentPatch = ref(ds.currentPatch)
  const patchGames = ref()

  const matches = ref<piniaMatchData[]>([])

  function setMatches(data: piniaMatchData[]) {
    matches.value = data
  }

  function appendMatches(data: piniaMatchData[]) {
    matches.value.push(...data)
  }

  const championTabsQueue =  ref<number>(0)
  const queueSelect =  ref<number>(0)
  const patchSelect = ref(ds.currentPatch)
  const championSelect = ref('All')
  const playerSelect = ref(null)
  const positionSelect = ref<'top' | 'jungle' | 'mid' | 'bot' | 'support' | 'all'>('all')

  const previousPatch = computed(() => {
    // const p =
    return getPatchList()
    // return p.slice(-2, -1)[0] // Returns the second-to-last item in the array
  })
  const seasonTotals = ref()

  return {
    userMatchData,
    matches,
    championTabsQueue,
    setMatches,
    appendMatches,
    patchGames,
    seasonTotals,
    currentPatch,
    patchSelect,
    queueSelect,
    championSelect,
    playerSelect,
    positionSelect,
    previousPatch,

  }
}, {
  persist: {
    storage: piniaPluginPersistedstate.localStorage(),
    key: 'analysisStore',
    pick: ['matches'],
  },
})
