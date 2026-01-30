export async function getMasteryMap(puuid: string, region: string) {
  const list = await getOrFetchAllMastery(puuid, region)

  return new Map(list.map(m => [m.championId, m]))
}
