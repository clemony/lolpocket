import {
  getChampionStatsMap,
  useBasicChampionStats,
  useBayesianChampionStats,
} from './index'

export interface ChampionStatsGroup {
  name: string
  splash: string
}

export interface UseChampionOptions {
  champion?: string
  filtered?: boolean
}
export interface UseChampionsReturn {
  bayesian: () => BayesianChampionStats[]
  liteChampionStats: Record<string, number>
  singleBayesian: (championName: string) => BayesianChampionStats | null
  singleStat: (championName: string) => ChampionStats | null
  stats: () => ChampionStats[]
  top: () => TopChampion
}

export function useChampions(
  puuid: string,
  matches: MatchData[],
  championName?: string
): UseChampionsReturn {
  const liteChampionStats = computed<Record<string, number>>(() => {
    const counts: Record<string, number> = {}

    const playerMatches = matches.map(p =>
      p.participants.find(p => p.puuid === puuid)
    )

    for (const p of playerMatches) {
      const champ = ix().champNameById(p.championId)
      counts[champ] = (counts[champ] || 0) + 1
    }

    const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1])
    return Object.fromEntries(sorted) as Record<string, number>
  })
  const topChampion = computed(() => {
    const champ = Object.keys(liteChampionStats.value)[0]
    return {
      name: ix().champNameByKey(champ),
      splash: getSplash(champ, 'centered'),
    }
  })

  const filteredMatches = computed<MatchData[]>(() =>
    matches.filter(match =>
      Object.keys(liteChampionStats.value).includes(
        ix().champNameById(match.participants[puuid])
      )
    )
  )

  return {
    bayesian: () => useBayesianChampionStats(matches, puuid),
    liteChampionStats: liteChampionStats.value,
    singleBayesian: (championName: string) =>
      useSingleBayesianChampionStats(matches, championName, puuid),
    singleStat: (championName: string) =>
      useSingleChampionStats(matches, championName, puuid),
    stats: () => useBasicChampionStats(matches, puuid),
    top: () => topChampion.value,
  }
}
