import { defineStore } from 'pinia'
// Define types for the JSON data

export const useDataStore = defineStore(
  'dataStore',
  () => {
    const currentPatch = ref()
    const paths = ref<Path[]>([])
    const champions = ref<Champion[]>([])
    const items = ref<Item[] | null>(null)
    const SRitems = ref<Item[] | null>(null)
    const shards = ref()

    const loadData = () => {
      !SRitems ? getItemsFromDatabase() : ''
      !champions ? getChampsFromDatabase() : ''
      !paths ? getRuneData() : ''
      console.log('💠 - useDataStore - SRitems:', SRitems)
      console.log('💠 - champions:', champions)
      console.log('💠 - paths:', paths)
    }
    return {
      loadData,
      currentPatch,
      paths,
      SRitems,
      champions,
      items,
      shards,
    }
  },
  {
    persist: {
      storage: piniaPluginPersistedstate.localStorage(),
      key: 'dataStore',
      afterHydrate: (ctx) => {
        const as = useDataStore()
        // ts.drawerState = false
      },
    },
  },
)
