//
export function useChampions({
  puuid,
  matches,
}: {
  puuid: string
  matches: MatchData[]
}) {
  const liteChampionStats = computed<Record<string, number>>(() => {
    const counts: Record<string, number> = {}

    const playerMatches = matches.map((p) =>
      p.participants.find((p) => p.puuid === puuid)
    )

    for (const p of playerMatches) {
      if (!p) continue
      const champ = champNameById(p.championId)
      if (!champ) continue
      counts[champ] = (counts[champ] || 0) + 1
    }

    const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1])
    return Object.fromEntries(sorted) as Record<string, number>
  })
  const topChampion = computed(() => {
    const champ = Object.keys(liteChampionStats.value)[0]
    if (champ) {
      return {
        key: champ,
        name: champNameByKey(champ),
        splash: getSplash(champ, "centered"),
      }
    }
  })

  return {
    bayesian: () => useBayesianChampionStats(matches, puuid),
    liteChampionStats: liteChampionStats.value,
    top: () => topChampion.value,
  }
}
