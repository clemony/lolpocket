import { defineStore } from 'pinia'

export const useAnalysisStore = defineStore('AnalysisStore', () => {
  const ds = useDataStore()

  const currentPatch = ref(ds.currentPatch)

  const patchSelect = ref(ds.currentPatch)
  const patchGames = ref()

  const queueSelect = ref('all')

  const previousPatch = computed(() => {
    const p = getPatchList()
    return p.slice(-2, -1)[0] // Returns the second-to-last item in the array
  })

  return {
    patchGames,
    currentPatch,
    patchSelect,
    queueSelect,
    previousPatch,

  }
})
