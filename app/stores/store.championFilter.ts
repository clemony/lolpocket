import { defineStore } from "pinia"

export interface ChampionFilter {
  attackType: string[]
  position: string
  query: string
  resource: string | null
  role: string | null
  sort: string
}

export const champFilter = defineStore("ChampStore", () => {
  const championSplashDropdown = ref<HTMLElement | null>(null)

  // --- FILTER STATE ---
  const filters = ref<ChampionFilter>({
    attackType: [],
    position: "all",
    query: "",
    resource: null,
    role: null,
    sort: "az",
  })

  // --- HELPERS ---

  function clearFilters() {
    filters.value = {
      attackType: [],
      position: "all",
      query: "",
      resource: null,
      role: null,
      sort: "az",
    }
  }

  // --- FILTER LOGIC ---
  const queryRef = computed(() => filters.value.query || "")
  const debouncedQuery = refDebounced(queryRef, 200)
  const order = ref<string[]>([])

  function reorder(newOrder: string[]) {
    order.value = [...newOrder]
  }

  const filtered = computed(() => {
    const query = debouncedQuery.value.toLowerCase()

    const all = championIndex.map((i) => i.id)
    let matched: Set<number> = new Set(all)

    if (filters.value.attackType.length > 0) {
      for (const stat of filters.value.attackType) {
        const ids = rangeToChamp[stat] ?? []
        matched = new Set(ids.filter((id) => matched.has(id)))
      }
    }

    if (filters.value.role && filters.value.role !== "all") {
      const rolesIds = roleToChamp[filters.value.role] ?? []
      matched = new Set(rolesIds.filter((id) => matched.has(id)))
    }

    if (filters.value.position && filters.value.position !== "all") {
      const positionsIds = positionToChamp[filters.value.position] ?? []
      matched = new Set(positionsIds.filter((id) => matched.has(id)))
    }

    if (filters.value.resource && filters.value.resource !== null) {
      const resourceIds = resourceToChamp[filters.value.resource] ?? []
      matched = new Set(resourceIds.filter((id) => matched.has(id)))
    }

    if (query) {
      matched = new Set(
        [...matched].filter((id) => {
          const champion = championById(id)
          if (!champion) return false

          const name = champion.name.toLowerCase()
          return name.includes(query)
        })
      )
    }

    const array = Array.from(matched)
      .map((id) => championIndex.find((c) => c.id === id)?.key)
      .filter((key): key is string => Boolean(key))

    if (filters.value.sort) {
      filters.value.sort === "az" ? array.sort() : array.sort().reverse()
    }

    if (order.value.length) {
      const orderMap = new Map(order.value.map((k, i) => [k, i]))
      array.sort((a, b) =>
        filters.value.sort === "az"
          ? (orderMap.get(a) ?? Infinity) - (orderMap.get(b) ?? Infinity)
          : (orderMap.get(b) ?? Infinity) - (orderMap.get(a) ?? Infinity)
      )
    }

    return array
  })

  return {
    championSplashDropdown,
    clearFilters,
    filtered,
    filters,
    reorder,
  }
})
