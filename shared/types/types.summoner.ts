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
export interface ChampionStats {
  puuid?: string
  championId: number
  championName: string

  games: number
  wins: number
  losses: number

  kills: number
  deaths: number
  assists: number
  kp: number

  winrate?: number

  matchIds: string[]
  gamePatches: number[]

  lastAccessedAt?: number
}

export type AggregatedStats = Partial<ChampionStats> &
  Partial<PlayerChampionMastery> &
  Partial<Multikills> &
  Partial<PlayerOffense> &
  Partial<PlayerUtility> &
  Partial<PlayerDefense> &
  Partial<PlayerFarming> &
  Partial<PlayerVision> & {
    killsBefore15?: number
    assistsBefore15?: number
    deathsBefore15?: number
  }

export interface StatDetail {
  games: number
  win: number
  winrate?: number
  pickrate?: number
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

export type OrderedStatEntry = [number, TimedStatDetail]

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
