import { defineStore } from 'pinia'

export const usePocketStore = defineStore(
  'pocketStore',
  () => {
    const pockets = ref<pocket[]>([])
    const trashFolder = ref<pocket[]>([])
    const archiveFolder = ref<pocket[]>([])
    const pinnedFolder = ref<pocket[]>([])

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

    const allPockets = computed(() => {
      return pockets.value
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
      archiveFolder,
      trashFolder,
      updatePocketType,
      selectedRows,
      tableSelectAll,
      updateSelectedRows,
      pocketApi,
      pinnedApi,
      headerApi,
      pocketGrid,
      pinnedGrid,
      pinnedFolder,
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
