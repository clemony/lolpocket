import type { GridApi } from 'ag-grid-community'
import { defineStore } from 'pinia'
import type { Pocket } from '~~/shared/schema'

export const usePocketStore = defineStore(
  'pocketStore',
  () => {
    const pockets = ref<Pocket[]>([])
    const tags = ref<string[]>([])
    // In your usePocketStore

    const downloadCard = refAutoReset(false, 1000)
    const pocketCardRef = ref<HTMLDivElement>(null)

    const trash = ref<string[]>([])
    const archive = ref<string[]>([])
    const pinned = ref<string[]>([])

    return {
      trash,
      archive,
      pinned,
      //
      downloadCard,
      pocketCardRef,
      pockets,
      tags,

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
