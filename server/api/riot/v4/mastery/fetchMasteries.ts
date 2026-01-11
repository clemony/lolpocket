import { riotFetch } from "riot"
import { apiPath } from "~~/server/domain"

export async function fetchMasteries(puuid: string, region: string) {
  const url = `${apiPath(String(region))}/lol/champion-mastery/v4/champion-masteries/by-puuid/${puuid}`

  const key = `mastery:${puuid}`

  return riotFetch<MasteryReturn[]>(key, url)
}
