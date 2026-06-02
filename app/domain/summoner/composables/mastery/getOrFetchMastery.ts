import { fetchSummonerMastery } from "~/domain/summoner/composables/mastery/fetchSummonerMastery"
import {
  getAllMastery,
  getMastery
} from "~/domain/summoner/composables/mastery/getMasteryFromDb"

export async function getOrFetchMastery(
  puuid: string,
  region: string,
  championId: number
) {
  // 1️⃣ Try IndexedDB first
  const cached = await getMastery(puuid, championId)
  if (cached) return cached

  // 2️⃣ Not found → fetch full mastery list from Riot
  const summary = await fetchSummonerMastery(puuid, region)

  // 3️⃣ Try again after fetch
  return await getMastery(puuid, championId)
}

export async function getOrFetchAllMastery(puuid: string, region: string) {
  const cached = await getAllMastery(puuid)

  if (cached.length) return cached

  await fetchSummonerMastery(puuid, region)

  return await getAllMastery(puuid)
}
