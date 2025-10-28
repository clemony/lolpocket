import type { GridApi } from 'ag-grid-community'
import { akaLookup } from '#shared/appdata/filters/item-aka'
import { itemFilters } from '#shared/appdata/filters/item-filters'
import { defineStore } from 'pinia'

export interface ItemFilter {
  map: number
  purchasable: boolean
  query: string
  rank: string
  stats: string[] | null
  tags: string[]
}

export const useItemStore = defineStore(
  'itemStore',
  () => {
    // --- FILTER STATE ---
    const filters = ref<ItemFilter>({
      map: 11,
      purchasable: true,
      query: '',
      rank: null,
      stats: [],
      tags: [],
    })

    const defaultFilterLength = computed<number>(() => itemFilters.maps[11].filter(i => !itemFilters.unpurchasable.includes(i)).length)
    console.log('🌱 - defaultFilterLength:', defaultFilterLength)
    // --- HELPERS ---

    function clearFilters() {
      console.log('🌱 - clearFilters - newFilters:')
      filters.value.map = 11
      filters.value.purchasable = true
      filters.value.query = ''
      filters.value.rank = null
      filters.value.stats.length = 0
      filters.value.tags.length - 0
    }

    // --- FILTER LOGIC ---
    const queryRef = computed(() => filters.value.query || '')

    const debouncedQuery = refDebounced(queryRef, 200)

    const filtered = computed(() => {
      const query = debouncedQuery.value.toLowerCase()
      const allIds = ix().items.map(i => i.id)
      let matchedIds: Set<number> = new Set(allIds)

      // alias map: stats that should be treated as equivalent
      const statAliases: Record<string, string[]> = {
        flatMagicPenetration: ['flatMagicPenetration', 'percentMagicPenetration'],
        flatMovespeed: ['flatMovespeed', 'percentMovespeed'],
        percentMagicPenetration: ['flatMagicPenetration', 'percentMagicPenetration'],
        percentMovespeed: ['flatMovespeed', 'percentMovespeed'],
      }

      if (filters.value.stats.length > 0) {
        for (const stat of filters.value.stats) {
          const equivalentStats = statAliases[stat] ?? [stat]
          const ids = equivalentStats.flatMap(s => itemFilters.stats[s] ?? [])
          matchedIds = new Set(ids.filter(id => matchedIds.has(id)))
        }
      }

      if (filters.value.tags.length > 0) {
        for (const tag of filters.value.tags) {
          const ids = itemFilters.tags[String(tag)] ?? []
          matchedIds = new Set(ids.filter(id => matchedIds.has(id)))
        }
      }

      if (filters.value.rank && filters.value.rank !== 'all') {
        const rankIds = itemFilters.rank[filters.value.rank] ?? []
        matchedIds = new Set(rankIds.filter(id => matchedIds.has(id)))
      }

      if (filters.value.map && filters.value.map !== 0) {
        const mapIds = itemFilters.maps[filters.value.map] ?? []
        matchedIds = new Set(mapIds.filter(id => matchedIds.has(id)))
      }

      if (filters.value.purchasable === true) {
        const unpurchasableSet = new Set(itemFilters.unpurchasable)
        matchedIds = new Set(
          [...matchedIds].filter(id => !unpurchasableSet.has(id))
        )
      }

      if (query) {
        matchedIds = new Set(
          [...matchedIds].filter((id) => {
            const item = ix().itemById(id)
            if (!item)
              return false

            const name = item.name.toLowerCase()
            const akas = akaLookup[item.name.toLowerCase()] || []
            return (
              name.includes(query)
              || akas.some(aka => aka.toLowerCase().includes(query))
            )
          })
        )
      }

      return Array.from(matchedIds)
    })

    const isComparing = ref()
    const itemGridApi = shallowRef<GridApi | null>(null)

    const calculatorSet = ref<CalculatorSet>([
      null,
      null,
      null,
      null,
      null,
      null,
    ])
    const calculatorSet2 = ref<CalculatorSet>([
      null,
      null,
      null,
      null,
      null,
      null,
    ])

    return {
      itemGridApi,
      calculatorSet,
      calculatorSet2,
      clearFilters,
      defaultFilterLength,
      filtered,
      filters,
      isComparing,
    }
  },
  {
    persist: {
      key: 'itemStore',
      pick: ['itemGridApi'],
      storage: piniaPluginPersistedstate.localStorage(),
    },
  }
)
