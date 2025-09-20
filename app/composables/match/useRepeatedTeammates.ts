import type { StoredTeammate } from '~~/stores/summonerStore'
import { storeToRefs } from 'pinia'

export interface Teammate extends StoredTeammate {
  bayesianWinrate: number
  winrate: number
}

export function useRepeatedTeammates(puuid: string, matches: MatchData[]) {
  const loading = ref(false)

  const repeatedTeammates = computedAsync(async () => {
    loading.value = true
    try {
      const teammateStats = new Map<
        string,
        { games: number, wins: number, profileIcon: number }
      >()

      for (const match of matches) {
        const player = match.participants.find(p => p.puuid === puuid)
        if (!player)
          continue

        const allies = match.participants.filter(
          p => p.teamId === player.teamId && p.puuid !== puuid
        )

        for (const ally of allies) {
          const existing = teammateStats.get(ally.riotIdGameName) || {
            games: 0,
            profileIcon: ally.profileIcon,
            wins: 0,
          }

          existing.games++
          if (player.win)
            existing.wins++

          teammateStats.set(ally.riotIdGameName, existing)
        }
      }

      const priorWinrate = 0.5

      return [...teammateStats.entries()]
        .filter(([, stats]) => stats.games >= 2)
        .map(([riotIdGameName, stats]) => {
          const rawWinrate = stats.wins / stats.games
          const confidence = Math.min(1, stats.games / 10)
          const bayesianWinrate
            = (confidence * rawWinrate + (1 - confidence) * priorWinrate) * 100

          return {
            riotIdGameName,
            ...stats,
            bayesianWinrate: Math.round(bayesianWinrate),
            winrate: Math.round(rawWinrate * 100),
          }
        })
        .sort((a, b) => b.games - a.games)
    }
    finally {
      loading.value = false
    }
  }, [])

  const topBayesianTeammates = computed(() =>
    [...repeatedTeammates.value]
      .sort((a, b) => b.bayesianWinrate - a.bayesianWinrate)
      .slice(0, 3)
  )

  return {
    loading,
    repeatedTeammates,
    topBayesianTeammates,
  }
}
