import type { GridApi } from 'ag-grid-community'
import { defineStore } from 'pinia'
import type { SplitterPanel } from 'radix-vue'

export const useTempStore = defineStore(
  'tempStore',
  () => {
    //

    const userOS = ref()
    const sessionInfo = ref()
    const accessToken = ref()
    const refreshToken = ref()

    /*     const clickType = computed(() => {
      return userOS.value == 'Mac' || 'Windows' ? 'right click' : 'force press'
    }) */
    const itemGridApi = shallowRef<GridApi | null>(null)
    // sidebar
    const sidebarTrigger = ref(false)
    const sidebarOpen = ref(false)
    const drawerTrigger = ref(false)
    const drawerComponent = ref<string | boolean>(false)

    const PocketSheetTrigger = ref(false)
    const editPocketTrigger = ref(false)
    const championDrawerTrigger = ref(false)
    const itemDrawerTrigger = ref(false)
    const runeDrawerTrigger = ref(false)
    const champSelectDrawerTrigger = ref(false)
    const cardDrawerTrigger = ref(false)

    const pocketBarComponent = shallowRef(null)

    // drawer selections
    const selectedChampion = ref(null)
    const selectedItem = ref(null)
    const selectedRune = ref(null)
    const selectedPocket = ref(null)
    const drawerChampSelectDropdown = ref(null)

    watch(
      () => championDrawerTrigger.value,
      (newVal) => {
        if (newVal == false) {
          selectedChampion.value = null
        }
      },
    )

    watch(
      () => itemDrawerTrigger.value,
      (newVal) => {
        if (newVal == false) {
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
    const AZmodel = ref('0')
    const priceModel = ref('0')
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
    const pocketItemSelect = ref()

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
      accessToken,
      refreshToken,
      itemGridApi,
      // clickType,

      // sidebar
      drawerTrigger,
      drawerComponent,
      PocketSheetTrigger,
      editPocketTrigger,
      championDrawerTrigger,
      itemDrawerTrigger,
      runeDrawerTrigger,
      sidebarTrigger,
      champSelectDrawerTrigger,
      cardDrawerTrigger,

      sidebarOpen,

      pocketBarComponent,

      // drawer

      drawerState,
      drawerType,
      drawerChampSelectDropdown,

      // dialog
      loginOpen,

      // drawer selections
      selectedItem,
      selectedChampion,
      selectedRune,
      selectedPocket,

      // champions
      sortChampsAZ,
      champClassFilters,
      champSearch,
      filterChampionClass,
      filterChampionTypes,
      filterFavoriteChamps,
      // items
      // items,
      AZmodel,
      priceModel,
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
      pocketItemSelect,

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
      pick: ['sessionInfo', 'userOS'],
    },
  },
)
