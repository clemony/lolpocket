import { skinKeyFromUrl } from "#shared/utils/img-url"

export const pocketStore = defineStore(
  "pocketStore",
  () => {
    const pockets = ref<Pocket[]>([])
    const pinned = ref<string[]>([])

    const pocketsByKey = computed(() =>
      Object.fromEntries(pockets.value.map((pocket) => [pocket.key, pocket]))
    )

    const pocketIndexes = computed(() =>
      Object.fromEntries(
        pockets.value.map((pocket) => [
          pocket.key,
          {
            itemsById: Object.fromEntries(
              (pocket.items ?? []).map((set) => [set.id, set])
            ),
            runesById: Object.fromEntries(
              (pocket.runes ?? []).map((set) => [set.id, set])
            ),
            spellsById: Object.fromEntries(
              (pocket.spells ?? []).map((set) => [set.id, set])
            )
          }
        ])
      )
    )

    function getPocket(key: string) {
      return pocketsByKey.value[key]
    }

    function getRuneSet(pocketKey: string, setId?: string) {
      const pocket = getPocket(pocketKey)
      return pocketIndexes.value[pocketKey]?.runesById[
        setId ?? pocket?._runes ?? ""
      ]
    }

    function getItemSet(pocketKey: string, setId?: string) {
      const pocket = getPocket(pocketKey)
      return pocketIndexes.value[pocketKey]?.itemsById[
        setId ?? pocket?._items ?? ""
      ]
    }

    const tags = ref<string[]>([])

    const downloadCard = refAutoReset(false, 1000)
    const pocketCardRef = ref<HTMLDivElement | null>(null)

    function updatePocketName(pocketKey: string, newName: string) {
      if (!pockets.value) return
      pockets.value = pockets.value.map((p) =>
        p.key === pocketKey ? { ...p, label: newName } : p
      )
    }

    function migrateSplashUrlsToSkinKeys() {
      let migrated = 0

      pockets.value = pockets.value.map((pocket) => {
        if (pocket.skin) return pocket

        const { splash, ...nextPocket } = pocket as Pocket & { splash?: string }
        const skin = splash ? skinKeyFromUrl(splash) : null
        if (!skin) return pocket

        migrated += 1
        return { ...nextPocket, skin }
      })

      return migrated
    }

    return {
      //
      downloadCard,
      pinned,
      pocketCardRef,
      migrateSplashUrlsToSkinKeys,
      updatePocketName,
      pockets,
      tags,

      // helpers
      getPocket,
      getRuneSet,
      getItemSet,
      pocketsByKey,
      pocketIndexes
    }
  },

  {
    persist: {
      key: "pocketStore",
      storage: piniaPluginPersistedstate.localStorage()
    }
  }
)
