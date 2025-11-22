import { getApiRegion, riotGet } from "riot"

export function matchById(matchId: string, region: string) {
  return riotGet<any>(`${getApiRegion(region)}/lol/match/v5/matches/${matchId}`)
}
