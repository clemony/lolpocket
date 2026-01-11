import { riotFetch } from "~~/server/api/riot"
import { serverToRegion } from "~~/server/domain"

//https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/P84Ak9qWwk2epueCD7ZeGQeqIXSiJnNAc_-EoqEWj1jT7uODKXTGY1rpvSO7ePL9XyygjZOvb0Jm2A/ids?queue=440&start=0&count=20&api_key= {API KEY}

export function idsByPuuid({ puuid, region, start, count, queue }) {
  const url = `${serverToRegion(region)}/lol/match/v5/matches/by-puuid/${puuid}/ids?${queue ? "queue=" + queue : ""}&start=${start}&count=${count}`
  console.log("🥸 - idsByPuuid - url:", url)
  const params = { queue, start, count }

  const key = `ids:${puuid}:${start}`
  return riotFetch<string[]>(key, url)
  /*   return riotFetch<string[]>(key, url, params) */
}
