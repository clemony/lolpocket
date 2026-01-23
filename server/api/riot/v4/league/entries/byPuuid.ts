import type { RankedEntryResponse, RankedResponse } from '~~/server/types'
import { riotFetch } from 'riot'
import { apiPath } from '~~/server/domain'

export async function fetchRankedByPuuid(puuid: string, region: string) {
  const league = await riotFetch<RankedEntryResponse[]>(
    `ranked:${puuid}`,
    `${apiPath(region)}/lol/league/v4/entries/by-puuid/${puuid}`
  )

  const ranked: RankedResponse = {}

  for (const entry of league) {
    const processed: RankedEntry = {
      name: entry.leagueId,
      division: entry.rank,
      losses: entry.losses,
      lp: entry.leaguePoints,
      queue: entry.queueType,
      tier: entry.tier,
      wins: entry.wins,
    }

    if (entry.queueType === 'RANKED_SOLO_5x5')
      ranked.solo = processed
    if (entry.queueType === 'RANKED_FLEX_SR')
      ranked.flex = processed
  }

  return { ranked }
}
