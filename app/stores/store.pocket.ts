export const pocketStore = defineStore(
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

    function updatePocketName(pocketKey: string, newName: string) {
      if (!pockets.value) return
      pockets.value = pockets.value.map((p) =>
        p.key === pocketKey ? { ...p, label: newName } : p
      )
    }
    return {
      archive,
      //
      downloadCard,
      pinned,
      pocketCardRef,
      updatePocketName,
      pockets,
      tags,
      trash,

      // helpers
      getPocket: (key: string) =>
        pockets.value.find((pocket: Pocket) => pocket.key === key)
    }
  },

  {
    persist: {
      key: "pocketStore",
      storage: piniaPluginPersistedstate.localStorage()
    }
  }
)
