import { riotFetch } from "~~/server/api/riot"
import { serverToRegion } from "~~/server/helpers"

export function idsByPuuid({ puuid, region, start, count }) {
  const url = `${serverToRegion(region)}/lol/match/v5/matches/by-puuid/${puuid}/ids`
  const params = { start, count }
  const key = `ids:${puuid}:${start}`

  return riotFetch<string[]>(key, url, params)
}
