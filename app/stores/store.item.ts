import { itemIndex } from "#shared/constants/items/itemIndex"
import { itemPrice } from "#shared/constants/items/itemPrice"
import { mapToItem } from "#shared/constants/items/mapToItem"
import { rankToItem } from "#shared/constants/items/rankToItem"
import { statToItem } from "#shared/constants/items/statToItem"
import { tagToItem } from "#shared/constants/items/tagToItem"
import { unpurchasableItems } from "#shared/constants/items/unpurchasableItems"
import equal from "fast-deep-equal/es6"
import type { AcceptableValue } from "reka-ui"
import { itemToNickname } from "~~/shared/constants/items/itemToNickname"

export interface ItemFilter {
  map: number
  purchasable: boolean
  query: string
  rank: string
  sort: string
  stats: string[]
  tags: string
}

type ItemFilterKey = keyof ItemFilter

function createEmptyFilter(): ItemFilter {
  return {
    map: 11,
    purchasable: true,
    query: "",
    rank: "",
    sort: "",
    stats: [],
    tags: ""
  }
}

export const is = defineStore("itemStore", () => {
  const cache = new Map<number, Item>()

  const isComparing = ref<boolean>(false)
  const calculatorSet = ref<CalculatorSet>([0, 0, 0, 0, 0, 0])
  const calculatorSet2 = ref<CalculatorSet>([0, 0, 0, 0, 0, 0])
  const unpurchasableSet = new Set(unpurchasableItems)
  const statAliases: Record<string, string[]> = {
    flatMagicPenetration: ["flatMagicPenetration", "percentMagicPenetration"],
    flatMovespeed: ["flatMovespeed", "percentMovespeed"],
    percentMagicPenetration: [
      "flatMagicPenetration",
      "percentMagicPenetration"
    ],
    percentMovespeed: ["flatMovespeed", "percentMovespeed"]
  }

  const emptyFilter = createEmptyFilter()

  // --- FILTER STATE ---
  const filters = ref<ItemFilter>(createEmptyFilter())

  const filtersEnabled = computed(() => !equal(filters.value, emptyFilter))

  const defaultFilterLength = computed<number>(
    () =>
      (mapToItem[11] ?? []).filter((i) => !unpurchasableItems.includes(i))
        .length
  )

  // --- HELPERS ---

  function clearFilters() {
    Object.assign(filters.value, createEmptyFilter())
  }

  function clearFilter<K extends ItemFilterKey>(key: K) {
    const defaults = createEmptyFilter()
    filters.value[key] = defaults[key]
  }

  // --- FILTER LOGIC ---
  const queryRef = computed(() => filters.value.query || "")

  const debouncedQuery = refDebounced(queryRef, 200)

  watch(
    () => filters.value.rank,
    (v) => {
      if (v === "Special") {
        clearFilters()
        filters.value.rank = v
      }
    }
  )

  const searchIndex = computed(() =>
    itemIndex.map((i) => ({
      id: i.id,
      name: i.name ?? "",
      nickname: itemToNickname[i.id] ?? "",
      price: itemPrice[i.id] ?? 0
    }))
  )

  const searchedItems = useSearch(searchIndex, debouncedQuery, {
    keys: ["name", "nickname"]
  })

  const search = computed(() => {
    const query = debouncedQuery.value.trim()
    return query ? searchedItems.value : searchIndex.value
  })

  function getMatchedIds(options?: { ignorePurchasable?: boolean }) {
    const allIds = search.value.map((i) => i.id)
    let matchedIds: Set<number> = new Set(allIds)

    if (filters.value.map && filters.value.map !== 0) {
      const mapIds = mapToItem[filters.value.map] ?? []
      matchedIds = new Set(mapIds.filter((id) => matchedIds.has(id)))
    }

    if (filters.value.stats.length > 0) {
      for (const stat of filters.value.stats) {
        const equivalentStats = statAliases[stat] ?? [stat]
        const ids = equivalentStats.flatMap((s) => statToItem[s] ?? [])
        matchedIds = new Set(ids.filter((id) => matchedIds.has(id)))
      }
    }

    if (filters.value.tags) {
      const ids = tagToItem[String(filters.value.tags)] ?? []
      matchedIds = new Set(ids.filter((id) => matchedIds.has(id)))
    }

    if (filters.value.rank && filters.value.rank !== "all") {
      const rankIds = rankToItem[filters.value.rank] ?? []
      matchedIds = new Set(rankIds.filter((id) => matchedIds.has(id)))
    }

    if (filters.value.purchasable === true && !options?.ignorePurchasable) {
      matchedIds = new Set(
        [...matchedIds].filter((id) => !unpurchasableSet.has(id))
      )
    }

    return matchedIds
  }

  const filteredIndex = computed(() => {
    const matchedIds = getMatchedIds()
    const items = search.value.filter((item) => matchedIds.has(item.id))

    items.sort((a, b) => {
      switch (filters.value.sort) {
        case "price-desc":
          return (b.price ?? 0) - (a.price ?? 0) || a.name.localeCompare(b.name)
        case "price-asc":
          return (a.price ?? 0) - (b.price ?? 0) || a.name.localeCompare(b.name)
        case "za":
        case "alpha-desc":
          return b.name.localeCompare(a.name)
        case "az":
        case "alpha-asc":
          return a.name.localeCompare(b.name)
        default:
          return a.id - b.id || a.name.localeCompare(b.name)
      }
    })

    return items
  })

  const filtered = computed(() => filteredIndex.value.map((item) => item.id))
  const availableWithoutPurchasableCount = computed(
    () => getMatchedIds({ ignorePurchasable: true }).size
  )

  return {
    cache,
    calculatorSet,
    calculatorSet2,
    clearFilter,
    clearFilters,
    defaultFilterLength,
    filtered,
    filters,
    isComparing,
    availableWithoutPurchasableCount,
    emptyFilter,
    filtersEnabled
  }
})
