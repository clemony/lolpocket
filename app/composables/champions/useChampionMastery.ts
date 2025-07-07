export function useSummonerMastery(queryPuuid?: string) {
  const cs = useChampStore()
  const as = useAccountStore()

  const loading = ref(false)
  const ready = ref(false)

  const SIX_HOURS = 1000 * 60 * 60 * 6

  async function fetchSummonerMastery(options?: { force?: boolean }) {
    const now = Date.now()
    const tooOld = !cs.lastFetchedAt || now - cs.lastFetchedAt > SIX_HOURS
    const needsFetch =
      options?.force || tooOld || !Object.keys(cs.summonerMastery).length

    if (!queryPuuid || !needsFetch) return

    loading.value = true
    try {
      const { puuid, mastery } = await $fetch(
        "/api/riot/get-summoner-mastery",
        {
          query: { puuid: queryPuuid },
        }
      )

      cs.summonerMastery = mastery
      cs.lastFetchedAt = now
      as.userAccount.riot.puuid = puuid // Optional: update puuid if needed

      ready.value = true
    } catch (e) {
      console.error("Error fetching mastery:", e)
    } finally {
      loading.value = false
    }
  }

  const forceReload = () => fetchSummonerMastery({ force: true })

  // Automatically call on use
  onMounted(() => {
    fetchSummonerMastery()
  })

  return {
    loading,
    ready,
    forceReload,
  }
}
