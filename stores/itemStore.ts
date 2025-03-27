import { defineStore } from 'pinia'
import type { GridApi } from 'ag-grid-community'

export const useItemStore = defineStore('itemStore', () => {
  const selectedItem = ref<Item>(null)
  const selectedDatabaseItem = ref<Item>(null)
  const selectedItemSet = ref<ItemSet | null>(null)
  const priceModel = ref(0)
  const AZmodel = ref(0)
  const sortItemsAZ = ref(0)
  const sortPrice = ref(0)
  const itemSearchResult = ref()
  const filterItemTypes = ref()
  const filterItemStats = ref([])
  const filterItemCats = ref([])
  const pocketItemSelect = ref()
  const itemGridApi = shallowRef<GridApi | null>(null)
  const itemPaneOpen = ref(false)
  const itemSearchQuery = ref()

  const calculatorSet1 = ref<CalculatorSet>([
    createItem(),
    createItem(),
    createItem(),
    createItem(),
    createItem(),
    createItem(),
  ])

  const calculatorSet2 = ref<CalculatorSet>([
    createItem(),
    createItem(),
    createItem(),
    createItem(),
    createItem(),
    createItem(),
  ])

  return {
    selectedItem,
    selectedDatabaseItem,
    selectedItemSet,
    itemPaneOpen,
    AZmodel,
    sortPrice,
    priceModel,
    sortItemsAZ,
    itemSearchResult,
    filterItemTypes,
    filterItemStats,
    filterItemCats,
    pocketItemSelect,
    itemGridApi,
    itemSearchQuery,
    calculatorSet1,
    calculatorSet2,
  }
}, {
  persist: {
    storage: piniaPluginPersistedstate.localStorage(),
    key: 'itemStore',
  },
})
