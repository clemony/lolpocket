export function bumpTimedStatDetail(
  map: Record<number, TimedStatDetail>,
  itemId: number,
  win: boolean,
  timestamp?: number
) {
  if (!map[itemId]) {
    map[itemId] = { games: 0, win: 0, avgTimestamp: 0 }
  }

  const s = map[itemId]
  s.games++
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
