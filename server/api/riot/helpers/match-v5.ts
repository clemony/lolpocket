import { getApiRegion, riotGet } from '../client'

export async function getMatchesByPuuid({
  puuid,
  count = 20,
  region,
  start = 0,
}: {
  puuid: string
  region: string
  start?: number
  count?: number
}) {
  return riotGet(
    getApiRegion(region),
    `/lol/match/v5/matches/by-puuid/${puuid}/ids`,
    { count, start }
  )
}

export async function getMatchDetails(matchId: string, region: string) {
  return riotGet(getApiRegion(region), `/lol/match/v5/matches/${matchId}`)
}

export async function getMatchIdsByPuuid({
  puuid,
  count = 20,
  region,
  start = 0,
}: {
  puuid: string
  region?: string
  start?: number
  count?: number
}) {
  return riotGet(
    getApiRegion(region),
    `/lol/match/v5/matches/by-puuid/${puuid}/ids`,
    { count, start }
  )
}

export async function getMatchById(matchId: string, region: string) {
  return riotGet(getApiRegion(region), `/lol/match/v5/matches/${matchId}`)
}
