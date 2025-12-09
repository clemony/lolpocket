export function useAllies(
  puuid: string,
  matches: MaybeRef<MatchData[]>
): MatchTeammatesReturn {
  const loading = ref(false)

  const allies = computedAsync(async () => {
    loading.value = true
    try {
      const teammateStats = new Map<
        string,
        { games: number; wins: number; profileIcon: number }
      >()

      for (const match of toValue(matches)) {
        const player = match.participants.find((p) => p.puuid === puuid)
        if (!player) continue

        const teammates = match.participants.filter(
          (p) => p.teamId === player.teamId && p.puuid !== puuid
        )

        for (const ally of teammates) {
          const s = teammateStats.get(ally.riotIdGameName) || {
            games: 0,
            wins: 0,
            profileIcon: ally.profileIcon,
          }

          s.games++
          if (player.win) s.wins++

          teammateStats.set(ally.riotIdGameName, s)
        }
      }

      return (
        [...teammateStats.entries()]
          .filter(([, stats]) => stats.games >= 2)
          .map(([riotIdGameName, stats]) => {
            const raw = stats.wins / stats.games
            const wilson = wilsonLowerBound(stats.wins, stats.games)

            return {
              riotIdGameName,
              ...stats,
              winrate: Math.round(raw * 100),
              bayesianWinrate: Math.round(wilson * 100), // replaced
            }
          })
          // sort by games first for stable presentation
          .sort((a, b) => b.games - a.games)
      )
    } finally {
      loading.value = false
    }
  }, [])

  const topBayesianTeammates = computed(() =>
    [...allies.value]
      .sort((a, b) => b.bayesianWinrate - a.bayesianWinrate)
      .slice(0, 3)
  )

  return {
    allies: allies.value,
    loading: loading.value,
    topAllies: topBayesianTeammates.value,
  }
}
