export const useSummonerMatches = defineStore('summonerMatches', () => {
  const session = useSummonerSession()
  const { summoner } = storeToRefs(s_session())
  const id = toValue(session.summoner?.puuid)
  const region = toValue(session.summoner?.region)

  const { getCursor, getMatchesForSummoner, putMatchData, setCursor }
    = useIndexedDB()

  const matches = ref<MatchData[]>([])
  const timelines = shallowRef<PlayerTimeline[]>([])
  const loading = ref(false)
  const loadingOlder = ref(false)
  const endOfHistory = ref(false)

  const cursor = ref(0)
  const newestTs = ref<number | null>(null)
  const loadMessage = ref<string | null>(null)

  const {
    clearFilters,
    filter,
    filteredMatches,
    filterEmpty,
    query,
    setFilter,
  } = useMatchFilters(matches, id)

  function reset() {
    matches.value = []
    cursor.value = 0
    newestTs.value = null
    endOfHistory.value = false
    loadMessage.value = null
  }

  async function loadFromDB() {
    if (!id) return

    const local = await getMatchesForSummoner(id)
    matches.value = local
    newestTs.value = local[0]?.gameEndTimestamp ?? null

    const storedCursor = await getCursor(id)
    cursor.value = storedCursor.lastIndex
  }

  watch(
    () => session.summoner?.puuid,
    async (next, prev) => {
      if (!next || next === prev) return
      reset()
      await loadFromDB()
    },
    { immediate: true }
  )

  async function loadNewer() {
    if (!id || !region || loading.value) return

    loading.value = true
    try {
      const res = await $fetch<MatchReturn>(`/api/v5/match/newer`, {
        query: {
          puuid: id,
          region,
          since: newestTs.value ?? 0,
        },
      })

      if (res.matches.length) {
        await putMatchData(res.matches)
        matches.value.unshift(...res.matches)
        newestTs.value = res.newestTimestamp
        loadMessage.value = `Loaded ${res.matches.length} new matches!`
      }
      else {
        loadMessage.value = 'No new matches found!'
      }

      if (res.cursor != null) {
        cursor.value = res.cursor
        await setCursor(id, cursor.value)
      }

      ss().patchSummoner(id, { lastMatchUpdate: Date.now() })
    }
    finally {
      loading.value = false
    }
  }

  async function loadOlder() {
    if (
      !id
      || !region
      || loadingOlder.value
      || endOfHistory.value
    ) {
      return
    }

    loadingOlder.value = true
    try {
      const res = await $fetch<MatchReturn>(`/api/v5/match/older`, {
        query: {
          puuid: id,
          cursor: cursor.value,
          region,
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
    }
    finally {
      loadingOlder.value = false
    }
  }

  // 🔑 identity change = explicit reset
  watch(
    () => id,
    async (next, prev) => {
      if (!next || next === prev) return
      reset()
      await loadFromDB()
    },
    { immediate: true }
  )

  return {
    endOfHistory,
    loadFromDB,
    loading,
    loadingOlder,
    loadMessage,
    loadNewer,
    loadOlder,
    matches,

    clearFilters,
    filter,
    filteredMatches,
    filterEmpty,
    query,
    setFilter,

    timelines
  }
})