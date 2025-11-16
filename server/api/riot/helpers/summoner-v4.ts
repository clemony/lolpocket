import { getApiPath, riotGet } from "../client"

// ------ V4
export async function fetchSummonerV4(puuid: string, region: string) {
  return riotGet(
    getApiPath(region),
    `/lol/summoner/v4/summoners/by-puuid/${puuid}`
  )
}
