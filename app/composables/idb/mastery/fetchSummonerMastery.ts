export interface ChampionMasteryResponse {
  puuid: string
  mastery: PlayerChampionMastery[]
  masteryLevels: number
  masteryPoints: number
}

export async function fetchSummonerMastery(puuid: string, region: string) {
  console.log("🥸 - fetchSummonerMastery - puuid:", puuid)
  if (!puuid) throw new Error("Missing puuid for mastery fetch")

  const TWO_HOURS = 1000 * 60 * 60 * 2

  const isStale = (timestamp?: number) =>
    !timestamp || Date.now() - timestamp > TWO_HOURS
  console.log("🥸 - isStale - isStale:", isStale)

  const existing = await lpdb.summonerMastery.get(puuid)
  console.log("🥸 - fetchSummonerMastery - existing:", existing)

  if (existing && !isStale(existing.updated)) {
    return existing
  }

  const result = await $fetch<ChampionMasteryResponse>(
    "/api/riot/v4/mastery/byPuuid",
    {
      query: { puuid: puuid, region },
    }
  )
  console.log("🥸 - fetchSummonerMastery - result:", result)

  const ts = Date.now()

  // store individual champion mastery
  await lpdb.playerChampionMastery.bulkPut(
    result.mastery.map((m) => ({
      ...m,
      puuid: puuid,
      lastAccessedAt: ts,
    }))
  )

  // 2️⃣ Store summary
  const summary: SummonerMastery = {
    puuid: puuid,
    masteryLevels: result.masteryLevels,
    masteryPoints: result.masteryPoints,
    updated: ts,
  }

  await lpdb.summonerMastery.put(summary)
}
