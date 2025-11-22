import type { MatchReturn } from "~~/shared"
export function useMatches(summoner: Ref<Summoner>) {
  const { getMatchesForSummoner, addMatches, getCursor, setCursor } =
    useIndexedDB()
  const puuid = computed(() => summoner.value?.puuid)
  const matches = shallowRef<MatchData[]>([])
  const loading = shallowRef(false)
  const endOfHistory = shallowRef(false)

  const cursor = shallowRef<number>(0)
  const newestTs = shallowRef<number | null>(null)

  // --- load local cache + persisted cursor
  async function loadFromDB() {
    const id = toValue(puuid)
    if (!id) return

    const local = await getMatchesForSummoner(id)
    matches.value = local
    newestTs.value = local[0]?.gameEndTimestamp ?? null

    const storedCursor = await getCursor(id)
    cursor.value = storedCursor.lastIndex
  }

  // --- load newer matches from server
  async function loadNewer() {
    const id = toValue(puuid)
    if (!id || loading.value) return
    loading.value = true

    const since = newestTs.value ?? 0
    const res = await $fetch<MatchReturn>(`/api/matches/${id}/newer`, {
      query: { since },
    })

    if (res.matches.length) {
      await addMatches(res.matches)
      matches.value.unshift(...res.matches)
      newestTs.value = res.newestTimestamp
    }

    if (res.cursor != null) {
      cursor.value = res.cursor
      await setCursor(id, cursor.value)
    }
    summoner.value.updatedMatch = new Date().toISOString()
    loading.value = false
  }

  // --- load older matches using server cursor
  async function loadOlder() {
    const id = toValue(puuid)
    if (!id || loading.value || endOfHistory.value) return

    loading.value = true

    const res = await $fetch<MatchReturn>(`/api/matches/${id}/older`, {
      query: { cursor: cursor.value },
    })

    if (!res.matches.length) {
      endOfHistory.value = true
      loading.value = false
      return
    }

    await addMatches(res.matches)
    matches.value.push(...res.matches)

    if (res.cursor != null) {
      cursor.value = res.cursor
      await setCursor(id, cursor.value)
    }

    if (res.done) endOfHistory.value = true

    loading.value = false
  }

  // --- reset state on puuid change
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
