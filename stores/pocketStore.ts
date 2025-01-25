import { defineStore } from 'pinia'

export const usePocketStore = defineStore(
  'pocketStore',
  () => {
    const pockets = ref<pocket[]>([])
    const trashPockets = ref<pocket[]>([])
    const archivePockets = ref<pocket[]>([])

    const filterText = ref('')
    const selectedRows = ref([])
    const tableSelectAll = ref()
    const pocketApi = shallowRef()
    const pinnedApi = shallowRef()
    const headerApi = shallowRef()
    const pinnedGrid = shallowRef()
    const pocketGrid = shallowRef()
    const columns = ref([])

    function updateSelectedRows(rows: any) {
      selectedRows.value = rows // Update the selected rows in the store
    }

    const pinnedPockets = computed(() => {
      return pockets.value.filter(pocket => pocket.pinned)
    })
    const allPockets = computed(() => {
      return pockets.value.filter(pocket => !pocket.pinned)
    })

    const updatePocketType = (key: string, newTags: Array<string>) => {
      const findPocket = pockets.value.find(pocket => pocket.key === key)
      if (findPocket) {
        findPocket.tags = newTags
      }
    }

    return {
      pockets,
      filterText,
      archivePockets,
      trashPockets,
      updatePocketType,
      selectedRows,
      tableSelectAll,
      updateSelectedRows,
      pocketApi,
      pinnedApi,
      headerApi,
      pocketGrid,
      pinnedGrid,
      pinnedPockets,
      allPockets,
      columns,
    }
  },

  {
    persist: {
      storage: piniaPluginPersistedstate.localStorage(),
      key: 'pocketStore',
    },
  },
)
