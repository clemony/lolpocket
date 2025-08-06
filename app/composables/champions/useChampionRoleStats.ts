interface RoleStats {
  role: string
  games: number
  wins: number
  losses: number
  winrate: number
}

export function useChampionRoleStats(
  matches: SimplifiedMatchData[],
  championName: string,
): RoleStats[] {
  const grouped: Record<string, RoleStats> = {}

  for (const match of matches) {
    if (match.championName !== championName)
      continue

    const role = match.teamPosition || 'UNKNOWN'
    if (!grouped[role]) {
      grouped[role] = {
        role,
        games: 0,
        wins: 0,
        losses: 0,
        winrate: 0,
      }
    }

    grouped[role].games++
    match.win ? grouped[role].wins++ : grouped[role].losses++
  }

  for (const role in grouped) {
    const r = grouped[role]
    r.winrate = (r.wins / r.games) * 100
  }

  return Object.values(grouped)
}