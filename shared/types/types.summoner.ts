export type AccountData = Account & Summoner

export type SummonerInject = ReturnType<typeof useSummonerProvider>

export interface Identifier {
  puuid?: string
  region?: string
  name?: string
  tag?: string
}

export interface PlayerChampionMastery {
  lastPlayed: number
  level: number
  points: number
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

export interface PlayerChampionData {
  puuid: string
  championId: number
  championName: string
  overall: QueueStats
  queues: Record<QueueKey, QueueStats>

  lastPlayed: number
  level?: number
  points?: number

  lastAccessedAt?: number
}

export interface ChampionStats {
  championId: number
  championName: string
  assists: number
  deaths: number
  gamePatches: number[]
  games: number
  kp: number
  kills: number
  losses: number
  matchIndexes: number[]
  winrate: number
  wins: number
}

export interface SummonerMastery {
  puuid: string
  totalLevels: number
  totalPoints: number
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
