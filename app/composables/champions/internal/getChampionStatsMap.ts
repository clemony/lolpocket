export interface ChampionStats {
  name: string
  id: number
  games: number
  wins: number
  losses: number
  winrate: number
  kills: number
  deaths: number
  assists: number
  killParticipation: number
  matchIndexes: number[]
  gamePatches: string[]
}

export interface BayesianChampion {
  games: number
  wins: number
  losses: number
  winrate: number
  kills: number
  deaths: number
  assists: number
  killParticipation: number
  matchIndexes: number[]
  gameVersions: string[]
}

export interface BayesianChampionStats extends ChampionStats {
  bayesianWinrate: number
  kda: number
  avgKills: number
  avgDeaths: number
  avgAssists: number
  avgKp: number
}

export function getChampionStatsMap(
  matches: MatchData[]
): Map<string, ChampionStats> {
  const map = new Map<string, ChampionStats>()

  const player = matches.map(m =>
    m.participants.find(p => p.puuid == as().account.puuid)
  )

  player.forEach((match, index) => {
    const champ = ix().champNameById(match.championId)
    if (!champ)
      return

    if (!map.has(champ)) {
      map.set(champ, {
        name: champ,
        id: match.championId,
        games: 0,
        wins: 0,
        losses: 0,
        winrate: 0,
        kills: 0,
        deaths: 0,
        assists: 0,
        killParticipation: 0,
        matchIndexes: [],
        gamePatches: [],
      })
    }

    const stats = map.get(champ)!
    stats.games++
    match.win ? stats.wins++ : stats.losses++
    stats.kills += match.kills
    stats.deaths += match.deaths
    stats.assists += match.assists
    stats.killParticipation += match.challenges.killParticipation
    stats.matchIndexes.push(index)
    stats.gamePatches.push(matches[index].gamePatch.toString())
    stats.winrate = (stats.wins / stats.games) * 100
  })

  return map
}

export function useBasicChampionStats(matches: MatchData[]) {
  const stats = getChampionStatsMap(matches)
  return Array.from(stats.values())
}

export function useBayesianChampionStats(matches: MatchData[]) {
  const ix = useIndexStore()

  const statsList = useBasicChampionStats(matches)
  const totalGames = statsList.reduce((sum, s) => sum + s.games, 0)
  const globalWinrate
    = statsList.reduce((sum, s) => sum + s.wins, 0) / totalGames || 0

  return statsList
    .map((stats) => {
      const adjustedWeight = stats.games ** 0.7
      const confidence = adjustedWeight / (adjustedWeight + 15)
      const bayesianWinrate
        = ((1 - confidence) * globalWinrate
          + confidence * (stats.wins / stats.games))
        * 100

      return {
        ...stats,
        bayesianWinrate,
        kda: Number(
          ((stats.kills + stats.assists) / Math.max(1, stats.deaths)).toFixed(2)
        ),
        avgKills: Number((stats.kills / stats.games).toFixed(2)),
        avgDeaths: Number((stats.deaths / stats.games).toFixed(2)),
        avgAssists: Number((stats.assists / stats.games).toFixed(2)),
        avgKp: Number(
          ((stats.killParticipation / stats.games) * 100).toFixed(2)
        ),
      }
    })
    .sort((a, b) => b.bayesianWinrate - a.bayesianWinrate)
}
