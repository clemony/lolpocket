import { bumpAverage } from "~/domain/stats/helpers/bumpValues"
import { AGGREGATED_STAT_SCHEMA } from "~/domain/stats/stats/aggregatedStatSchema"

//
const CORE_PARTICIPANT_STATS = new Set(["assists", "deaths", "kills", "kp"])

const AGGREGATABLE_PLAYER_BLOCKS = [
  "offense",
  "defense",
  "utility",
  "farming",
  "vision",
] as const

type AggregatableBlock = (typeof AGGREGATABLE_PLAYER_BLOCKS)[number]

export function bumpFromPlayerStats(acc: ChampionStats, player: Player) {
  const bumped = new Set<string>()

  function bumpSchemaStat(key: string, value?: number) {
    if (CORE_PARTICIPANT_STATS.has(key)) return
    if (!(key in AGGREGATED_STAT_SCHEMA)) return
    if (bumped.has(key)) return

    const stat = acc[key as keyof ChampionStats] as StatAverage | undefined
    if (!stat) return

    bumpAverage(stat, value)
    bumped.add(key)
  }

  for (const [key, value] of Object.entries(player.stats ?? {})) {
    bumpSchemaStat(key, typeof value === "number" ? value : undefined)
  }

  bumpSchemaStat("killingSprees", player.stats?.sprees)
  bumpSchemaStat(
    "neutralMinionsKilled",
    (player.stats?.allyJungleMinions ?? 0) +
      (player.stats?.enemyJungleMinions ?? 0)
  )

  for (const block of AGGREGATABLE_PLAYER_BLOCKS) {
    const source =
      (player as unknown as Record<AggregatableBlock, Record<string, number>>)[
        block
      ] ?? {}

    for (const [key, value] of Object.entries(source)) {
      bumpSchemaStat(key, value)
    }
  }
}
export function useBumpPlayerStats() {
  return ref()
}
