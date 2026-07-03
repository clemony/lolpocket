import { matchPositionKey } from "~/domain/summoner/stats/helpers/normalizePosition"
import { teamPositions } from "~~/shared/constants/misc/positions"

//
export interface PositionStats {
  label: string
  games: number
  position: string
  winrate: number
  wins: number
  disabled: boolean
  icon: string
}

export function useMatchPositions(
  puuid: string,
  matches: MatchData[]
): PositionStats[] {
  if (!matches) return []

  const positionStatsMap = new Map<string, { games: number; wins: number }>()

  for (const match of toValue(matches)) {
    const player = match.participants.find((p) => p.puuid === puuid)
    if (!player) continue
    const position = player.role
    if (!matchPositionKey.includes(position)) continue

    if (!positionStatsMap.has(position)) {
      positionStatsMap.set(position, { games: 0, wins: 0 })
    }

    const stats = positionStatsMap.get(position)!
    stats.games++
    if (player.win) stats.wins++
  }

  const positions = computed(() => {
    return matchPositionKey.map((position) => {
      const { games = 0, wins = 0 } = positionStatsMap.get(position) ?? {}

      return {
        label: position,
        games,
        position: position.replace("middle", "mid").replace("bottom", "bot"),
        winrate: games === 0 ? 0 : (wins / games) * 100,
        wins,
        icon: `i-lp-${position.toLowerCase().replace("middle", "mid").replace("bottom", "bot")}`,
        disabled: position === "all" ? false : !games,
      }
    })
  })

  return positions.value
}
