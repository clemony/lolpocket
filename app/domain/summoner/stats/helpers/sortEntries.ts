//
export function sortTimedByWinratePickrate(
  record: Record<number, StatDetail>
): OrderedTimedStatEntry[] {
  const totalGames = Object.values(record).reduce((s, r) => s + r.games, 0)

  return Object.entries(record)
    .map(([k, v]) => [Number(k), v] as OrderedTimedStatEntry)
    .sort(([, a], [, b]) => {
      const aPick = totalGames ? a.games / totalGames : 0
      const bPick = totalGames ? b.games / totalGames : 0
      const aScore = ((a.winrate ?? 0) / 100) * aPick
      const bScore = ((b.winrate ?? 0) / 100) * bPick
      return bScore - aScore
    })
}

export function sortTimedByWinrate(
  record: Record<number, StatDetail>
): OrderedTimedStatEntry[] {
  return Object.entries(record)
    .map(([k, v]) => [Number(k), v] as OrderedTimedStatEntry)
    .sort(([, a], [, b]) => {
      const aScore = (a.winrate ?? 0) / 100
      const bScore = (b.winrate ?? 0) / 100
      return bScore - aScore
    })
}

export function sortTimedByPickrate(
  record: Record<number, StatDetail>
): OrderedTimedStatEntry[] {
  const totalGames = Object.values(record).reduce((s, r) => s + r.games, 0)

  return Object.entries(record)
    .map(([k, v]) => [Number(k), v] as OrderedTimedStatEntry)
    .sort(([, a], [, b]) => {
      const aPick = totalGames ? a.games / totalGames : 0
      const bPick = totalGames ? b.games / totalGames : 0
      return bPick - aPick
    })
}

export function sortTimedByTime(
  record: OrderedTimedStatEntry[]
): OrderedTimedStatEntry[] {
  return record.sort(([, a], [, b]) => {
    return (a.avgTimestamp ?? 0) - (b.avgTimestamp ?? 0)
  })
}

export function sortEntriesByPickrate(
  record: Record<string, StatDetail>
): OrderedStatEntry[] {
  const totalGames = Object.values(record).reduce((s, r) => s + r.games, 0)

  return Object.entries(record)
    .map(([k, v]) => [k, v] as OrderedStatEntry)
    .sort(([, a], [, b]) => {
      const aPick = totalGames ? a.games / totalGames : 0
      const bPick = totalGames ? b.games / totalGames : 0
      return bPick - aPick
    })
}
