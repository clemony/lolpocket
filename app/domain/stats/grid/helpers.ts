export function perGameGetter<K extends keyof ChampionStatsAndMastery>(
  field: K
) {
  return (p: any) => (p.data?.games ? p.data[field] / p.data.games : null)
}
export function perGameFormatter<K extends keyof ChampionStatsAndMastery>(
  field: K
) {
  return (p: any) =>
    p.data?.games
      ? (Math.round((p.data[field]! / p.data.games) * 10) / 10).toString()
      : ''
}
export function percentPerGameFormatter<
  K extends keyof ChampionStatsAndMastery,
>(field: K) {
  return (p: any) =>
    p.data?.games
      ? `${Math.round((p.data[field]! / p.data.games) * 1000) / 10}%`
      : ''
}

export function statGetter<K extends keyof ChampionStatsAndMastery>(field: K) {
  return (p: any) => (p.data?.games ? p.data[field].average : null)
}
