import { championIndex } from "#shared/constants/champions/championIndex"
import { champIdToRelease } from "#shared/constants/champions/champIdToRelease"
import { championToTitle } from "#shared/constants/champions/championToTitle"
import { champKeyToRole } from "#shared/constants/champions/champKeyToRole"
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

function collectLabelsById(source: Record<string, number[]>) {
  const map = new Map<number, string[]>()

  for (const [label, ids] of Object.entries(source)) {
    for (const id of ids) {
      const labels = map.get(id) ?? []
      labels.push(label)
      map.set(id, labels)
    }
  }

  return map
}

export const champFilter = defineStore("champ-filter", () => {
  const championSplashDropdown = ref<HTMLElement | null>(null)
  const championMap = new Map(championIndex.map((champion) => [champion.id, champion]))
  const rolesById = collectLabelsById(roleToChamp)
  const positionsById = collectLabelsById(positionToChamp)
  const rangesById = collectLabelsById(rangeToChamp)
  const resourcesById = collectLabelsById(resourceToChamp)

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

  const baseMatchedIds = computed<number[]>(() => {
    const all = championIndex.map((i) => i.id)
    let matched: Set<number> = new Set(all)

    if (filters.value.attackType > 0) {
      const ids =
        rangeToChamp[attackType[filters.value.attackType as AttackKey]] ?? []
      matched = new Set(ids.filter((id) => matched.has(id)))
    }

    if (filters.value.role.length) {
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

    return [...matched]
  })

  const searchIndex = computed(() =>
    baseMatchedIds.value.map((id) => {
      const champion = championMap.get(id)
      const key = champion?.key ?? ""

      return {
        id,
        key,
        name: champion?.name ?? "",
        releaseDate: champIdToRelease[String(id)] ?? "",
        title: championToTitle[key] ?? "",
        primaryRole: champKeyToRole[key] ?? "",
        roles: rolesById.get(id) ?? [],
        positions: positionsById.get(id) ?? [],
        attackTypes: rangesById.get(id) ?? [],
        resources: resourcesById.get(id) ?? []
      }
    })
  )

  const searchedChampions = useSearch(searchIndex, debouncedQuery, {
    keys: [
      "name",
      "key",
      "title",
      "primaryRole",
      "roles",
      "positions",
      "attackTypes",
      "resources"
    ]
  })

  const filtered = computed(() => {
    const query = debouncedQuery.value.trim()
    const champions = [...(query ? searchedChampions.value : searchIndex.value)]

    champions.sort((a, b) => {
      switch (filters.value.sort) {
        case "release-newest":
          return (
            b.releaseDate.localeCompare(a.releaseDate)
            || a.name.localeCompare(b.name)
          )
        case "release-oldest":
          return (
            a.releaseDate.localeCompare(b.releaseDate)
            || a.name.localeCompare(b.name)
          )
        case "alpha-desc":
        case "za":
          return b.name.localeCompare(a.name)
        case "alpha-asc":
        case "az":
        default:
          return a.name.localeCompare(b.name)
      }
    })

    const array = champions
      .map((champion) => champion.key)
      .filter((key): key is string => Boolean(key))

    if (filters.value.sort) {
      // Sorting happens above while champion metadata is still available.
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
