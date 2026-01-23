export function bumpTimedStatDetail(
  map: Record<number, TimedStatDetail>,
  itemId: number,
  win: boolean,
  timestamp?: number
) {
  if (!map[itemId]) {
    map[itemId] = { avgTimestamp: 0, games: 0, win: 0 }
  }

  const s = map[itemId]
  s.games++
  if (win)
    s.win++

  if (timestamp != null) {
    s.avgTimestamp
      = ((s.avgTimestamp ?? 0) * (s.games - 1) + timestamp) / s.games
  }
}

export function bumpAverage(stat: StatAverage, value?: number) {
  if (value == null)
    return
  stat.total += value
}

export function bumpStat(
  map: Record<number, StatDetail>,
  id: string | number,
  win: boolean
) {
  if (!map[id]) {
    map[id] = { games: 0, win: 0 }
  }

  map[id].games++
  if (win)
    map[id].win++
}
