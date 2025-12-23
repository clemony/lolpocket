import { matchDB } from "~/stores"

const now = () => Date.now()

export async function getMastery(puuid: string, championId: number) {
  const data = await matchDB.playerChampionMastery.get([puuid, championId])

  if (data) {
    matchDB.playerChampionMastery
      .update([puuid, championId], {
        lastAccessedAt: now(),
      })
      .catch(() => {})
  }

  return data ?? null
}

export async function getAllMastery(puuid: string) {
  const arr = await matchDB.playerChampionMastery
    .where("puuid")
    .equals(String(puuid))
    .toArray()

  if (arr.length) {
    const ts = now()
    await matchDB.playerChampionMastery.bulkPut(
      arr.map((m) => ({
        ...m,
        lastAccessedAt: ts,
      }))
    )
  }

  return arr
}

export async function getMasterySummary(puuid: string) {
  return await matchDB.summonerMastery.get(puuid)
}
