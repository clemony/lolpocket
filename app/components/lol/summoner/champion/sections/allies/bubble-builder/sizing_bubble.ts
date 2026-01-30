export function sizeFromMax(
  games: number,
  maxGames: number,
  minSize = 30,
  maxSize = 60
) {
  if (maxGames <= 0) return minSize
  return minSize + (games / maxGames) * (maxSize - minSize)
}

export function normalizeFromMax(games: number, maxGames: number) {
  if (maxGames <= 0) return 0
  return games / maxGames // 0 → 1
}
