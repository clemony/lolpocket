export interface ChampionMasteryResponse {
  puuid: string
  mastery: ChampionMastery[]
  totalLevels: number
  totalPoints: number
}
export async function fetchSummonerMastery(puuid: string) {
  if (!puuid)
    throw new Error('Missing puuid for mastery fetch')

  const summoner = ss().getSummoner(puuid)
  const TWO_HOURS = 1000 * 60 * 60 * 2

  const isStale = (timestamp?: number) =>
    !timestamp || Date.now() - new Date(timestamp).getTime() > TWO_HOURS

  const needsUpdate
    = !summoner?.mastery?.champions?.length
      || !summoner?.mastery?.totalPoints
      || isStale(summoner.mastery.updated)

  // If nothing is stale or missing, return existing data
  if (!needsUpdate)
    return summoner.mastery

  try {
    const result = await $fetch<ChampionMasteryResponse>(
      '/api/riot/fetchSummonerMastery',
      {
        query: { puuid },
      }
    )

    const updated = {
      ...(summoner?.mastery ?? {}),
      updated: Date.now(),
    }

    updated.champions = result.mastery as ChampionMastery[]

    await ss().mergeSummonerData(puuid, {
      mastery: {
        champions: updated.champions,
        totalLevels: result.totalLevels,
        totalPoints: result.totalPoints,
        updated: Date.now(),
      } as Summoner['mastery'],
    })
    return updated
  }
  catch (e) {
    console.error('❌ fetchSummonerMastery failed:', e)
    throw e
  }
}
