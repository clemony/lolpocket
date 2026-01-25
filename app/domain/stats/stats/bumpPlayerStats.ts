const AGGREGATABLE_PLAYER_BLOCKS = [
  'offense',
  'defense',
  'utility',
  'farming',
  'vision',
] as const

type AggregatableBlock = (typeof AGGREGATABLE_PLAYER_BLOCKS)[number]

export function bumpFromPlayerStats(acc: ChampionStats, player: Player) {
  for (const block of AGGREGATABLE_PLAYER_BLOCKS) {
    const source = player[block] as Record<string, number>

    for (const [key, value] of Object.entries(source)) {
      if (!(key in AGGREGATED_STAT_SCHEMA))
        continue
      bumpAverage(acc[key as keyof ChampionStats] as StatAverage, value)
    }
  }
}
export function useBumpPlayerStats() {
  return ref()
}
