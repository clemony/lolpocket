export function useChampionStatGrowth() {
  const cs = useChampStore()

  const totalLevelUps = computed(() => cs.championGridLevel - 1)

  function getStat(base?: number, growth?: number) {
    if (base == null)
      return null
    if (totalLevelUps.value === 0 || growth == null)
      return base

    const levelGrowth = 0.0175 * totalLevelUps.value + 0.7025
    const totalGrowth = growth * totalLevelUps.value * levelGrowth
    return base + totalGrowth
  }

  function getAttackSpeed(base?: number, growth?: number, ratio?: number) {
    if (base == null || ratio == null)
      return null
    if (totalLevelUps.value === 0 || growth == null)
      return base

    const levelGrowth = 0.0175 * totalLevelUps.value + 0.7025
    const bonusAS = growth * totalLevelUps.value * levelGrowth
    return base + bonusAS * ratio
  }

  function resolveStat(
    stat: { flat?: number, perLevel?: number } | undefined,
    options?: {
      roundTo?: number
      type?: 'attackSpeed'
      ratio?: number
    },
  ) {
    if (!stat)
      return null
    const { flat, perLevel } = stat
    const type = options?.type ?? 'normal'

    let result: number | null = null

    if (cs.championGridType === 'calculated') {
      if (type === 'attackSpeed') {
        result = getAttackSpeed(flat, perLevel, options?.ratio)
      }
      else {
        result = getStat(flat, perLevel)
      }
    }
    else {
      result = cs.championGridType === 'base' ? flat ?? null : perLevel ?? null
    }

    if (result == null)
      return null
    return options?.roundTo
      ? Math.round(result * 10 ** options.roundTo) / 10 ** options.roundTo
      : Math.round(result)
  }

  return {
    resolveStat,
  }
}