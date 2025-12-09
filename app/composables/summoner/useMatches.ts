import type { MatchReturn } from "~~/shared"

export function useMatches(summoner: Ref<Summoner | null>) {
  const { getMatchesForSummoner, getCursor, setCursor } = useIndexedDB()

  const puuid = computed(() => summoner.value?.puuid ?? null)
  const region = computed(() => summoner.value?.region ?? null)

  const matches = shallowRef<MatchData[]>([])
  const loading = shallowRef(false)
  const endOfHistory = shallowRef(false)

  const cursor = shallowRef<number>(0)
  const newestTs = shallowRef<number | null>(null)

  async function loadFromDB() {
    const id = puuid.value
    if (!id) return

    const local = await getMatchesForSummoner(id)
    matches.value = local
    newestTs.value = local[0]?.gameEndTimestamp ?? null

    const storedCursor = await getCursor(id)
    cursor.value = storedCursor.lastIndex
  }

  async function loadNewer() {
    const id = puuid.value
    const r = region.value
    if (!id || !r || loading.value) return

    loading.value = true
    try {
      const since = newestTs.value ?? 0

      const res = await $fetch<MatchReturn>(`/api/riot/v5/match/newer`, {
        query: { puuid: id, region: r, since },
      })

      if (res.matches.length) {
        await useAddMatches(res.matches)
        matches.value.unshift(...res.matches)
        newestTs.value = res.newestTimestamp
      }

      if (res.cursor != null) {
        cursor.value = res.cursor
        await setCursor(id, cursor.value)
      }

      if (summoner.value) summoner.value.updatedMatch = Date.now()
    } finally {
      loading.value = false
    }
  }

  async function loadOlder() {
    const id = puuid.value
    const r = region.value
    if (!id || !r || loading.value || endOfHistory.value) return

    loading.value = true
    try {
      const res = await $fetch<MatchReturn>(`/api/riot/v5/match/older`, {
        query: { puuid: id, region: r, cursor: cursor.value },
      })

      if (!res.matches.length) {
        endOfHistory.value = true
        return
      }

      await useAddMatches(res.matches)
      matches.value.push(...res.matches)

      if (res.cursor != null) {
        cursor.value = res.cursor
        await setCursor(id, cursor.value)
      }

      if (res.done) endOfHistory.value = true
    } finally {
      loading.value = false
    }
  }

  watch(
    summoner,
    async () => {
      matches.value = []
      cursor.value = 0
      newestTs.value = null
      endOfHistory.value = false
      await loadFromDB()
    },
    { immediate: true }
  )

  return {
    matches,
    loading,
    loadNewer,
    loadOlder,
    refreshLocal: loadFromDB,
    endOfHistory,
    cursor,
  }
}
