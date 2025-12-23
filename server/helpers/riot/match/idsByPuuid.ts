import { riotFetch } from "~~/server/api/riot"
import { serverToRegion } from "~~/server/helpers"

//https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/P84Ak9qWwk2epueCD7ZeGQeqIXSiJnNAc_-EoqEWj1jT7uODKXTGY1rpvSO7ePL9XyygjZOvb0Jm2A/ids?queue=440&start=0&count=20&api_key=RGAPI-39e090e1-1ad9-4f2b-8b97-ec5b395f0991

export function idsByPuuid({ puuid, region, start, count, queue }) {
  const url = `${serverToRegion(region)}/lol/match/v5/matches/by-puuid/${puuid}/ids`
  const params = { start, count, queue }
  const key = `ids:${puuid}:${start}`

  return riotFetch<string[]>(key, url, params)
}
