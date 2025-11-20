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
  championPointsUntilNextLevel: number
  chestGranted: boolean
  championId: number
  lastPlayTime: number
  championLevel: number
  championPoints: number
  championPointsSinceLastLevel: number
  markRequiredForNextLevel: number
  championSeasonMilestone: number
  nextSeasonMilestone: NextSeasonMilestonesDto
  tokensEarned: number
  milestoneGrades: string[]
}

export interface NextSeasonMilestonesDto {
  requireGradeCounts: object
  rewardMarks: number
  bonus: boolean
  rewardConfig: RewardConfigDto
}

export interface RewardConfigDto {
  rewardValue: string
  rewardType: string
  maximumReward: number
}

export interface SummonerReturn {
  profileIconId: number
  revisionDate: string
  puuid: string
  summonerLevel: number
}

export interface RankedEntryResponse {
  losses: number
  leaguePoints: number
  queueType: string
  tier: string
  wins: number
  leagueId: string
  rank: string
}

export interface RankedResponse {
  solo?: RankedEntry
  flex?: RankedEntry
}
