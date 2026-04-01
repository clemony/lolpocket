//
export const sMatches = defineStore("summonerMatches", () => {
  const { summoner } = storeToRefs(sSession())
  const id = computed(() => summoner.value?.puuid)
  const region = computed(() => summoner.value?.region)

  const { getCursor, getMatchesForSummoner, putMatchData, setCursor } =
    useIndexedDB()

  const matches = ref<MatchData[]>([])
  const timelines = shallowRef<PlayerTimeline[]>([])
  const loading = ref(false)
  const loadingOlder = ref(false)
  const endOfHistory = ref(false)

  const cursor = ref(0)
  const newestTs = ref<number | null>(null)
  const loadMessage = ref<string | null>(null)

  function reset() {
    matches.value = []
    cursor.value = 0
    newestTs.value = null
    endOfHistory.value = false
    loadMessage.value = null
  }

  async function loadFromDB() {
    const puuid = id.value
    if (!puuid) return

    const local = await getMatchesForSummoner(puuid)
    console.log("🥸 - loadFromDB - local:", local)
    matches.value = local
    newestTs.value = local[0]?.gameEndTimestamp ?? null

    const storedCursor = await getCursor(puuid)
    cursor.value = storedCursor.lastIndex
  }

  watch(
    () => [id.value, region.value] as const,
    async ([nextId, nextRegion], prev) => {
      const [prevId, prevRegion] = prev ?? []
      if (!nextId) return
      if (nextId === prevId && nextRegion === prevRegion) return
      reset()
      await loadFromDB()
    },
    { immediate: true }
  )

  async function loadNewer() {
    const puuid = id.value
    const regionId = region.value
    if (!puuid || !regionId || loading.value) return

    loading.value = true
    try {
      const res = await fetchNewerMatches(puuid, newestTs.value ?? 0, regionId)
      if (res.matches.length) {
        await putMatchData(res.matches)
        matches.value.unshift(...res.matches)
        newestTs.value = res.newestTimestamp ?? null
        loadMessage.value = `Loaded ${res.matches.length} new matches!`
      } else {
        loadMessage.value = "No new matches found!"
      }

      sSummoner().patchSummoner(puuid, { lastMatchUpdate: Date.now() })
    } finally {
      loading.value = false
    }
  }

  async function loadOlder() {
    const puuid = id.value
    const regionId = region.value
    if (!puuid || !regionId || loadingOlder.value || endOfHistory.value) {
      return
    }

    loadingOlder.value = true
    try {
      const res = await fetchOlderMatches(puuid, cursor.value, regionId)

      if (!res.matches.length) {
        endOfHistory.value = true
        return
      }

      await putMatchData(res.matches)
      matches.value.push(...res.matches)

      if (res.cursor != null) {
        cursor.value = res.cursor
        await setCursor(puuid, cursor.value)
      }

      if (res.done) endOfHistory.value = true
    } finally {
      loadingOlder.value = false
    }
  }

  return {
    endOfHistory,
    loadFromDB,
    loading,
    loadingOlder,
    loadMessage,
    loadNewer,
    loadOlder,
    matches,

    timelines,
  }
})
