import { riotFetch } from "riot"
import { apiPath } from "~~/server/helpers"
import type { MasteryReturn } from "~~/server/types"

export function fetchMasteries(puuid: string, region: string) {
  const url = `${apiPath(region)}/lol/champion-mastery/v4/champion-masteries/by-puuid/${puuid}`

  const key = `mastery:${puuid}`

  return riotFetch<MasteryReturn[]>(key, url)
}
