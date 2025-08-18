import { getChampionStatsMap, useBasicChampionStats, useBayesianChampionStats } from './index'

export function useSummonerChampions(
  puuid: string,
  matches: MatchData[],
  options?: {
    mode?: 'top' | 'lite' | 'basic' | 'bayesian'
    limit?: number
  },
) {
  const mode = options?.mode || 'basic'
  const limit = options?.limit

  const player = matches.map(p => p.participants.find(p => p.puuid == puuid))

  const liteChampionStats = computed(() => {
    const counts: Record<string, number> = {}

    for (const p of player) {
      const champ = ix().champNameById(p.championId)
      counts[champ] = (counts[champ] || 0) + 1
    }

    const sorted = Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, limit || Infinity)

    return Object.fromEntries(sorted)
  })

  function getTop() {
    const ix = useIndexStore()
    const champ = Object.keys(liteChampionStats.value)[0] // fix here too
    return {
      topChampion: {
        name: ix.champNameByKey(champ),
        splash: getSplash(champ, 'centered'),
      },
    }
  }

  if (mode === 'lite') {
    return {
      data: liteChampionStats,
    }
  }

  const filteredMatches = computed(() =>
    limit
      ? matches.filter(match =>
          Object.keys(liteChampionStats.value).includes(ix().champNameById(match.participants[as().userAccount.riot.puuid])),
        )
      : matches,
  )

  const data = computed(() => {
    if (mode === 'basic') {
      return useBasicChampionStats(filteredMatches.value)
    }
    if (mode === 'bayesian') {
      return useBayesianChampionStats(filteredMatches.value)
    }
    return {}
  })

  return {
    data,
    getTop,
    liteChampionStats, // always available in case something else needs it
  }
}
