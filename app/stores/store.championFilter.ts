import { championIndex } from "#shared/constants/champions/championIndex"
import { positionToChamp } from "#shared/constants/champions/positionToChamp"
import { rangeToChamp } from "#shared/constants/champions/rangeToChamp"
import { resourceToChamp } from "#shared/constants/champions/resourceToChamp"
import { roleToChamp } from "#shared/constants/champions/roleToChamp"
import { defineStore } from "pinia"

export type AttackType = "All" | "Melee" | "Ranged"
export type AttackKey = 0 | 1 | 2
export interface ChampionFilter {
  attackType: number
  position: string
  query: string
  resource: string | null
  role: string[]
  sort: string
}

export const champFilter = defineStore("champ-filter", () => {
  const championSplashDropdown = ref<HTMLElement | null>(null)

  const attackType: Record<AttackKey, AttackType> = {
    0: "All",
    1: "Melee",
    2: "Ranged"
  }
  // --- FILTER STATE ---
  const filters = ref<ChampionFilter>({
    attackType: 0,
    position: "all",
    query: "",
    resource: null,
    role: [],
    sort: "az"
  })

  // --- HELPERS ---

  function clearFilters() {
    filters.value = {
      attackType: 0,
      position: "all",
      query: "",
      resource: null,
      role: [],
      sort: "az"
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

    if (filters.value.attackType > 0) {
      const ids =
        rangeToChamp[attackType[filters.value.attackType as AttackKey]] ?? []
      matched = new Set(ids.filter((id) => matched.has(id)))
    }

    if (filters.value.role) {
      for (const v of filters.value.role) {
        const rolesIds = roleToChamp[v] ?? []
        matched = new Set(rolesIds.filter((id) => matched.has(id)))
      }
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

    const array = Array.from(
      matched,
      (id) => championIndex.find((c) => c.id === id)?.key
    ).filter((key): key is string => Boolean(key))

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
    attackType,
    championSplashDropdown,
    clearFilters,
    filtered,
    filters,
    reorder
  }
})
