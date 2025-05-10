import type { GridApi } from 'ag-grid-community'
import { defineStore } from 'pinia'

export const usePocketStore = defineStore(
  'pocketStore',
  () => {
    const pockets = ref<Pocket[]>([])
    const trashFolder = ref<Pocket[]>([])
    const archiveFolder = ref<Pocket[]>([])
    const filterText = ref('')
    const selectedRows = ref([])
    const tableSelectAll = ref()
    const pocketGridApi = shallowRef<GridApi | null>(null)
    const trashGridApi = shallowRef<GridApi | null>(null)/*
    const pinnedTopRowData = ref([]) */
    const pocketGrid = shallowRef()
    const columns = ref([])
    const newPocketOpen = ref(false)

    function updateSelectedRows(rows: any) {
      selectedRows.value = rows // Update the selected rows in the store
    }

    const allPockets = computed(() => {
      return pockets.value
    })

    return {
      pockets,
      filterText,
      archiveFolder,
      trashFolder,
      selectedRows,
      tableSelectAll,
      updateSelectedRows,
      pocketGridApi,
      trashGridApi,
      pocketGrid,
      // pinnedTopRowData,
      allPockets,
      columns,
      newPocketOpen,
    }
  },

  {
    persist: {
      storage: piniaPluginPersistedstate.localStorage(),
      key: 'pocketStore',
    },
  },
)
