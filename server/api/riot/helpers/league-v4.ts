import { getApiPath, riotGet } from '../client'

export async function fetchLeagueV4(puuid: string, region: string) {
  return riotGet(getApiPath(region), `/lol/league/v4/entries/by-puuid/${puuid}`)
}
