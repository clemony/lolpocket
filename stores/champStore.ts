import type { GridApi, GridState } from 'ag-grid-community'
import { defineStore } from 'pinia'
import { /* championAkaLookup, */ championFilters } from '~~/shared/appdata'

export interface ChampionFilter {
  attackType: string | null
  positions: string
  query: string | null
  resource: string | null
  roles: string | null
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
    positions: null,
    query: null,
    resource: null,
    roles: null,
  })

  // --- HELPERS ---

  function clearFilters() {
    filters.value = {
      attackType: null,
      positions: null,
      query: null,
      resource: null,
      roles: null,
    }
  }

  // --- FILTER LOGIC ---
  const queryRef = computed(() => filters.value.query || '')

  const debouncedQuery = refDebounced(queryRef, 200)

  const filtered = computed(() => {
    const query = debouncedQuery.value.toLowerCase()
    const allIds = ix().champions.map(i => i.id)
    let matchedIds: Set<number> = new Set(allIds)

    if (filters.value.attackType.length > 0) {
      for (const stat of filters.value.attackType) {
        const ids = championFilters.attackType[stat] ?? []
        matchedIds = new Set(ids.filter(id => matchedIds.has(id)))
      }
    }

    if (filters.value.positions.length > 0) {
      for (const tag of filters.value.positions) {
        const ids = championFilters.positions[tag] ?? []
        matchedIds = new Set(ids.filter(id => matchedIds.has(id)))
      }
    }

    if (filters.value.roles && filters.value.roles !== 'all') {
      const rolesIds = championFilters.roles[filters.value.roles] ?? []
      matchedIds = new Set(rolesIds.filter(id => matchedIds.has(id)))
    }

    if (filters.value.resource && filters.value.resource !== null) {
      const resourceIds = championFilters.resource[filters.value.resource] ?? []
      matchedIds = new Set(resourceIds.filter(id => matchedIds.has(id)))
    }

    /* if (query) {
      matchedIds = new Set(
        [...matchedIds].filter((id) => {
          const champion = ix().championById(id)
          if (!champion)
            return false

          const name = champion.name.toLowerCase()
          const akas = akaLookup[champion.name.toLowerCase()] || []
          return (
            name.includes(query)
            || akas.some(aka => aka.toLowerCase().includes(query))
          )
        })
      )
    }
 */
    return Array.from(matchedIds)
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
  }
})
