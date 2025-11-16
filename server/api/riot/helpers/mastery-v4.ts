import { getApiPath, riotGet } from "../client"
export async function fetchMasteryV4(puuid: string, region: string) {
  return riotGet(
    getApiPath(region),
    `/lol/champion-mastery/v4/champion-masteries/by-puuid/${puuid}`
  )
}

export async function fetchMasteryTotalV4(puuid: string, region: string) {
  return riotGet(
    getApiPath(region),
    `/lol/champion-mastery/v4/scores/by-puuid/${puuid}`
  )
}
