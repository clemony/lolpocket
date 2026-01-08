export const perGameGetter =
  <K extends keyof AggregatedStatsAndMastery>(field: K) =>
  (p: any) =>
    p.data?.games ? p.data[field] / p.data.games : null
export const perGameFormatter =
  <K extends keyof AggregatedStatsAndMastery>(field: K) =>
  (p: any) =>
    p.data?.games ?
      (Math.round((p.data[field]! / p.data.games) * 10) / 10).toString()
    : ""
export const percentPerGameFormatter =
  <K extends keyof AggregatedStatsAndMastery>(field: K) =>
  (p: any) =>
    p.data?.games ?
      `${Math.round((p.data[field]! / p.data.games) * 1000) / 10}%`
    : ""

export const statGetter =
  <K extends keyof AggregatedStatsAndMastery>(field: K) =>
  (p: any) =>
    p.data?.games ? p.data[field].average : null
