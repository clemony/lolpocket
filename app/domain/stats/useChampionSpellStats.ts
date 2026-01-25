export type SpellStat = Record<string | number, StatDetail>

export interface SpellStats {
  best: Record<string, StatDetail>
  pairs: Record<string, StatDetail>
  single: OrderedStatEntry[]
}

export function makeSpellPairKey(a: number, b: number) {
  return a < b ? `${a}-${b}` : `${b}-${a}`
}

export function expandSpellPairRecord(
  pair: Record<string, StatDetail>
): Record<number, StatDetail> {
  const result: Record<number, StatDetail> = {}

  const [[key, stat]] = Object.entries(pair)
  const [a, b] = key.split('-').map(Number)

  result[a] = stat
  result[b] = stat

  return result
}

export function pickBestSpellSet(
  pairs: Record<string, StatDetail>,
  minGames = 5
): Record<number, StatDetail> | null {
  const bestPair = pickBestGeneric(pairs, minGames)
  if (!bestPair)
    return null

  return expandSpellPairRecord(bestPair)
}

export const EMPTY_SPELL_SET: Record<string, StatDetail> = {}

export function useChampionSpellStats(source: Ref<MatchPlayerData[]>) {
  return computed<SpellStats>(() => {
    const single: Record<number, StatDetail> = {}
    const pairs: Record<string, StatDetail> = {}

    const totalMatches = source.value?.length
    if (!totalMatches) {
      return { best: {}, pairs: {}, single: [] }
    }

    for (const match of source.value) {
      const p = match.player
      if (!p || p.win === 'remake')
        continue

      const [s1, s2] = Object.values(p.spells) as [number , number]

      bumpStat(single, s1, p.win)
      bumpStat(single, s2, p.win)

      const pairKey = makeSpellPairKey(s1, s2)
      bumpStat(pairs, pairKey, p.win)
    }

    // winrate + pickrate
    for (const bucket of [single, pairs]) {
      for (const stat of Object.values(bucket)) {
        stat.winrate = Math.round((stat.win / stat.games) * 1000) / 10
        stat.pickrate = Math.round((stat.games / totalMatches) * 1000) / 10
      }
    }

    const best = pickBestSpellSet(pairs)

    return { best, pairs, single: sortEntriesByPickrate(single) }
  })
}
