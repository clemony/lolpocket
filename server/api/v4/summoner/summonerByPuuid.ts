import { riotFetch } from '#server/api'
import { apiPath } from '~~/server/domain'

export function fetchSummonerByPuuid(puuid: string, region: string) {
  const url = `${apiPath(region)}/lol/summoner/v4/summoners/by-puuid/${puuid}`
  const key = `summoner:${puuid}`
  return riotFetch<SummonerReturn>(key, url)
}
