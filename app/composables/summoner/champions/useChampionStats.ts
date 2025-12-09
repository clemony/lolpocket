export async function useChampionStats(
  puuid: string,
  queueFilter: TrackedQueueId
): Promise<Map<number, ChampionStats>> {
  const rows = await matchDB.playerChampions
    .where("puuid")
    .equals(puuid)
    .toArray()

  const map = new Map<number, ChampionStats>()

  for (const row of rows) {
    const bucket =
      queueFilter === 0 ?
        row.overall
      : (row.queues[String(queueFilter) as QueueKey] ?? 0)

    if (!bucket || bucket.games === 0) continue

    const champId = row.championId
    if (!champId) continue

    map.set(champId, {
      championId: row.championId,
      championName: row.championName,
      games: bucket.games,
      wins: bucket.wins,
      losses: bucket.losses,
      kills: bucket.kills,
      deaths: bucket.deaths,
      assists: bucket.assists,
      kp: bucket.killParticipation,
      gamePatches: bucket.gamePatches,
      matchIndexes: [],
      winrate: (bucket.wins / bucket.games) * 100,
    })
  }

  console.log("🥸 - useChampionStats - map:", map)
  return map
}
