import type { RiotFetchOptions } from "#server/api/riot/fetch"
import { riotFetch } from '#server/api/riot'
import { serverToRegion } from '#server/domain'

// https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/P84Ak9qWwk2epueCD7ZeGQeqIXSiJnNAc_-EoqEWj1jT7uODKXTGY1rpvSO7ePL9XyygjZOvb0Jm2A/ids?queue=440&start=0&count=20&api_key= {API KEY}

export function idsByPuuid({
  puuid,
  count,
  fetchOptions,
  queue,
  region,
  start,
}: {
  puuid: string
  count: number
  fetchOptions?: RiotFetchOptions
  queue?: string | number
  region: string
  start: number
}) {
  const url = `${serverToRegion(region)}/lol/match/v5/matches/by-puuid/${puuid}/ids?${queue ? `queue=${queue}` : ''}&start=${start}&count=${count}`
  console.log('🥸 - idsByPuuid - url:', url)
  const params = { count, queue, start }

  const key = `ids:${region}:${puuid}:${queue ?? "all"}:${start}:${count}`
  return riotFetch<string[]>(key, url, undefined, fetchOptions)
  /*   return riotFetch<string[]>(key, url, params) */
}
