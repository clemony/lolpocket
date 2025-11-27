// wilson score lower bound for winrate confidence
export function wilsonLowerBound(wins: number, games: number, z = 1.96) {
  if (games === 0) return 0

  const p = wins / games
  const denom = 1 + (z * z) / games
  const num =
    p +
    (z * z) / (2 * games) -
    z * Math.sqrt((p * (1 - p) + (z * z) / (4 * games)) / games)

  return num / denom
}
