import type { GridApi } from 'ag-grid-community'
import { defineStore } from 'pinia'

export const useTempStore = defineStore(
  'tempStore',
  () => {
    const itemGridApi = shallowRef<GridApi | null>(null)

    const pocketBarComponent = shallowRef(null)
    const pocketCardRef = <HTMLElement>(null)
    // drawer selections
    const selectedChampion = ref(null)
    const selectedRune = ref(null)
    const selectedPocket = ref(null)
    const championSplashDropdown = ref(null)
    const isSettingsOpen = ref(true)

    // dialog

    const loginOpen = ref(false)
    const commandOpen = ref(false)
    const contextMenuOpen = ref(false)
    const newFolderOpen = ref(false)
    const newPocketOpen = ref(false)

    // champs
    const champSearch = ref('')
    const champClassFilters = ref([])
    const sortChampsAZ = ref()
    const filterChampionClass = ref([])
    const filterChampionTypes = ref(null)
    const filterFavoriteChamps = ref(false)

    // items
    // const items = ref([...ds.items])
    const AZmodel = ref(0)
    const priceModel = ref(0)
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
    const selectedItem = ref<Item>(null)

    // runes
    const selectedRuneSet = ref<RuneSet | null>(null)
    const hoveredRune = ref<Rune | null>(null)

    // spells
    const selectedSpell = ref()

    return {
      itemGridApi,
      pocketCardRef,

      // sidebar

      pocketBarComponent,

      // drawer

      championSplashDropdown,
      isSettingsOpen,

      // dialog
      loginOpen,
      commandOpen,
      contextMenuOpen,
      newFolderOpen,
      newPocketOpen,

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
      selectedRuneSet,
      hoveredRune,

      // spells
      selectedSpell,

      // sidebar

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
