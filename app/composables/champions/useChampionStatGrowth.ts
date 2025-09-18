export function useChampionStatGrowth(level: Ref<number>) {
  const cs = useChampStore()

  function calcStat(base?: number, growth?: number, lvl: number = level.value) {
    if (base == null)
      return null
    const totalLevelUps = lvl - 1
    if (totalLevelUps === 0 || growth == null)
      return base

    const levelGrowth = 0.0175 * totalLevelUps + 0.7025
    const totalGrowth = growth * totalLevelUps * levelGrowth
    return base + totalGrowth
  }

  function calcAttackSpeed(
    base?: number,
    growth?: number,
    ratio?: number,
    lvl: number = level.value
  ) {
    if (base == null || ratio == null)
      return null
    const totalLevelUps = lvl - 1
    if (totalLevelUps === 0 || growth == null)
      return base

    const levelGrowth = 0.0175 * totalLevelUps + 0.7025
    const bonusAS = growth * totalLevelUps * levelGrowth
    return base + bonusAS * ratio
  }

  function resolveStat(
    stat: { flat?: number, perLevel?: number } | undefined,
    options?: {
      roundTo?: number
      type?: 'attackSpeed' | 'criticalStrikeDamage'
      ratio?: number
      modifier?: number
    }
  ) {
    if (!stat)
      return null

    const { flat, perLevel } = stat
    const type = options?.type ?? 'normal'
    const round = (n: number | null) =>
      n == null
        ? null
        : options?.roundTo
          ? Math.round(n * 10 ** options.roundTo) / 10 ** options.roundTo
          : Math.round(n)

    if (type === 'criticalStrikeDamage') {
      const base = flat ?? null
      const modifier = options?.modifier ?? 1
      if (base == null)
        return null

      const basePct = `${round(base)}%`
      const current
        = modifier === 1
          ? basePct
          : `${basePct} × ${modifier}`

      return {
        current,
        max: null,
        min: null,
      }
    }

    const fn
      = type === 'attackSpeed'
        ? (lvl: number) => calcAttackSpeed(flat, perLevel, options?.ratio, lvl)
        : (lvl: number) => calcStat(flat, perLevel, lvl)

    if (cs.championGridType === 'calculated') {
      return {
        current: round(fn(level.value)),
        max: round(fn(18)),
        min: round(fn(1)),
      }
    }

    const val = cs.championGridType === 'base' ? (flat ?? null) : (perLevel ?? null)
    return {
      current: round(val),
      max: round(val),
      min: round(val),
    }
  }

  return {
    resolveStat,
  }
}
