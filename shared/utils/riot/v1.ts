export function fetchAccountByPuuid(puuid: string) {
  return riotFetch<AccountReturn>(`v1/account/puuid`, {
    query: { puuid },
  })
}

export function fetchAccountByRiotID(puuid: string) {
  return riotFetch<AccountReturn>(`v1/account/riotId`, {
    query: { puuid },
  })
}

export function fetchResolvedAccount(q: { puuid?: string, name?: string, tag?: string }) {
  const { name, puuid, tag } = q
  return riotFetch<AccountReturn>(`v1/account/resolve`, {
    query: { name, puuid, tag },
  })
}

export function fetchRegion(puuid: string) {
  return riotFetch<RegionReturn>(`v1/account/region/puuid`, {
    query: { puuid },
  })
}
