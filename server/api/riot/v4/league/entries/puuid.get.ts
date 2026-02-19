import { apiPath } from "#server/domain"
import { riotFetch } from "#server/api/riot/fetch"

export default defineEventHandler(async (event) => {
  const { puuid, region } = getQuery(event)
  if (!puuid || !region) {
    throw createError({
      statusCode: 400,
      statusMessage: "Missing puuid or region",
    })
  }

  const league = await riotFetch<RankedEntryResponse[]>(
    `ranked:${puuid}`,
    `${apiPath(String(region))}/lol/league/v4/entries/by-puuid/${puuid}`
  )

  const ranked: RankedResponse = {}

  for (const entry of league) {
    const processed: RankedEntry = {
      name: entry.leagueId,
      division: entry.rank,
      loss: entry.losses,
      lp: entry.leaguePoints,
      queue: entry.queueType,
      tier: entry.tier,
      win: entry.wins,
    }

    if (entry.queueType === "RANKED_SOLO_5x5") ranked.solo = processed
    if (entry.queueType === "RANKED_FLEX_SR") ranked.flex = processed
  }

  return { ranked }
})
