export async function fetchSummonerMastery(puuid: string) {
  if (!puuid)
    throw new Error('Missing puuid for mastery fetch')

  const ss = useSummonerStore()
  const summoner = ss.getSummoner(puuid)
  const TWO_HOURS = 1000 * 60 * 60 * 2

  const isStale = (timestamp?: Date) =>
    !timestamp || Date.now() - new Date(timestamp).getTime() > TWO_HOURS

  const needsUpdate
    = !summoner?.mastery?.champions?.length || !summoner?.mastery?.totalPoints || isStale(summoner.mastery.lastUpdate)

  // If nothing is stale or missing, return existing data
  if (!needsUpdate)
    return summoner.mastery

  try {
    const result = await $fetch<ChampionMasteryResponse>(
      '/api/riot/get-summoner-mastery',
      {
        query: { puuid },
      },
    )

    const updated = {
      ...(summoner?.mastery ?? {}),
      lastUpdate: new Date(),
    }

    updated.champions = result.mastery as ChampionMastery[]
    console.log('💠 - fetchSummonerMastery - updated:', updated)
    console.log('💠 - fetchSummonerMastery - result.totalPoints:', result.totalPoints)

    await ss.mergeSummonerData(puuid, {
      mastery: {
        totalPoints: result.totalPoints,
        totalLevels: result.totalLevels,
        champions: updated.champions,
        lastUpdate: new Date(),
      } as Summoner['mastery'],
    })
    return updated
  }
  catch (e) {
    console.error('❌ fetchSummonerMastery failed:', e)
    throw e
  }
}
