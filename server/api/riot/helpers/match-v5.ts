import { getApiRegion, riotGet } from "../client"

export async function getMatchesByPuuid({
  puuid,
  count = 20,
  start = 0,
  region,
}: {
  puuid: string
  start?: number
  count?: number
  region: string
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
  start?: number
  count?: number
  region?: string
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
