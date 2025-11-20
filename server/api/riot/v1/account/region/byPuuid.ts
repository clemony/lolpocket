import type { RegionReturn } from "@server-types"
import { riotGet } from "riot"

export function fetchRegionByPuuid(puuid: string) {
  return riotGet<RegionReturn>(
    `https://americas.api.riotgames.com/riot/account/v1/region/by-game/lol/by-puuid/${puuid}`
  )
}
