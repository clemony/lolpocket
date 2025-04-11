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
  const listKey = ref(0)
  const itemSearchResult = ref()
  const filterItemTypes = ref(null)
  const filterItemStats = ref([])
  const filterItemCats = ref([])
  const pocketItemSelect = ref<Item>(null)
  const itemGridApi = shallowRef<GridApi | null>(null)
  const itemPaneOpen = ref(false)
  const itemSearchQuery = ref()

  const itemDBHideNoBuy = ref(true)

  const calculatorSets = ref<CalculatorSet[]>([])
  const calculateSet = ref<CalculatorSet>(null)
  const calculateSet2 = ref<CalculatorSet>(null)
  const isComparing = ref(false)
  const setsToCompare = ref(
    [
      calculatorSets[0],
      calculatorSets[1],
    ],
  )

  return {
    selectedItem,
    selectedDatabaseItem,
    selectedItemSet,
    itemPaneOpen,
    AZmodel,
    sortPrice,
    priceModel,
    sortItemsAZ,
    listKey,
    itemSearchResult,
    filterItemTypes,
    filterItemStats,
    filterItemCats,
    pocketItemSelect,
    itemGridApi,
    itemSearchQuery,
    calculatorSets,
    calculateSet,
    calculateSet2,
    isComparing,
    setsToCompare,
    itemDBHideNoBuy,
  }
}, {
  persist: {
    storage: piniaPluginPersistedstate.localStorage(),
    key: 'itemStore',
  },
})
