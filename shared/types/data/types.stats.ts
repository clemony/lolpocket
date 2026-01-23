export interface SharedChampionStats {
  championId: number
  championName: string
  gamePatches: number[]
  games: number
  losses: number
  wins: number
}

export interface ChampionStats extends SharedChampionStats {
  puuid?: string
  assists: number | StatAverage
  deaths: number | StatAverage
  kda?: number
  kills: number | StatAverage
  kp: number
  lastAccessedAt?: number
  matchIds: string[]
  winrate?: number
}
export type AggregatedStatsAndMastery = Partial<AggregatedStats>
  & PlayerChampionMastery
export interface PlayerChampionRoleStats {
  mostPlayed?: string
  stats: Record<string, StatDetail>
}

export interface AggregatedStats extends SharedChampionStats {
  kda?: number
  kp?: StatAverage
  winrate?: number

  assists?: StatAverage
  deaths?: StatAverage
  kills?: StatAverage

  role?: PlayerChampionRoleStats

  gameTime?: StatAverage

  damagePercentage?: StatAverage
  totalDamage?: StatAverage

  ccDuration?: StatAverage
  damageTakenPercentage?: StatAverage
  totalDamageTaken?: StatAverage

  allySaves?: StatAverage
  totalAllyHealing?: StatAverage
  totalAllyShielding?: StatAverage

  csPerMin?: number
  goldEarned?: StatAverage
  minionsKilled?: StatAverage
  neutralMinionsKilled?: StatAverage
  objectivesStolen?: StatAverage
  turretsKilled?: StatAverage

  controlWardsPlaced?: StatAverage
  visionScore?: StatAverage
  visionScorePerMin?: number

  assistsBefore15?: StatAverage
  deathsBefore15?: StatAverage
  killsBefore15?: StatAverage

  doubleKills?: StatAverage
  killingSprees?: StatAverage
  pentaKills?: StatAverage
  quadraKills?: StatAverage
  tripleKills?: StatAverage
}
