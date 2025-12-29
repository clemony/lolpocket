export function makeSpellPairKey(a: number, b: number) {
  return a < b ? `${a}-${b}` : `${b}-${a}`
}

export function expandSpellPairRecord(
  pair: Record<string, StatDetail>
): Record<number, StatDetail> {
  const result: Record<number, StatDetail> = {}

  const [[key, stat]] = Object.entries(pair)
  const [a, b] = key.split("-").map(Number)

  result[a] = stat
  result[b] = stat

  return result
}

export function pickBestSpellSet(
  pairs: Record<string, StatDetail>,
  minGames = 5
): Record<number, StatDetail> | null {
  const bestPair = pickBestGeneric(pairs, minGames)
  if (!bestPair) return null

  return expandSpellPairRecord(bestPair)
}
