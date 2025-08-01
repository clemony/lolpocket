import type { GridApi } from 'ag-grid-community'
import { defineStore } from 'pinia'

export const useChampStore = defineStore('ChampStore', () => {
  const championSplashDropdown = ref(null)

  const championFilter = ref<ChampionFilter>({
    position: 'All',
    role: null,
    query: null,
    result: null,
  })

  const pChampionFilter = ref<ChampionFilter>({
    position: 'All',
    role: null,
    query: null,
    result: null,
  })

  const dbChampionGridState = shallowRef(null)
  const championGridApi = shallowRef<GridApi | null>(null)
  const dbChampionStatListKey = ref(0)
  const championGridLevel = ref(1)
  const championGridType = ref<'calculated' | 'base' | 'growth'>('calculated')

  return {
    championSplashDropdown,

    pChampionFilter,
    championFilter,

    dbChampionGridState,
    championGridApi,
    dbChampionStatListKey,
    championGridLevel,
    championGridType,
  }
})
