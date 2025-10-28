import type { GridApi } from 'ag-grid-community'
import { defineStore } from 'pinia'

export const usePocketStore = defineStore(
  'pocketStore',
  () => {
    const pockets = ref<Pocket[]>([])
    const tags = ref<string[]>([])
    // In your usePocketStore

    const downloadCard = refAutoReset(false, 1000)
    const pocketCardRef = ref<HTMLDivElement>(null)

    const trash = ref<Pocket[]>([])
    const archive = ref<Pocket[]>([])

    return {
      archive,
      downloadCard,
      pocketCardRef,
      pockets,
      tags,
      trash,

      // helpers
      getPocket: (key: string) =>
        pockets.value.find(pocket => pocket.key === key),
    }
  },

  {
    persist: {
      key: 'pocketStore',
      storage: piniaPluginPersistedstate.localStorage(),
    },
  }
)
