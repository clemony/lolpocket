import type { MasteryReturn } from "@server-types"
import { getApiPath, riotGet } from "riot"

export function fetchMasteries(puuid: string, region: string) {
  return riotGet<MasteryReturn[]>(
    `${getApiPath(region)}/lol/champion-mastery/v4/champion-masteries/by-puuid/${puuid}`
  )
}
