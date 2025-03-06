import { defineStore } from 'pinia'

export const useChampStore = defineStore('ChampStore', () => {
  const selectedChampion = ref(null)
  const championSplashDropdown = ref(null)
  const sortChampsAZ = ref()
  const champSearch = ref('')
  const champClassFilters = ref([])

  const filterChampionClass = ref([])
  const filterChampionTypes = ref(null)
  const filterFavoriteChamps = ref(false)

  return {
    championSplashDropdown,
    selectedChampion,
    sortChampsAZ,
    champClassFilters,
    champSearch,
    filterChampionClass,
    filterChampionTypes,
    filterFavoriteChamps,
  }
})
