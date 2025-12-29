export type SpellStat = Record<string | number, StatDetail>

export type SpellStats = {
  single: OrderedStatEntry[]
  pairs: Record<string, StatDetail>
  best: Record<string, StatDetail>
}

export const EMPTY_SPELL_SET: Record<string, StatDetail> = {}

export const useChampionSpellStats = (source: Ref<MatchPlayerData[]>) =>
  computed<SpellStats>(() => {
    const single: Record<number, StatDetail> = {}
    const pairs: Record<string, StatDetail> = {}

    const totalMatches = source.value.length
    if (!totalMatches) {
      return { single: [], pairs: {}, best: {} }
    }

    for (const match of source.value) {
      const p = match.player
      if (!p) continue

      const [s1, s2] = Object.values(p.spells)

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

    return { single: sortEntriesByPickrate(single), pairs, best }
  })
