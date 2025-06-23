import type { GridApi } from "ag-grid-community"
import { defineStore } from "pinia"

export const usePocketStore = defineStore(
  "pocketStore",
  () => {
    const pockets = ref<Pocket[]>([])
    // In your usePocketStore

    const downloadCard = refAutoReset(false, 1000)
    const pocketCardRef = ref<HTMLElement>(null)
    console.log("💠 - pocketCardRef:", pocketCardRef)

    const trashFolder = ref<Pocket[]>([])
    const archiveFolder = ref<Pocket[]>([])
    const selectedRows = ref([])
    const tableSelectAll = ref()
    const pocketGridApi = shallowRef<GridApi | null>(null)
    const trashGridApi = shallowRef<GridApi | null>(null)

    const pocketGrid = shallowRef()
    const newPocketOpen = ref(false)

    function updateSelectedRows(rows: any) {
      selectedRows.value = rows // Update the selected rows in the store
    }

    const allPockets = computed(() => {
      return pockets.value
    })

    const userPockets = {
      pinned: {},
      archive: {},
    }

    return {
      pockets,
      downloadCard,
      pocketCardRef,

      archiveFolder,
      trashFolder,
      selectedRows,
      tableSelectAll,
      updateSelectedRows,
      pocketGridApi,
      trashGridApi,
      pocketGrid,
      allPockets,
      newPocketOpen,
    }
  },

  {
    persist: {
      storage: piniaPluginPersistedstate.localStorage(),
      key: "pocketStore",
    },
  }
)
