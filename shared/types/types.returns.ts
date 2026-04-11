import type { MatchData, RankedEntry } from "."

export interface MatchDataReturn {
  end?: boolean
  matchData: MatchData[]
  newestIds?: string[]
  nextIndex: number
  startIndex?: number
}

export interface AccountReturn {
  puuid: string
  gameName: string
  tagLine: string
}

export interface RegionReturn {
  puuid: string
  game: string
  region: string
}

export interface MasteryReturn {
  puuid: string
  championId: number
  championLevel: number
  championPoints: number
  championPointsSinceLastLevel: number
  championPointsUntilNextLevel: number
  championSeasonMilestone: number
  chestGranted: boolean
  lastPlayTime: number
  markRequiredForNextLevel: number
  milestoneGrades: string[]
  nextSeasonMilestone: NextSeasonMilestonesDto
  tokensEarned: number
}

export interface NextSeasonMilestonesDto {
  bonus: boolean
  requireGradeCounts: object
  rewardConfig: RewardConfigDto
  rewardMarks: number
}

export interface RewardConfigDto {
  maximumReward: number
  rewardType: string
  rewardValue: string
}

export interface SummonerReturn {
  puuid: string
  profileIconId: number
  revisionDate: string
  summonerLevel: number
}

export interface RankedEntryResponse {
  leagueId: string
  leaguePoints: number
  losses: number
  queueType: string
  rank: string
  tier: string
  wins: number
}

export interface RankedResponse {
  flex?: RankedEntry
  solo?: RankedEntry
}
