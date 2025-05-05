export function useChampionFilter(rawChampions: Record<string, ChampionLite> | ChampionLite[], filters: ChampionFilter) {
  const filteredChampions = ref<ChampionLite[]>([])

  const champions = computed(() =>
    Array.isArray(rawChampions)
      ? rawChampions
      : Object.values(rawChampions ?? {}),
  )

  watchEffect(() => {
    filteredChampions.value = champions.value.filter((champion) => {

      const matchesRoles = filters.roles ? champion.roles.includes(filters.roles) : true
      const matchesPositions = filters.positions ? champion.positions?.includes(filters.positions) : true
      const matchesQuery = filters.query ? champion.name.toLowerCase().includes(filters.query.toLowerCase()) : true

      return  matchesRoles && matchesPositions && matchesQuery
    })
  })

  return {
    filteredChampions,
  }
}

