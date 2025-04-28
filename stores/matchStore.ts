import { defineStore } from 'pinia'

export const useMatchStore = defineStore('matchStore', () => {
  const ds = useDataStore()
const as = useAccountStore()

  const currentPatch = ref(ds.currentPatch)
  const patchGames = ref()

    const summonerSearch = ref(null)

  const championTabsQueue = ref<number>(0)
  const queueSelect = ref<number>(0)
  const patchSelect = ref(ds.currentPatch)
  const championSelect = ref('All')
  const playerSelect = ref(null)
  const roleSelect = ref('ALL')

  const previousPatch = computed(() => {
    // const p =
    return getPatchList().sort((a, b) => (b - a))
    // return p.slice(-2, -1)[0] // Returns the second-to-last item in the array
  })
  const seasonTotals = ref()




  return {

  
        summonerSearch,
    championTabsQueue,

    currentPatch,
    patchGames,
    seasonTotals,
    patchSelect,
    queueSelect,
    championSelect,
    playerSelect,
    roleSelect,
    previousPatch,


  }
}, {
  persist: {
    storage: piniaPluginPersistedstate.localStorage(),
    key: 'analysisStore',
    pick: ['matches'],
  },
})
