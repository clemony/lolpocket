export function useChampionFilter(filters: ChampionFilter) {
  const { data: rawChampions, pending, error } = useFetch<ChampionLite[]>('/api/champions-lite', {
    key: 'champions-lite',
    server: false,
    default: () => [],
    immediate: true,
  })

  const championData = computed (() => Object.values(rawChampions.value) )

  const queryRef = computed(() => filters.query || '')
  const debouncedQuery = refDebounced(queryRef, 200)

  const filtered = computed(() => {
    return (championData.value ?? []).filter((champion) => {
      const matchesQuery = debouncedQuery.value
        ? champion.name.toLowerCase().includes(debouncedQuery.value.toLowerCase())
        : true

      const matchesRoles = filters.role ? champion.roles.includes(filters.role) : true
      const matchesPositions = filters.position ? champion.positions?.includes(filters.position) : true

      return matchesRoles && matchesPositions && matchesQuery
    })
  })


  const championKeys = computed(() => Object.values(championData.value).map(c => c.key))
  console.log("💠 - useChampionFilter - championKeys:", championKeys)
  const filteredKeys = computed (() => Object.values(filtered.value).map(c => c.key))

  return {
    filtered,
    championKeys,
     filteredKeys,
    rawChampions,
    pending,
    error,
  }
}
