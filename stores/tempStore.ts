import { defineStore } from 'pinia'
import { useAccountStore } from './accountStore'
export const useTempStore = defineStore(
  'tempStore',
  () => {
    //

    const as = useAccountStore()
    const userOS = ref()
    const userRole = ref()
    const sessionInfo = ref()

    const clickType = computed(() => {
      return userOS.value == 'Mac' || 'Windows' ? 'right click' : 'force press'
    })

    //sidebar
    const sidebarTrigger = ref(false)

    const pocketDrawerTrigger = ref(false)
    const championDrawerTrigger = ref(false)
    const itemDrawerTrigger = ref(false)
    const runeDrawerTrigger = ref(false)

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
      }
    )

    watch(
      () => itemDrawerTrigger.value,
      (newVal) => {
        if ((newVal = false)) {
          selectedItem.value = null
        }
      }
    )
    // drawer
    const drawerState = ref(false)
    const drawerType = ref()

    //champs
    const champSearch = ref('')
    const champClassFilters = ref([])
    const sortChampsAZ = ref()
    const viewFavoriteChamps = ref()
    const browseChampionClass = ref([])
    const browseChampionTypes = ref(null)
    const browseChampSearch = ref(null)
    const sortBrowseChampsAZ = ref(null)
    const browseFavoriteChamps = ref(false)

    //items
    //const items = ref([...ds.items])
    const sortItemsAZ = ref(0)
    const sortPrice = ref(0)
    const itemSearchFilter = ref('')
    const catFilters = ref<string[]>([])
    const statFilters = ref<string[]>([])
    const viewFavoriteItems = ref(false)
    const selectedItemSet = ref<ItemSet | null>(null)
    const browseItemTypes = ref()
    const browseItemStats = ref([])
    const browseItemCats = ref([])
    const biSearchResult = ref()

    watch(
      () => as.favoriteItems,
      (newVal) => {
        if (!newVal.length) {
          viewFavoriteItems.value = false
        }
      },
      { immediate: true }
    )

    //runes
    const selectedRuneSetIndex = ref(0)

    //spells
    const selectedSpell = ref()

    return {
      userOS,
      userRole,
      sessionInfo,
      clickType,

      //sidebar
      pocketDrawerTrigger,
      championDrawerTrigger,
      itemDrawerTrigger,
      runeDrawerTrigger,
      sidebarTrigger,

      //drawer

      drawerState,
      drawerType,

      //drawer selections
      drawerPocket,
      selectedItem,
      selectedChampion,
      selectedRune,

      //champions
      viewFavoriteChamps,
      sortChampsAZ,
      champClassFilters,
      champSearch,
      browseChampionClass,
      browseChampionTypes,
      browseChampSearch,
      browseFavoriteChamps,
      sortBrowseChampsAZ,
      //items
      // items,
      viewFavoriteItems,
      sortItemsAZ,
      sortPrice,
      catFilters,
      statFilters,
      itemSearchFilter,
      selectedItemSet,
      browseItemTypes,
      browseItemStats,
      browseItemCats,
      biSearchResult,

      //runes
      selectedRuneSetIndex,

      //spells
      selectedSpell,
    }
  },
  {
    persist: {
      storage: piniaPluginPersistedstate.sessionStorage(),
      key: 'tempStore',
      omit: ['sidebarTrigger', 'drawerState'],
    },
  }
)
