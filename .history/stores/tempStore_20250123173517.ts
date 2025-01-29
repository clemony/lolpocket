import { defineStore } from 'pinia'
import { useAccountStore } from './accountStore'

export const useTempStore = defineStore(
  'tempStore',
  () => {
    //

    const as = useAccountStore()
    const userOS = ref()
    const sessionInfo = ref()

    /*     const clickType = computed(() => {
      return userOS.value == 'Mac' || 'Windows' ? 'right click' : 'force press'
    }) */

    // sidebar
    const sidebarTrigger = ref(false)

    const pocketDrawerTrigger = ref(false)
    const championDrawerTrigger = ref(false)
    const itemDrawerTrigger = ref(false)
    const runeDrawerTrigger = ref(false)
    const champSelectDrawerTrigger = ref(false)
    const cardDrawerTrigger = ref(false)

    // drawer selections
    const drawerPocket = ref(null)
    const selectedChampion = ref(null)
    const selectedItem = ref(null)
    const selectedRune = ref(null)

    watch(
      () => championDrawerTrigger.value,
      (newVal) => {
        if ((newVal = false)) {
          selectedChampion.value = null
        }
      },
    )

    watch(
      () => itemDrawerTrigger.value,
      (newVal) => {
        if ((newVal = false)) {
          selectedItem.value = null
        }
      },
    )
    // drawer
    const drawerState = ref(false)
    const drawerType = ref()

    // dialog

    const loginOpen = ref(false)

    // champs
    const champSearch = ref('')
    const champClassFilters = ref([])
    const sortChampsAZ = ref()
    const filterChampionClass = ref([])
    const filterChampionTypes = ref(null)
    const filterFavoriteChamps = ref(false)

    // items
    // const items = ref([...ds.items])
    const sortItemsAZ = ref(0)
    const sortPrice = ref(0)
    const itemSearchResult = ref()
    const catFilters = ref<string[]>([])
    const statFilters = ref<string[]>([])
    const viewFavoriteItems = ref(false)
    const selectedItemSet = ref<ItemSet | null>(null)
    const filterItemTypes = ref()
    const filterItemStats = ref([])
    const filterItemCats = ref([])

    /*     watch(
      () => as.favoriteItems,
      (newVal) => {
        if (!newVal.length) {
          viewFavoriteItems.value = false
        }
      },
      { immediate: true }
    )
 */
    // runes
    const selectedRuneSetIndex = ref(0)

    // spells
    const selectedSpell = ref()

    return {
      userOS,
      sessionInfo,
      // clickType,

      // sidebar
      pocketDrawerTrigger,
      championDrawerTrigger,
      itemDrawerTrigger,
      runeDrawerTrigger,
      sidebarTrigger,
      champSelectDrawerTrigger,
      cardDrawerTrigger,

      // drawer

      drawerState,
      drawerType,

      // dialog
      loginOpen,

      // drawer selections
      drawerPocket,
      selectedItem,
      selectedChampion,
      selectedRune,

      // champions
      sortChampsAZ,
      champClassFilters,
      champSearch,
      filterChampionClass,
      filterChampionTypes,
      filterFavoriteChamps,
      // items
      // items,
      viewFavoriteItems,
      sortItemsAZ,
      sortPrice,
      catFilters,
      statFilters,
      itemSearchResult,
      selectedItemSet,
      filterItemTypes,
      filterItemStats,
      filterItemCats,

      // runes
      selectedRuneSetIndex,

      // spells
      selectedSpell,
    }
  },
  {
    persist: {
      storage: piniaPluginPersistedstate.sessionStorage(),
      key: 'tempStore',
      omit: ['sidebarTrigger', 'drawerState'],
    },
  },
)
