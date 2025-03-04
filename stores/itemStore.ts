import { defineStore } from 'pinia'
import type { GridApi } from 'ag-grid-community'

export const useItemStore = defineStore('ItemStore', () => {
  const selectedItem = ref<Item>(null)
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

  return {
    selectedItem,
    selectedItemSet,
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
  }
})
