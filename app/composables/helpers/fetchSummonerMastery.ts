export async function fetchSummonerMastery(puuid: string, full = false) {
  if (!puuid) throw new Error("Missing puuid for mastery fetch")

  const ss = useSummonerStore()
  const summoner = ss.getSummoner(puuid)
  const SIX_HOURS = 1000 * 60 * 60 * 6

  const isStale = (timestamp?: Date) =>
    !timestamp || Date.now() - new Date(timestamp).getTime() > SIX_HOURS

  const needsTop =
    !summoner?.mastery?.top?.length || isStale(summoner.mastery.lastUpdate)

  const needsFull =
    full &&
    (!summoner?.mastery?.full?.length || isStale(summoner.mastery.lastUpdate))

  // If nothing is stale or missing, return existing data
  if (!needsTop && !needsFull) return summoner.mastery

  try {
    const result = await $fetch<ChampionMasteryResponse>(
      "/api/riot/get-summoner-mastery",
      {
        query: { puuid, full },
      }
    )

    const updated = {
      ...(summoner?.mastery ?? {}),
      lastUpdate: new Date(),
    }

    if (full) {
      updated.full = result.mastery as ChampionMastery[]
    } else {
      updated.top = result.mastery as ChampionMastery[]
    }

    await ss.mergeSummonerData(puuid, {
      mastery: {
        top: result.mastery,
        lastUpdate: new Date(),
      } as Summoner["mastery"],
    })
    return updated
  } catch (e) {
    console.error("❌ fetchSummonerMastery failed:", e)
    throw e
  }
}
