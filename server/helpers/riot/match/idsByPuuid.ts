import { getApiRegion, riotGet } from "riot"

export function idsByPuuid({
  puuid,
  start = 0,
  count = 100,
  region = "americas",
}: {
  puuid: string
  start: number
  count: number
  region: string
}): Promise<string[]> {
  return riotGet(
    `${getApiRegion(region)}/lol/match/v5/matches/by-puuid/${puuid}/ids?start=${start}&count=${count}`
  )
}
