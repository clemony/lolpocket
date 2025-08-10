import { getChampionStatsMap, useBasicChampionStats, useBayesianChampionStats } from './index'

export function useSummonerChampions(
  matches: SimplifiedMatchData[],
  options: {
    mode?: 'top' | 'lite' | 'basic' | 'bayesian'
    limit?: number
  },
) {
  const mode = options?.mode || 'basic'
  const limit = options?.limit

  const liteChampionStats = computed(() => {
    const counts: Record<string, number> = {}

    for (const p of matches) {
      const champ = p.championName
      counts[champ] = (counts[champ] || 0) + 1
    }

    const sorted = Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, limit || Infinity)

    return Object.fromEntries(sorted)
  })

  if (mode === 'top') {
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
          Object.keys(liteChampionStats.value).includes(match.championName),
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
    top,
    liteChampionStats, // always available in case something else needs it
  }
}
