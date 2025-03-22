import { defineStore } from 'pinia'

export const useAnalysisStore = defineStore('AnalysisStore', () => {
  const ds = useDataStore()

  const userMatchData = ref<PlayerHistoryData[]>([])

  const currentPatch = ref(ds.currentPatch)

  const patchSelect = ref(ds.currentPatch)
  const patchGames = ref()

  const queueSelect = ref('all')
  const positionSelect = ref<AcceptableValue>('all')
  const previousPatch = computed(() => {
    const p = getPatchList()
    return p.slice(-2, -1)[0] // Returns the second-to-last item in the array
  })

  return {
    userMatchData,
    patchGames,
    currentPatch,
    patchSelect,
    queueSelect,
    positionSelect,
    previousPatch,

  }
}, {
  persist: {
    storage: piniaPluginPersistedstate.localStorage(),
    key: 'analysisStore',
  },
})
