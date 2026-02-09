//
export function bumpStatDetail(
  map: Record<number, StatDetail>,
  itemId: number,
  win: boolean,
  timestamp?: number
) {
  if (!map[itemId]) {
    map[itemId] = { avgTimestamp: 0, games: 0, win: 0 }
  }

  const s = map[itemId]
  s.games++
  s.win ??= 0
  if (win) s.win++

  if (timestamp != null) {
    s.avgTimestamp =
      ((s.avgTimestamp ?? 0) * (s.games - 1) + timestamp) / s.games
  }
}

export function bumpAverage(stat: StatAverage, value?: number) {
  if (value == null) return
  stat.total += value
}

export function bumpStat(
  map: Record<string, StatDetail> | Record<number, StatDetail>,
  id: string | number,
  win: boolean
) {
  const key = String(id)
  const target = map as Record<string, StatDetail>
  if (!target[key]) {
    target[key] = { games: 0, win: 0 }
  }

  target[key].games++
  target[key].win ??= 0
  if (win) target[key].win++
}
