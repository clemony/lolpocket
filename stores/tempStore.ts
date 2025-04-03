import type { GridApi } from 'ag-grid-community'
import { defineStore } from 'pinia'

export const useTempStore = defineStore(
  'tempStore',
  () => {
    const itemGridApi = shallowRef<GridApi | null>(null)

    // drawer selections=
    const selectedRune = ref(null)
    const selectedPocket = ref(null)

    const isSettingsOpen = ref(true)

    const sidebarExpanded = ref(true)

    // dialog

    const loginOpen = ref(false)
    const commandOpen = ref(false)
    const contextMenuOpen = ref(false)
    const newFolderOpen = ref(false)

    // items
    const AZmodel = ref(0)
    const priceModel = ref(0)
    const sortItemsAZ = ref(0)
    const sortPrice = ref(0)
    const itemSearchResult = ref()
    const catFilters = ref<string[]>([])
    const statFilters = ref<string[]>([])
    const viewFavoriteItems = ref(false)
    const selectedItemSet = ref<ItemSet | null>(null)
    const filterItemTypes = ref('')
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

      // sidebar

      // drawer

      isSettingsOpen,
      sidebarExpanded,

      // dialog
      loginOpen,
      commandOpen,
      contextMenuOpen,
      newFolderOpen,

      // drawer selections
      selectedItem,
      selectedRune,
      selectedPocket,

      // champions

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
      pick: ['sessionInfo'],
    },
  },
)
