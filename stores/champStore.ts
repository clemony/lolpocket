import type { GridApi } from 'ag-grid-community'
import { defineStore } from 'pinia'

export const useChampStore = defineStore('ChampStore', () => {
  const summonerMastery = ref<ChampionMasteryEntry>({})
  console.log('💠 - useChampStore - summonerMastery:', summonerMastery)
  const lastFetchedAt = ref<number | null>(null)
  const selectedChampion = ref(null)
  const championSplashDropdown = ref(null)
  const sortChampsAZ = ref()

  const championFilter = ref<ChampionFilter>({
    position: null,
    role: null,
    query: null,
    result: null,
  })

  const pChampionFilter = ref<ChampionFilter>({
    position: null,
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
    summonerMastery,
    lastFetchedAt,
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
