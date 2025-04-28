import { storeToRefs } from 'pinia'

interface Teammate {
  riotIdGameName: string
  games: number
  wins: number
  profileIcon: number
  winrate: number
  bayesianWinrate: number
}

export function useRepeatedTeammates(currentName: string, puuid: string, options?: { delayUntilReady?: Ref<boolean> }) {
  const ss = useSummonerStore()

  const matches = computed (() => ss.getSummoner(puuid).simplifiedMatches)
  const loading = ref(false)

  const repeatedTeammates = computedAsync(async () => {
    loading.value = true

    try {
      if (options?.delayUntilReady)
        await until(options.delayUntilReady).toBe(true)

      const teammateStats = new Map<string, { games: number, wins: number, profileIcon: number }>()

      for (const match of matches.value) {
        const { participants, win } = match
        if (!participants)
          continue

        const hasPlayer = participants.some(p => p.riotIdGameName === currentName)
        if (!hasPlayer)
          continue

        for (const teammate of participants) {
          if (teammate.riotIdGameName === currentName)
            continue

          const existing = teammateStats.get(teammate.riotIdGameName) || {
            games: 0,
            wins: 0,
            profileIcon: teammate.profileIcon,
          }

          existing.games++
          if (win)
            existing.wins++

          teammateStats.set(teammate.riotIdGameName, existing)
        }
      }

      const priorWinrate = 0.5

      return [...teammateStats.entries()]
        .filter(([, stats]) => stats.games >= 2)
        .map(([riotIdGameName, stats]) => {
          const rawWinrate = stats.wins / stats.games
          const confidence = Math.min(1, stats.games / 10)
          const bayesianWinrate = (confidence * rawWinrate + (1 - confidence) * priorWinrate) * 100

          return {
            riotIdGameName,
            ...stats,
            winrate: Math.round(rawWinrate * 100),
            bayesianWinrate: Math.round(bayesianWinrate),
          }
        })
        .sort((a, b) => b.games - a.games)
    }
    finally {
      loading.value = false
    }
  }, [])

  const topBayesianTeammates = computed(() =>
    [...repeatedTeammates.value].sort((a, b) => b.bayesianWinrate - a.bayesianWinrate).slice(0, 3),
  )

  return {
    loading,
    repeatedTeammates,
    topBayesianTeammates,
  }
}