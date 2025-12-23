export function bumpStat(
  map: Record<number, StatDetail>,
  id: string | number,
  win: boolean
) {
  if (!map[id]) {
    map[id] = { games: 0, win: 0 }
  }

  map[id].games++
  if (win) map[id].win++
}
