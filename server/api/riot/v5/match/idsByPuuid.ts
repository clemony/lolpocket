import { getApiRegion, riotGet } from "riot"

export function fetchMatchIds(
  puuid: string,
  region: string,
  start = 0,
  count = 100
) {
  return riotGet<string[]>(
    `${getApiRegion(region)}/lol/match/v5/matches/by-puuid/${puuid}/ids?start=${start}&count=${count}`
  )
}
