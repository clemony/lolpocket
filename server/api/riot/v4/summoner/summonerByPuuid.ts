import { riotFetch } from "riot"
import { apiPath } from "~~/server/helpers/riot"
import type { SummonerReturn } from "~~/server/types"

export function fetchSummonerByPuuid(puuid: string, region: string) {
  const url = `${apiPath(region)}/lol/summoner/v4/summoners/by-puuid/${puuid}`
  const key = `summoner:${puuid}`
  return riotFetch<SummonerReturn>(key, url)
}
