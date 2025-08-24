import { getChampionStatsMap, useBasicChampionStats, useBayesianChampionStats } from './index'

export interface ChampionStatsGroup {
  name: string
  splash: string
}

export interface UseChampionsReturn {
  stats: () => ChampionStats[]
  top: () => TopChampion
  singleStat: (championName: string) => ChampionStats | null
  bayesian: () => BayesianChampionStats[]
  singleBayesian: (championName: string) => BayesianChampionStats | null
  liteChampionStats: Record<string, number>
}

export function useChampions(
  puuid: string,
  matches: MatchData[],
  championName?: string,
): UseChampionsReturn {
  const player = matches.map(p => p.participants.find(p => p.puuid == puuid))

  const liteChampionStats = computed<Record<string, number>>(() => {
    const counts: Record<string, number> = {}

    for (const p of player) {
      const champ = ix().champNameById(p.championId)
      counts[champ] = (counts[champ] || 0) + 1
    }

    const sorted = Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
    return Object.fromEntries(sorted) as Record<string, number>
  })

  const topChampion = computed (() => {
    const ix = useIndexStore()
    const champ = Object.keys(liteChampionStats.value)[0]
    return {
      name: ix.champNameByKey(champ),
      splash: getSplash(champ, 'centered'),

    }
  })

  const filteredMatches = computed<MatchData[]>(() =>
    matches.filter(match =>
      Object.keys(liteChampionStats.value).includes(ix().champNameById(match.participants[puuid])),
    ),
  )

  return {
    stats: () => useBasicChampionStats(matches),
    top: () => topChampion.value,
    singleStat: (championName: string) => useSingleChampionStats(matches, championName),
    bayesian: () => useBayesianChampionStats(matches),
    singleBayesian: (championName: string) => useSingleBayesianChampionStats(matches, championName),
    liteChampionStats: liteChampionStats.value,
  }
}
