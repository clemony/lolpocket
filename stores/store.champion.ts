import type { GridApi, GridState } from 'ag-grid-community'
import { /* championAkaLookup, */ championFilters } from '@appdata'
import { defineStore } from 'pinia'

export interface ChampionFilter {
  attackType: string | null
  position: string
  query: string
  resource: string | null
  role: string | null
  sort: string
}

export const useChampStore = defineStore('ChampStore', () => {
  const championSplashDropdown = ref(null)

  const dbChampionGridState = shallowRef<GridState>(null)
  const championGridApi = shallowRef<GridApi | null>(null)
  const dbChampionStatListKey = ref(0)
  const championGridLevel = ref(1)
  const championGridType = ref<'calculated' | 'base' | 'growth'>('calculated')

  // --- FILTER STATE ---
  const filters = ref<ChampionFilter>({
    attackType: null,
    position: 'all',
    query: '',
    resource: null,
    role: null,
    sort: 'az'
  })

  // --- HELPERS ---

  function clearFilters() {
    filters.value = {
      attackType: null,
      position: 'all',
      query: '',
      resource: null,
      role: null,
      sort: 'az'
    }
  }

  // --- FILTER LOGIC ---
  const queryRef = computed(() => filters.value.query || '')
  const debouncedQuery = refDebounced(queryRef, 200)
  const order = ref<string[]>([])

  function reorder(newOrder: string[]) {
    order.value = [...newOrder]
  }

  const filtered = computed(() => {
    const query = debouncedQuery.value.toLowerCase()

    const all = ix().champions.map(i => i.id)
    let matched: Set<number> = new Set(all)

    if (filters.value.attackType?.length > 0) {
      for (const stat of filters.value.attackType) {
        const ids = championFilters.attackType[stat] ?? []
        matched = new Set(ids.filter(id => matched.has(id)))
      }
    }

    if (filters.value.role && filters.value.role !== 'all') {
      const rolesIds = championFilters.roles[filters.value.role] ?? []
      matched = new Set(rolesIds.filter(id => matched.has(id)))
    }

    if (filters.value.position && filters.value.position !== 'all') {
      const positionsIds = championFilters.positions[filters.value.position] ?? []
      matched = new Set(positionsIds.filter(id => matched.has(id)))
    }

    if (filters.value.resource && filters.value.resource !== null) {
      const resourceIds = championFilters.resource[filters.value.resource] ?? []
      matched = new Set(resourceIds.filter(id => matched.has(id)))
    }

    if (query) {
      matched = new Set(
        [...matched].filter((id) => {
          const champion = ix().championById(id)
          if (!champion)
            return false

          const name = champion.name.toLowerCase()
          return name.includes(query)
        })
      )
    }

    const array = Array.from(matched).map(id =>
      ix().champions.find(c => c.id === id).key)

    if (filters.value.sort) {
      filters.value.sort === 'az' ? array.sort() : array.sort().reverse()
    }

    if (order.value.length) {
      const orderMap = new Map(order.value.map((k, i) => [k, i]))
      array.sort((a, b) =>
        filters.value.sort === 'az'
          ? (orderMap.get(a) ?? Infinity) - (orderMap.get(b) ?? Infinity)
          : (orderMap.get(b) ?? Infinity) - (orderMap.get(a) ?? Infinity)
      )
    }

    return array
  })

  return {
    championGridApi,
    championGridLevel,
    championGridType,
    dbChampionGridState,
    championSplashDropdown,
    clearFilters,
    dbChampionStatListKey,
    filtered,
    filters,
    reorder,

  }
})
