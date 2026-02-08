export function fetchSummoner(q: {
  puuid?: string
  name?: string
  tag?: string
  region?: string
}) {
  const { name, puuid, region, tag } = q

  return riotFetch<Summoner>(`/summoner`, {
    query: { name, puuid, region, tag },
  })
}
