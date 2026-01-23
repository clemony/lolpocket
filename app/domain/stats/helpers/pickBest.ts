export function pickBest<K extends string | number>(
  stats: Record<K, StatDetail>,
  minGames = 5
): Record<K, StatDetail> | null {
  return pickBestGeneric(stats, minGames)
}

export function pickBestGeneric<K extends string | number>(
  stats: Record<K, StatDetail>,
  minGames = 5
): Record<K, StatDetail> | null {
  let bestKey: K | null = null
  let bestStat: StatDetail | null = null
  let bestScore = -Infinity

  const entries = Object.entries(stats) as [K, StatDetail][]

  // 1️⃣ guarded pass
  for (const [key, s] of entries) {
    if (s.games < minGames)
      continue

    const score = s.winrate ?? s.win / s.games
    if (score > bestScore) {
      bestScore = score
      bestKey = key
      bestStat = s
    }
  }

  // 2️⃣ fallback
  if (!bestStat) {
    for (const [key, s] of entries) {
      const score = s.winrate ?? s.win / s.games
      if (score > bestScore) {
        bestScore = score
        bestKey = key
        bestStat = s
      }
    }
  }

  if (!bestKey || !bestStat)
    return null

  return {
    [bestKey]: bestStat,
  } as Record<K, StatDetail>
}
