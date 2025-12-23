export function useAllies(
  puuid: string,
  matches: MaybeRef<MatchData[]>
): Teammate[] {
  const teammateStats = new Map<
    string,
    {
      games: number
      wins: number
      profileIcon: number
      puuid: string
      name: string
      tag: string
    }
  >()

  for (const match of toValue(matches)) {
    const player = match.participants.find((p) => p.puuid === puuid)
    if (!player) continue

    const teammates = match.participants.filter(
      (p) => p.teamId === player.teamId && p.puuid !== puuid
    )

    for (const ally of teammates) {
      const s = teammateStats.get(ally.puuid) || {
        games: 0,
        wins: 0,
        profileIcon: ally.profileIcon,
        puuid: ally.puuid,
        name: ally.riotIdGameName,
        tag: ally.riotIdTagline,
      }

      s.games++
      if (player.win) s.wins++

      teammateStats.set(ally.puuid, s)
    }
  }

  return [...teammateStats.entries()]
    .filter(([_, stats]) => stats.games >= 2)
    .map(([puuid, stats]) => {
      const raw = stats.wins / stats.games
      const wilson = wilsonLowerBound(stats.wins, stats.games)

      return {
        ...stats,
        winrate: Math.round(raw * 100),
        weightedWinrate: Math.round(wilson * 100), // replaced
      }
    })
    .sort((a, b) => b.games - a.games)
}
