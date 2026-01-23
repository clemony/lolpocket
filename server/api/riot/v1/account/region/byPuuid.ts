import type { RegionReturn } from '~~/server/types'
import { riotFetch } from 'riot'

export function fetchRegionByPuuid(puuid: string) {
  const url = `https://americas.api.riotgames.com/riot/account/v1/region/by-game/lol/by-puuid/${puuid}`
  const key = `region:${puuid}`
  return riotFetch<RegionReturn>(key, url)
}
