/* const filteredMatches = useFilteredMatches()
const roleStats = useRoles(filteredMatches)
 */
interface RoleStats {
  role: string
  games: number
  wins: number
  winrate: number
  bayesianWinrate: number
  color: string
}


const hexColors = {
  support: '#99c4c8',
  bottom: '#ebcb8b',
  mid: '#be86b5',
  jungle: '#a3be8c',
  top: '#e0746b',
}

export function useMatchRoles(matches: Ref<piniaMatchData[]>): ComputedRef<RoleStats[]> {
  console.log("💠 - useMatchRoles - matches:", matches)
  return computed(() => {
    const roles = ['TOP', 'JUNGLE', 'MIDDLE', 'BOTTOM', 'UTILITY']
    const roleStatsMap = new Map<string, { games: number, wins: number }>()

    for (const match of matches.value) {
      const role = match.teamPosition.toUpperCase()
      if (!roles.includes(role))
        continue

      if (!roleStatsMap.has(role)) {
        roleStatsMap.set(role, { games: 0, wins: 0 })
      }

      const stats = roleStatsMap.get(role)!
      stats.games++
      if (match.win)
        stats.wins++
    }

    const totalGames = [...roleStatsMap.values()].reduce((acc, r) => acc + r.games, 0)
    const totalWins = [...roleStatsMap.values()].reduce((acc, r) => acc + r.wins, 0)
    const globalWinrate = totalWins / Math.max(1, totalGames)
    const m = 500

    return [...roleStatsMap.entries()]
      .map(([role, { games, wins }]) => {
        const normalizedRole = role.toLowerCase() === 'utility' ? 'support' : role.toLowerCase()

        return {
          role: normalizedRole,
          games,
          wins,
          winrate: (wins / games) * 100,
          bayesianWinrate: ((wins + m * globalWinrate) / (games + m)) * 100,
          color: hexColors[normalizedRole as keyof typeof hexColors] || '#ccc',
        }
      })
      .sort((a, b) => b.games - a.games)
  })
}