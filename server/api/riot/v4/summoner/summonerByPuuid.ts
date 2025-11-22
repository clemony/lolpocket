import { getApiPath, riotGet } from "riot"
import type { SummonerReturn } from "~~/server/types"

export function fetchSummonerByPuuid(puuid: string, region: string) {
  return riotGet<SummonerReturn>(
    `${getApiPath(region)}/lol/summoner/v4/summoners/by-puuid/${puuid}`
  )
}
