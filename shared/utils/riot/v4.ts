export function fetchSummonerByPuuid(puuid: string, region: string) {
  return riotFetch<SummonerReturn>(`v4/summoner/puuid`, {
    query: { puuid, region },
  })
}

export function fetchMastery(puuid: string, region: string) {
  return riotFetch<MasteryReturn>(`v4/mastery/puuid`, {
    query: { puuid, region },
  })
}

export function fetchRanked(puuid: string, region: string) {
  return riotFetch<RankedEntryResponse>(`v4/league/entries/puuid`, {
    query: { puuid, region },
  })
}
