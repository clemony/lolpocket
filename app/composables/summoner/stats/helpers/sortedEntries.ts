export function sortedEntriesByWinratePickrate(
  record: Record<number, TimedStatDetail>
): OrderedStatEntry[] {
  const totalGames = Object.values(record).reduce((s, r) => s + r.games, 0)

  return Object.entries(record)
    .map(([k, v]) => [Number(k), v] as OrderedStatEntry)
    .sort(([, a], [, b]) => {
      const aPick = totalGames ? a.games / totalGames : 0
      const bPick = totalGames ? b.games / totalGames : 0
      const aScore = ((a.winrate ?? 0) / 100) * aPick
      const bScore = ((b.winrate ?? 0) / 100) * bPick
      return bScore - aScore
    })
}
