import { getChampionStatsMap, useBasicChampionStats, useBayesianChampionStats } from './index'

export function useChampions(
  puuid: string,
  matches: MatchData[],
  championName?: string,
) {
  const player = matches.map(p => p.participants.find(p => p.puuid == puuid))

  const liteChampionStats = computed(() => {
    const counts: Record<string, number> = {}

    for (const p of player) {
      const champ = ix().champNameById(p.championId)
      counts[champ] = (counts[champ] || 0) + 1
    }

    const sorted = Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
    return Object.fromEntries(sorted)
  })

  function getTop() {
    const ix = useIndexStore()
    const champ = Object.keys(liteChampionStats.value)[0] // fix here too
    return {
      name: ix.champNameByKey(champ),
      splash: getSplash(champ, 'centered'),

    }
  }

  const filteredMatches = computed(() =>
    matches.filter(match =>
      Object.keys(liteChampionStats.value).includes(ix().champNameById(match.participants[puuid])),
    ),
  )

  return {
    basic: useBasicChampionStats(filteredMatches.value),
    top: () => getTop(),
    singleStat: (championName: string) => useSingleChampionStats(filteredMatches.value, championName),
    bayesian: () => useBayesianChampionStats(filteredMatches.value),
    singleBayesian: (championName: string) => useSingleBayesianChampionStats(filteredMatches.value, championName),
    liteChampionStats, // always available in case something else needs it
  }
}
