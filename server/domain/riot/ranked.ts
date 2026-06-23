import { riotFetch } from "#server/api/riot/fetch"
import { apiPath } from "#server/domain"
import type {
  RankedEntry,
  RankedEntryResponse,
  RankedResponse,
} from "#shared/types"

export function toRankedResponse(
  entries: RankedEntryResponse[]
): RankedResponse {
  const ranked: RankedResponse = {}

  for (const entry of entries) {
    if (entry.queueType === "RANKED_SOLO_5x5") {
      ranked.solo = toRankedEntry(entry)
    }

    if (entry.queueType === "RANKED_FLEX_SR") {
      ranked.flex = toRankedEntry(entry)
    }
  }

  return ranked
}

function toRankedEntry(entry: RankedEntryResponse): RankedEntry {
  return {
    name: entry.leagueId,
    label: "",
    division: entry.rank,
    loss: entry.losses,
    lp: entry.leaguePoints,
    queue: entry.queueType,
    tier: entry.tier,
    win: entry.wins,
  }
}

export async function fetchRankedByPuuid(
  puuid: string,
  region: string
): Promise<RankedResponse> {
  const entries = await riotFetch<RankedEntryResponse[]>(
    `ranked:${puuid}`,
    `${apiPath(region)}/lol/league/v4/entries/by-puuid/${puuid}`
  )

  return toRankedResponse(entries)
}
