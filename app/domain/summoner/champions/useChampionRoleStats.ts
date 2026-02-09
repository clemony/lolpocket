//
interface RoleStats {
  games: number
  losses: number
  role: string
  winrate: number
  wins: number
}

export function useChampionRoleStats(
  filteredMatches: MatchData[],
  championName: string
): RoleStats[] {
  const grouped: Record<string, RoleStats> = {}

  const accountPuuid = as().account?.puuid
  if (!accountPuuid) return []

  const player = filteredMatches.map((m) =>
    m.participants.find((p) => p.puuid === accountPuuid)
  )

  for (const match of player) {
    if (!match) continue
    if (champNameById(match.championId) !== championName) continue

    const role = match.role || "UNKNOWN"
    if (!grouped[role]) {
      grouped[role] = {
        games: 0,
        losses: 0,
        role,
        winrate: 0,
        wins: 0,
      }
    }

    grouped[role].games++
    match.win ? grouped[role].wins++ : grouped[role].losses++
  }

  for (const role in grouped) {
    const r = grouped[role]
    if (!r) continue
    r.winrate = (r.wins / r.games) * 100
  }

  return Object.values(grouped)
}
