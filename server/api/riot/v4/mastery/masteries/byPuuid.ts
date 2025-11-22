import { getApiPath, riotGet } from "riot"
import type { MasteryReturn } from "~~/server/types"

export function fetchMasteries(puuid: string, region: string) {
  return riotGet<MasteryReturn[]>(
    `${getApiPath(region)}/lol/champion-mastery/v4/champion-masteries/by-puuid/${puuid}`
  )
}
