export interface RoleStats {
  name: string
  games: number
  role: string
  winrate: number
  wins: number
}

export function useMatchRoles(
  puuid: string,
  matches: MatchData[]
): RoleStats[] {
  if (!matches) return

  const roleStatsMap = new Map<string, { games: number, wins: number }>()

  for (const match of toValue(matches)) {
    const player = match.participants.find(p => p.puuid === puuid)
    const role = player.role
    if (!roleKey.includes(role)) continue

    if (!roleStatsMap.has(role)) {
      roleStatsMap.set(role, { games: 0, wins: 0 })
    }

    const stats = roleStatsMap.get(role)!
    stats.games++
    if (player.win) stats.wins++
  }

  const roles = computed(() => {
    return roleKey.map((role) => {
      const { games = 0, wins = 0 } = roleStatsMap.get(role) ?? {}

      return {
        name: role,
        games,
        role,
        winrate: games === 0 ? 0 : (wins / games) * 100,
        wins,
      }
    })
  })
  return roles.value
}
