import type { SummonerReturn } from "@server-types"
import { getApiPath, riotGet } from "riot"

export function fetchSummonerByPuuid(puuid: string, region: string) {
  return riotGet<SummonerReturn>(
    `${getApiPath(region)}/lol/summoner/v4/summoners/by-puuid/${puuid}`
  )
}
