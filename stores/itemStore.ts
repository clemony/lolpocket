import { defineStore } from 'pinia'
import type { GridApi } from 'ag-grid-community'

export const useItemStore = defineStore('itemStore', () => {
   const itemIndex = ref<Record<string, string>>({}) // { id: name }

  const setIndex = (items: { id: string; name: string }[]) => {
    itemIndex.value = Object.fromEntries(items.map(i => [i.id, i.name]))
  }

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
  const itemPaneOpen = ref(false)
  const itemSearchQuery = ref()

  const itemGridApi = shallowRef<GridApi | null>(null)
  const dbItemGridState = shallowRef(null)
  const itemDBHideNoBuy = ref(true)
  const dbItemTiers = ref(null)
  const dbItemRoles = ref(null)
  const dbItemSearchQuery = ref(null)
  const dbItemSearchResult = ref(null)
  const dbItemStatListKey = ref(0)
  const dbItemStats = ref([null])

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
    itemSearchQuery,
    calculatorSets,
    calculateSet,
    calculateSet2,
    isComparing,
    setsToCompare,

    itemGridApi,
    itemDBHideNoBuy,
    dbItemGridState,
    dbItemTiers,
    dbItemRoles,
    dbItemSearchQuery,
    dbItemSearchResult,
    dbItemStatListKey,
    dbItemStats,
  }
}, {
  persist: {
    storage: piniaPluginPersistedstate.localStorage(),
    key: 'itemStore',
    pick: ['itemGridApi'],
  },
})
