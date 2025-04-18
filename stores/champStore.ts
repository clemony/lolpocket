import type { GridApi } from 'ag-grid-community'
import { defineStore } from 'pinia'

export const useChampStore = defineStore('ChampStore', () => {
  const selectedChampion = ref(null)
  const championSplashDropdown = ref(null)
  const sortChampsAZ = ref()
  const champSearch = ref('')
  const champClassFilters = ref([])

  const champTrigger = ref(null)
  const filterChampionClass = ref([])
  const filterChampionTypes = ref(null)
  const filterFavoriteChamps = ref(false)
  const filterChampPos = ref(null)

  const dbChampionGridState = shallowRef(null)
  const championGridApi = shallowRef<GridApi | null>(null)
  const dbChampionTiers = ref(null)
  const dbChampionRoles = ref(null)
  const dbChampionSearchQuery = ref(null)
  const dbChampionSearchResult = ref(null)
  const dbChampionStatListKey = ref(0)
  const dbChampionStats = ref([null])

  const championGridLevel = ref(1)

  return {
    championSplashDropdown,
    champTrigger,
    selectedChampion,
    sortChampsAZ,
    champClassFilters,
    champSearch,
    filterChampionClass,
    filterChampionTypes,
    filterFavoriteChamps,
    filterChampPos,

    dbChampionGridState,
    championGridApi,
    dbChampionTiers,
    dbChampionRoles,
    dbChampionSearchQuery,
    dbChampionSearchResult,
    dbChampionStatListKey,
    dbChampionStats,

    championGridLevel,
  }
})
