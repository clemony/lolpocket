import type { MatchReturn } from "@constants"

export function useMatches(
  summoner: Ref<Summoner | null>,
  opts?: {
    queue?: number
  }
) {
  const { getMatchesForSummoner, getCursor, setCursor, putMatchData } =
    useIndexedDB()

  const puuid = computed(() => toValue(summoner)?.puuid ?? null)
  const region = computed(() => toValue(summoner)?.region ?? null)

  const matches = shallowRef<MatchData[]>([])
  const loading = shallowRef(false)
  const loadingOlder = shallowRef(false)
  const endOfHistory = shallowRef(false)

  const cursor = shallowRef<number>(0)
  const newestTs = shallowRef<number | null>(null)
  const loadMessage = shallowRef<string>()

  async function loadFromDB() {
    const id = puuid.value
    if (!id) return

    const local = await getMatchesForSummoner(id)
    matches.value = local
    newestTs.value = local[0]?.gameEndTimestamp ?? null

    const storedCursor = await getCursor(id)
    cursor.value = storedCursor.lastIndex
  }

  async function loadNewer(): Promise<string> {
    const id = puuid.value
    const r = region.value
    if (!id || !r || loading.value) return

    loading.value = true
    try {
      const since = newestTs.value ?? 0

      const res = await $fetch<MatchReturn>(`/api/riot/v5/match/newer`, {
        query: {
          puuid: id,
          region: r,
          since,
          queue: opts?.queue,
        },
      })

      if (res.matches.length) {
        await putMatchData(res.matches)
        matches.value.unshift(...res.matches)
        newestTs.value = res.newestTimestamp
        loadMessage.value = `Loaded ${res.matches.length} new matches!`
      } else if (!res.matches.length) {
        loadMessage.value = "No new matches found!"
      }
      if (res.cursor != null) {
        cursor.value = res.cursor
        await setCursor(id, cursor.value)
      }

      ss().patchSummoner(id, { lastMatchUpdate: Date.now() })
    } finally {
      loading.value = false
    }
  }

  async function loadOlder() {
    const id = puuid.value
    console.log("🥸 - loadOlder - id:", id)
    const r = region.value
    if (!id || !r || loading.value || endOfHistory.value) return

    loading.value = true
    try {
      const res = await $fetch<MatchReturn>(`/api/riot/v5/match/older`, {
        query: {
          puuid: id,
          region: r,
          cursor: cursor.value,
          queue: opts?.queue,
        },
      })

      if (!res.matches.length) {
        endOfHistory.value = true
        return
      }

      await putMatchData(res.matches)
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
    loadingOlder,
    loadNewer,
    loadOlder,
    refreshLocal: loadFromDB,
    endOfHistory,
    cursor,
    loadMessage,
  }
}
