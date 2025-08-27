import type { GridApi } from 'ag-grid-community'
import { defineStore } from 'pinia'

export const useItemStore = defineStore(
  'itemStore',
  () => {
    const sortItemsAZ = ref(0)
    const sortPrice = ref(0)
    const listKey = ref(0)
    const isComparing = ref()
    const itemGridApi = shallowRef<GridApi | null>(null)

    const calculatorSet = ref<CalculatorSet>([
      null,
      null,
      null,
      null,
      null,
      null,
    ])
    const calculatorSet2 = ref<CalculatorSet>([
      null,
      null,
      null,
      null,
      null,
      null,
    ])

    return {
      sortPrice,
      sortItemsAZ,
      listKey,
      isComparing,
      calculatorSet,
      calculatorSet2,
      itemGridApi,
    }
  },
  {
    persist: {
      storage: piniaPluginPersistedstate.localStorage(),
      key: 'itemStore',
      pick: ['itemGridApi'],
    },
  },
)
