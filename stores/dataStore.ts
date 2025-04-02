import type { GridApi } from 'ag-grid-community'
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

    const championTemplates = ref({})
    const championAbilityData = ref({})
    const championNames = computedAsync (() => {
      return champions.value.map(c => c.name)
    })

    const runes = computed (() => {
      const path = paths.value.flatMap(p => p.slots)
      const slots = path.flatMap(s => s.runes)
      const runes = slots.flatMap(({ id, name }) => ({
        id,
        name,
      }))
      return runes
    })

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
      championTemplates,
      championAbilityData,
      paths,
      runes,
      SRitems,
      champions,
      championNames,
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
