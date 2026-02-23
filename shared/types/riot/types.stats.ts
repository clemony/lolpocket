import type { ChampionMastery, Identifier } from ".."

export interface ChampionStats {
  championId: number
  championName: string
  gamePatches: number[]
  games: number
  loss: number
  win: number

  puuid?: string
  assists?: StatAverage
  deaths?: StatAverage
  kda?: number
  kills?: StatAverage
  kp?: StatAverage
  lastAccessedAt?: number
  matchIds?: string[]
  winrate?: number

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
export type ChampionStatsAndMastery = Partial<ChampionStats> & ChampionMastery

export interface PlayerChampionRoleStats {
  mostPlayed?: string
  stats: Record<string, StatDetail>
}

export interface StatDetail {
  avgTimestamp?: number
  games: number
  pickrate?: number
  win?: number
  loss?: number
  winrate?: number
}

export type OrderedStatEntry = [string, StatDetail]
export type OrderedTimedStatEntry = [number, StatDetail]
export type OrderedChampionEntry = [number, PairedChampionStat]

export interface PairedChampionStat extends StatDetail {
  championId: number
  championName: string
  delta: number
  synergy: number
}

export type PairedChampionStatGroup = Record<number, PairedChampionStat>

export interface StatAverage {
  average: number
  total: number
}

export interface ItemSetStat extends StatDetail {
  items: number[]
}

export interface AllyStatDetail extends Identifier, StatDetail {
  champions: Record<number, PairedChampionStat>
  delta: number
  synergy: number
}

export interface ChampionRuneStats {
  keystone: Record<number, StatDetail>
  all: RunePageStats[]
  best: RunePageStats | null
  primary: Record<number, StatDetail>
  secondary: Record<number, StatDetail>
  shards: ShardStats
  usedFallback?: boolean
}

export interface RunePageStats extends StatDetail {
  keystone: number
  primaryPath: string
  primaryRunes: number[]
  secondaryPath: string
  secondaryRunes: number[]
  shards: Array<number | null>
}

export type RunePageKey = string
export type ShardSlot = 0 | 1 | 2
export type ShardStats = Record<ShardSlot, Record<number, StatDetail>>
