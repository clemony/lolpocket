export function sortRecordByWinrateAndPickrate<T extends StatDetail>(
  record: Record<number, T>
): Record<number, T> {
  const totalGames = Object.values(record).reduce((sum, s) => sum + s.games, 0)

  if (!totalGames) return record

  return Object.fromEntries(
    Object.entries(record).sort(([, a], [, b]) => {
      const aPick = a.games / totalGames
      const bPick = b.games / totalGames

      const aScore = ((a.winrate ?? 0) / 100) * aPick
      const bScore = ((b.winrate ?? 0) / 100) * bPick

      return bScore - aScore
    })
  )
}
