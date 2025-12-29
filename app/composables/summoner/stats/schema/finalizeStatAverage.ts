export function finalizeStatAverage(
  stat: StatAverage,
  games: number,
  rule: { decimals?: number; scale?: number } = {}
) {
  if (!games) {
    stat.average = 0
    return 0
  }

  const scale = rule.scale ?? 1
  const decimals = rule.decimals ?? 1
  const factor = 10 ** decimals

  stat.average = Math.round((stat.total / games) * scale * factor) / factor

  return stat.average
}
