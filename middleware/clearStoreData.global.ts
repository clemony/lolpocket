export default defineNuxtRouteMiddleware((to, from) => {
  const ts = useTempStore()
  ts.champSearch = ''
  ts.champClassFilters = []
  ts.sortChampsAZ = ''
  ts.filterChampionClass = []
  ts.filterChampionTypes = null
  ts.filterFavoriteChamps = false
  ts.sortItemsAZ = 0
  ts.sortPrice = 0
  ts.itemSearchResult = ''
  ts.catFilters = []
  ts.statFilters = []
  ts.viewFavoriteItems = false
  ts.selectedItemSet = null
  ts.filterItemTypes = ''
  ts.filterItemStats = []
  ts.filterItemCats = []


  const ss = useSidebarStore()
  ss.sidebarComponent = null
})
