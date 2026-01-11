export interface MatchData {
  endOfGameResult: string
  gameDuration: number
  gameEndTimestamp: number
  gamePatch: number
  matchId: string
  mapId: number
  regionId: string
  participantIds: string[]
  participants: Player[]
  queueId: number
  teams: MatchTeam[]
  lastAccessedAt?: number
}

export interface MatchDataCurrentPlayer extends MatchData {
  player: Player
  queue: QueueIndex
  mvp: string
  ace: string
  ranking: string[]
}

export interface Player {
  puuid: string
  name: string
  tag: string
  icon: number
  teamId: number
  role: string
  championId: number
  //
  stats: PlayerStats
  //
  items: PlayerItems
  runes: PlayerRunes
  spells: [number, number]
  //
  offense: PlayerOffense
  defense: PlayerDefense
  utility: PlayerUtility
  farming: PlayerFarming
  vision: PlayerVision
  win: boolean
}

export type PlayerOffense = {
  totalDamage: number
  damagePercentage: number
  multiKills: {
    tripleKills: number
    doubleKills: number
    quadraKills: number
    pentaKills: number
  }
  sprees: number
}

export type PlayerUtility = {
  effectiveHealingAndShielding: number
  totalAllyHealing: number
  totalAllyShielding: number
  //healingAndShieldingPercentage: number
  allySaves: number
}

export type PlayerDefense = {
  totalDamageTaken: number
  damageTakenPercentage: number
  damageSelfMitigated: number
  ccDuration: number
}

export type PlayerFarming = {
  goldEarned: number
  minionsKilled: number
  neutralMinionsKilled: number
  turretsKilled: number
  objectivesStolen: number
}
export type PlayerVision = {
  visionScore: number
  wardsKilled: number
  wardsPlaced: number
  controlWardsPlaced: number
}

export type PlayerStats = {
  champLevel: number
  kills: number
  deaths: number
  assists: number
  kda: number
  kp: number
  timeSpentDead: number
  mvpScore: number
}

export interface PlayerRunes {
  keystone: number
  primary: {
    path: number
    runes: number[]
  }
  secondary: {
    path: number
    runes: number[]
  }
  shards: number[]
}

export interface PlayerItems {
  role: number
  slots: [number, number, number, number, number, number]
  trinket: number
}

export interface MatchTeam {
  assists?: number
  deaths?: number
  gold?: number
  goldSpent?: number
  kills?: number
  baron: number
  elder: number
  dragon: number
  horde: number
  inhibitor: number
  riftHerald: number
  tower: number
  bans: number[]
  teamId: number
  win: boolean
}

export interface MatchPlayerData {
  timeline: PlayerTimeline
  match: MatchData
  player: Player
}
