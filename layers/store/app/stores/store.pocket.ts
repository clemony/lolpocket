//
import { defineStore } from "pinia"

export const usePocketStore = defineStore(
  "pocketStore",
  () => {
    const pockets = ref<Pocket[]>([])
    const tags = ref<string[]>([])
    // In your usePocketStore

    const downloadCard = refAutoReset(false, 1000)
    const pocketCardRef = ref<HTMLDivElement | null>(null)

    const trash = ref<string[]>([])
    const archive = ref<string[]>([])
    const pinned = ref<string[]>([])

    return {
      archive,
      //
      downloadCard,
      pinned,
      pocketCardRef,
      pockets,
      tags,
      trash,

      // helpers
      getPocket: (key: string) =>
        pockets.value.find((pocket) => pocket.key === key),
    }
  },

  {
    persist: {
      key: "pocketStore",
      storage: piniaPluginPersistedstate.localStorage(),
    },
  }
)
