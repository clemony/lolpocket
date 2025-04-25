/* const filteredMatches = useFilteredMatches()
const roleStats = useRoles(filteredMatches)
 */
interface RoleStats {
  role: string
  displayName: string
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
  return computed(() => {
    const roles = ['TOP', 'JUNGLE', 'MIDDLE', 'BOTTOM', 'UTILITY']
    const roleStatsMap = new Map<string, { games: number, wins: number }>()

    let allGames = 0
    let allWins = 0

    for (const match of matches.value) {
      const role = match.teamPosition.toUpperCase()
      if (!roles.includes(role)) continue

      allGames++
      if (match.win) allWins++

      if (!roleStatsMap.has(role)) {
        roleStatsMap.set(role, { games: 0, wins: 0 })
      }

      const stats = roleStatsMap.get(role)!
      stats.games++
      if (match.win) stats.wins++
    }

    roleStatsMap.set('ALL', { games: allGames, wins: allWins })

    const globalWinrate = allGames === 0 ? 0 : allWins / allGames
    const m = 500

const formatDisplay = (role: string) => {
  switch (role) {
    case 'UTILITY': return 'Support'
    case 'MIDDLE': return 'Mid'
    case 'BOTTOM': return 'Bot'
    case 'ALL': return 'All'
    default: return role.charAt(0) + role.slice(1).toLowerCase()
  }
}

    return ['ALL', ...roles].map(role => {
      const { games = 0, wins = 0 } = roleStatsMap.get(role) ?? {}
      const displayName = formatDisplay(role)

      return {
        role,
        displayName,
        games,
        wins,
        winrate: games === 0 ? 0 : (wins / games) * 100,
        bayesianWinrate: ((wins + m * globalWinrate) / (games + m)) * 100,
        color: hexColors[displayName.toLowerCase() as keyof typeof hexColors] || '#ccc',
      }
    })
  })
}