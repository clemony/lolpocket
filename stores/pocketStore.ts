import type { GridApi } from 'ag-grid-community'
import { defineStore } from 'pinia'

export const usePocketStore = defineStore(
  'pocketStore',
  () => {
    const pockets = ref<Pocket[]>([])
    // In your usePocketStore

    function updateRunes({
      pocketKey,
      runeSetIndex,
      pathSetIndex, // 0 = primary, 1 = secondary
      pathSet,
    }: {
      pocketKey: string
      runeSetIndex: number
      pathSetIndex: number
      pathSet: PathSet
    }) {
      const pocket = pockets.value.find(p => p.key === pocketKey)
      if (!pocket || !pocket.runes)
        return

      // Ensure the RuneSet exists at the index
      const runeSet = pocket.runes[runeSetIndex]
      if (!runeSet)
        return

      // Replace the specific PathSet (0 = primary, 1 = secondary)
      runeSet[pathSetIndex] = JSON.parse(JSON.stringify(pathSet))

      // Optional: Update timestamp
      // pocket.dateUpdated = new Date()
    }

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

    return {
      pockets,

      updateRunes,
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
      key: 'pocketStore',
    },
  },
)
