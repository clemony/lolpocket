export function gameAvgFormat(value: number, games: number) {
  return value && games ? Math.round((value / games) * 10) / 10 : 0
}

export function percentGameAvgFormat(value: number, games: number) {
  return value && games ? `${Math.round((value / games) * 1000) / 10}%` : 0
}
