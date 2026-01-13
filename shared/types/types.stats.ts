export type SummonerInject = ReturnType<typeof useSummonerProvider>

export interface SharedChampionStats {
  championId: number
  championName: string
  games: number
  wins: number
  losses: number
  gamePatches: number[]
}

export interface ChampionStats extends SharedChampionStats {
  puuid?: string
  kills: number | StatAverage
  deaths: number | StatAverage
  assists: number | StatAverage
  kda?: number
  kp: number
  winrate?: number
  matchIds: string[]
  lastAccessedAt?: number
}
export type AggregatedStatsAndMastery = Partial<AggregatedStats> &
  PlayerChampionMastery
export type PlayerChampionRoleStats = {
  mostPlayed?: string
  stats: Record<string, StatDetail>
}

export interface AggregatedStats extends SharedChampionStats {
  kp?: StatAverage
  kda?: number
  winrate?: number

  kills?: StatAverage
  deaths?: StatAverage
  assists?: StatAverage

  role?: PlayerChampionRoleStats

  gameTime?: StatAverage

  totalDamage?: StatAverage
  damagePercentage?: StatAverage

  totalDamageTaken?: StatAverage
  damageTakenPercentage?: StatAverage
  ccDuration?: StatAverage

  totalAllyHealing?: StatAverage
  totalAllyShielding?: StatAverage
  allySaves?: StatAverage

  goldEarned?: StatAverage
  minionsKilled?: StatAverage
  neutralMinionsKilled?: StatAverage
  csPerMin?: number
  turretsKilled?: StatAverage
  objectivesStolen?: StatAverage

  visionScorePerMin?: number
  visionScore?: StatAverage
  controlWardsPlaced?: StatAverage

  killsBefore15?: StatAverage
  assistsBefore15?: StatAverage
  deathsBefore15?: StatAverage

  killingSprees?: StatAverage
  tripleKills?: StatAverage
  doubleKills?: StatAverage
  quadraKills?: StatAverage
  pentaKills?: StatAverage
}
