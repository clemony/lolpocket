import { skinKeyFromUrl } from "#shared/utils/img-url"

export const pocketStore = defineStore(
  "pocketStore",
  () => {
    const pockets = ref<Pocket[]>([])
    console.log("🥸 - pockets:", pockets)
    const pinned = ref<string[]>([])

    const pocketsByKey = computed(() =>
      Object.fromEntries(pockets.value.map((pocket) => [pocket.key, pocket]))
    )

    function map() {
      if (!pockets.value) return
      pockets.value = pockets.value.map((f) =>
        f.location === "folders" || !f.location
          ? {
              ...f,
              location: "folders"
            }
          : {
              ...f
            }
      )
    }
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

    function getSpellSet(pocketKey: string, setId?: string) {
      const pocket = getPocket(pocketKey)
      return pocketIndexes.value[pocketKey]?.spellsById[
        setId ?? pocket?._spells ?? ""
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

    function updatePocketSort(
      pocketKey: string,
      location: string,
      order: number
    ) {
      const pocket = getPocket(pocketKey)
      if (!pocket) return

      const fromLocation = pocket.location || "all"
      const toLocation = location || "all"
      const byOrder = (a: Pocket, b: Pocket) =>
        (a.order ?? 0) - (b.order ?? 0) ||
        String(a.label ?? "").localeCompare(String(b.label ?? ""), undefined, {
          numeric: true,
          sensitivity: "base"
        })
      const groupPockets = (group: string) =>
        pockets.value
          .filter((p) => (p.location || "all") === group && p.key !== pocketKey)
          .sort(byOrder)

      const destination = groupPockets(toLocation)
      destination.splice(Math.max(0, Math.min(order, destination.length)), 0, {
        ...pocket,
        location: toLocation
      })

      const updates = new Map<string, Pick<Pocket, "location" | "order">>()
      if (fromLocation !== toLocation) {
        groupPockets(fromLocation).forEach((p, index) => {
          updates.set(p.key, { location: fromLocation, order: index })
        })
      }

      destination.forEach((p, index) => {
        updates.set(p.key, { location: toLocation, order: index })
      })

      pockets.value = pockets.value.map((p) => {
        const update = updates.get(p.key)
        return update ? { ...p, ...update } : p
      })
    }

    function setPocketTags(pocketKey: string, value: unknown) {
      const nextTags = Array.isArray(value)
        ? [
            ...new Set(
              value
                .filter((tag): tag is string => typeof tag === "string")
                .map((tag) => tag.trim().toLowerCase())
                .filter(Boolean)
            )
          ]
        : []

      pockets.value = pockets.value.map((p) =>
        p.key === pocketKey ? { ...p, tags: nextTags } : p
      )

      tags.value = [...new Set([...tags.value, ...nextTags])].sort((a, b) =>
        a.localeCompare(b)
      )
    }

    function setPocketPublic(pocketKey: string, value: unknown) {
      if (typeof value !== "boolean") return
      pockets.value = pockets.value.map((p) =>
        p.key === pocketKey ? { ...p, public: value } : p
      )
    }

    function togglePublic(pocketKey: string, value?: boolean) {
      console.log("🥸 - togglePublic - pocketKey:", pocketKey)
      const pocket = getPocket(pocketKey)
      setPocketPublic(pocketKey, value ?? !pocket?.public)
    }
    const sidebarFolderRefs = ref<Record<string, boolean>>({})

    return {
      //
      downloadCard,
      pinned,
      pocketCardRef,
      updatePocketName,
      updatePocketSort,
      setPocketTags,
      setPocketPublic,
      togglePublic,
      pockets,
      tags,

      // helpers
      getPocket,
      getRuneSet,
      getItemSet,
      getSpellSet,
      pocketsByKey,
      pocketIndexes,
      map,
      sidebarFolderRefs
    }
  },

  {
    persist: {
      key: "pocketStore",
      storage: piniaPluginPersistedstate.localStorage()
    }
  }
)
