import type { GridApi } from 'ag-grid-community'
import { defineStore } from 'pinia'

export const useItemStore = defineStore('itemStore', () => {
  const itemFilter = ref<ItemFilter>({
    purchasable: true,
    rank: null,
    stats: null,
    tags: null,
    map: 11,
    query: null,
    result: null,
  })

  const pItemFilter = ref<ItemFilter>({
    purchasable: true,
    rank: null,
    stats: null,
    tags: null,
    map: 11,
    query: null,
    result: null,
  })

  const cItemFilter = ref<ItemFilter>({
    purchasable: true,
    rank: null,
    stats: null,
    tags: null,
    map: 11,
    query: null,
    result: null,
  })

  const defaultItemFilter = ref<ItemFilter>({
    purchasable: true,
    rank: null,
    stats: null,
    tags: null,
    map: 11,
    query: null,
    result: null,
  })

  const dbItemStatListKey = ref()
  const selectedItem = ref<Item>(null)
  const selectedDatabaseItem = ref<Item>(null)
  const selectedItemSet = ref<ItemSet | null>(null)
  const priceModel = ref(0)
  const AZmodel = ref(0)
  const sortItemsAZ = ref(0)
  const sortPrice = ref(0)
  const listKey = ref(0)

  const pocketItemSelect = ref<Item>(null)
  const itemPaneOpen = ref(false)

  const itemGridApi = shallowRef<GridApi | null>(null)
  const dbItemGridState = shallowRef(null)

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
    itemFilter,
    pItemFilter,
    cItemFilter,
    defaultItemFilter,
    selectedItem,
    selectedDatabaseItem,
    selectedItemSet,
    itemPaneOpen,
    AZmodel,
    sortPrice,
    priceModel,
    sortItemsAZ,
    listKey,
    dbItemStatListKey,
    pocketItemSelect,
    calculatorSets,
    calculateSet,
    calculateSet2,
    isComparing,
    setsToCompare,

    itemGridApi,
    dbItemGridState,

  }
}, {
  persist: {
    storage: piniaPluginPersistedstate.localStorage(),
    key: 'itemStore',
    pick: ['itemGridApi'],
  },
})
