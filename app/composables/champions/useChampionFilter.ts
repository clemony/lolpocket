import { championFilters } from '#shared/appdata/filters/champion-filters'

export function useChampionFilter(filters: ChampionFilter) {
  const ix = useIndexStore()
  const champions = ix.champions // ChampionIndex[]

  const queryRef = computed(() => filters.query || '')
  const debouncedQuery = refDebounced(queryRef, 200)

  const allChampionIds = computed(() => {
    const ids = new Set<number>()
    Object.values(championFilters).forEach(group =>
      Object.values(group).forEach((idList: number[]) =>
        idList.forEach(id => ids.add(id)),
      ),
    )
    return [...ids]
  })

  const filteredIds = computed(() => {
    return allChampionIds.value.filter((id) => {
      const name = ix.champNameById(id)?.toLowerCase() || ''
      const roleMatch
        = filters.role
          ? championFilters.roles?.[filters.role]?.includes(id)
          : true
      const positionMatch
        = filters.position == 'All'
          ? true
          : filters.position
            ? championFilters.positions?.[filters.position]?.includes(id)
            : true
      const queryMatch
        = debouncedQuery.value
          ? name.includes(debouncedQuery.value.toLowerCase())
          : true

      return roleMatch && positionMatch && queryMatch
    })
  })

  const filtered = computed(() =>
    filteredIds.value.map(id => ({
      id,
      name: ix.champNameById(id),
      key: ix.champKeyById(id),
    })),
  )

  const championKeys = computed(() => champions.map(c => c.key))

  const filteredKeys = computed(() => filtered.value.map(c => c.key))

  return {
    filtered,
    championKeys,
    filteredKeys,
    rawChampions: champions,
    pending: ref(false),
    error: ref(null),
  }
}
