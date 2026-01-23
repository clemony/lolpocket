import { lpdb } from '~/stores'

const now = () => Date.now()

export async function getMastery(puuid: string, championId: number) {
  const data = await lpdb.playerChampionMastery.get([puuid, championId])

  if (data) {
    lpdb.playerChampionMastery
      .update([puuid, championId], {
        lastAccessedAt: now(),
      })
      .catch(() => {})
  }

  return data ?? null
}

export async function getAllMastery(puuid: string) {
  const arr = await lpdb.playerChampionMastery
    .where('puuid')
    .equals(String(puuid))
    .toArray()

  if (arr.length) {
    const ts = now()
    await lpdb.playerChampionMastery.bulkPut(
      arr.map(m => ({
        ...m,
        lastAccessedAt: ts,
      }))
    )
  }

  return arr
}

export async function getMasterySummary(puuid: string) {
  return await lpdb.summonerMastery.get(puuid)
}
