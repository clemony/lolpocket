export interface BayesianChampion {
  assists: number
  deaths: number
  games: number
  gameVersions: string[]
  killParticipation: number
  kills: number
  losses: number
  matchIndexes: number[]
  winrate: number
  wins: number
}

export interface BayesianChampionStats extends ChampionStats {
  avgAssists: number
  avgDeaths: number
  avgKills: number
  avgKp: number
  bayesianWinrate: number
  kda: number
}

export interface ChampionStatsGroup {
  name: string
  splash: string
}

export type UseChampionsReturn = ReturnType<typeof useChampions>

export interface Teammate {
  bayesianWinrate: number
  games: number
  profileIcon: number
  riotIdGameName: string
  winrate: number
  wins: number
}

export interface MatchTeammatesReturn {
  allies: Teammate[]
  loading: boolean
  topAllies: Teammate[]
}
