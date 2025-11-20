import type {
  RankedEntry,
  RankedEntryResponse,
  RankedResponse,
} from "@server-types"
import { getApiPath, riotGet } from "riot"

export async function fetchRankedByPuuid(puuid: string, region: string) {
  const league = await riotGet<RankedEntryResponse[]>(
    `${getApiPath(region)}/lol/league/v4/entries/by-puuid/${puuid}`
  )

  const ranked: RankedResponse = {}

  for (const entry of league) {
    const processed: RankedEntry = {
      division: entry.rank,
      losses: entry.losses,
      name: entry.leagueId,
      lp: entry.leaguePoints,
      queue: entry.queueType,
      tier: entry.tier,
      wins: entry.wins,
    }

    if (entry.queueType === "RANKED_SOLO_5x5") ranked.solo = processed
    if (entry.queueType === "RANKED_FLEX_SR") ranked.flex = processed
  }

  return { ranked }
}
