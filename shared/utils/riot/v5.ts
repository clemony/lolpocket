export function fetchNewerMatches(
  puuid: string,
  since: number,
  region: string,
) {
  return riotFetch<MatchReturn>(`v5/match/newer`, {
    query: { puuid, since, region },
  })
}

export function fetchOlderMatches(
  puuid: string,
  cursor: number,
  region: string,
) {
  return riotFetch<MatchReturn>(`v5/match/older`, {
    query: { puuid, cursor, region },
  })
}

export function fetchTimeline(
  matchId: string,
  region: string,
) {
  return riotFetch<MatchReturn>(`v5/timeline/matchId`, {
    query: { matchId, region },
  })
}

export function fetchLiveGame(
  puuid: string,
  region: string,
) {
  return riotFetch<MatchReturn>(`v5/spectator/puuid`, {
    query: { puuid, region },
  })
}
