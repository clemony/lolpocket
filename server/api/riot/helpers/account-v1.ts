import { riotAccountGet, riotGet } from "../client"

export interface RegionReturn {
  puuid: string
  game: string
  region: string
}

export interface AccountReturn {
  gameName: string
  tagLine: string
  puuid: string
}

export async function fetchAccountV1(puuid: string): Promise<AccountReturn> {
  return riotGet(
    "https://americas.api.riotgames.com",
    `/riot/account/v1/accounts/by-puuid/${puuid}`
  )
}

export async function fetchRegionV1(puuid: string): Promise<RegionReturn> {
  return riotGet(
    "https://americas.api.riotgames.com",
    `/riot/account/v1/region/by-game/lol/by-puuid/${puuid}`
  )
}

export async function fetchPuuidV1(name: string, tag: string): Promise<string> {
  return riotGet(
    "https://americas.api.riotgames.com/",
    "riot/account/v1/accounts/by-riot-id",
    { name, tag }
  )
}
