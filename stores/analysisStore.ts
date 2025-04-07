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
    // const p =

    return getPatchList()
    // return p.slice(-2, -1)[0] // Returns the second-to-last item in the array
  })
  const seasonTotals = ref()

  const calculatorSets = ref<CalculatorSet[]>([])
  const calculateSet = ref<CalculatorSet>(null)
  const calculateSet2 = ref<CalculatorSet>(null)
  const isComparing = ref(false)
  return {
    userMatchData,
    patchGames,
    seasonTotals,
    currentPatch,
    patchSelect,
    queueSelect,
    positionSelect,
    previousPatch,
    calculatorSets,
    calculateSet,
    calculateSet2,
    isComparing,

  }
}, {
  persist: {
    storage: piniaPluginPersistedstate.localStorage(),
    key: 'analysisStore',
  },
})
