export type AccountData = Account & Summoner

export type SummonerInject = ReturnType<typeof useSummonerProvider>

export interface Identifier {
  puuid?: string
  region?: string
  name?: string
  tag?: string
}

export type TrackedQueueId = 400 | 420 | 440 | 0
export type QueueKey = "all" | `${TrackedQueueId}`

export interface QueueStats {
  games: number
  wins: number
  losses: number

  kills: number
  deaths: number
  assists: number
  killParticipation: number
  matchIds: string[]
  gamePatches: number[]
}

export interface PlayerChampionStats {
  puuid: string
  championId: number
  championName: string
  overall?: QueueStats
  queues?: Record<QueueKey, QueueStats>
  lastAccessedAt?: number
}

export interface SharedChampionStats {
  championId: number
  games: number
  wins: number
  losses: number
  gamePatches: number[]
}

export interface ChampionStats extends SharedChampionStats {
  puuid?: string
  championName: string

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

export interface StatDetail {
  games: number
  win?: number
  winrate?: number
  pickrate?: number
}

export interface StatAverage {
  total: number
  average: number
}
export interface StatDetailExtended {
  id: number
  games?: number
  win?: number
  winrate?: number
  name: string
  key?: string
}

export interface TimedStatDetail extends StatDetail {
  avgTimestamp?: number
}

export interface ItemSetStat extends StatDetail {
  items: number[]
}

export type OrderedStatEntry = [string, StatDetail]
export type OrderedTimedStatEntry = [number, TimedStatDetail]

export type SkillLevelStats = Record<
  number, // level (1–18)
  Record<SkillKey, StatDetail>
>

export type SkillKey = "Q" | "W" | "E" | "R"

export interface PlayerChampionMastery {
  puuid: string
  championId: number
  lastPlayed?: number
  level?: number
  totalPoints?: number
  pointsUntilLevel: number
  pointsSinceLevel: number
  lastAccessedAt?: number
}

export interface SummonerMastery {
  puuid: string
  masteryLevels: number
  masteryPoints: number
  updated: number
}

export interface Summoner {
  name: string
  puuid: string
  icon: string
  level: number
  ranked?: {
    solo?: RankedEntry
    flex?: RankedEntry
  }
  region: string
  tag: string
  updatedData: number
  updatedMatch: number
}
export interface RankedEntry {
  division: string
  losses: number
  name: string
  lp: number
  queue: string
  tier: string
  wins: number
}
