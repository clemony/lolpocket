import type { GridApi } from 'ag-grid-community'
import { defineStore } from 'pinia'

export const useChampStore = defineStore('ChampStore', () => {
  const championSplashDropdown = ref(null)

  const dbChampionGridState = shallowRef(null)
  const championGridApi = shallowRef<GridApi | null>(null)
  const dbChampionStatListKey = ref(0)
  const championGridLevel = ref(1)
  const championGridType = ref<'calculated' | 'base' | 'growth'>('calculated')

  return {
    championSplashDropdown,

    dbChampionGridState,
    championGridApi,
    dbChampionStatListKey,
    championGridLevel,
    championGridType,
  }
})
