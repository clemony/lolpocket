export interface MatchData {
  endOfGameResult: string
  gameDuration: number
  gameEndTimestamp: number
  gamePatch: number
  matchId: string
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
  riotIdGameName: string
  riotIdTagline: string
  profileIcon: number
  teamId: number
  teamPosition: string
  championId: number
  timeSpentDead: number
  //
  stats: PlayerStats
  //
  items: PlayerItems
  runes: PlayerRunes
  spells: PlayerSpells
  //
  offense: PlayerOffense
  defense: PlayerDefense
  utility: PlayerUtility
  farming: PlayerFarming
  vision: PlayerVision
  win: boolean
}

export interface PlayerOffense {
  totalDamage: number
  damagePercentage: number
}

export interface PlayerUtility {
  effectiveHealingAndShielding: number
  totalAllyHealing: number
  totalAllyShielding: number
  allySaves: number
}

export interface PlayerDefense {
  totalDamageTaken: number
  damageTakenPercentage: number
  damageSelfMitigated: number
  ccDuration: number
}

export interface PlayerFarming {
  goldEarned: number
  minionsKilled: number
  neutralMinionsKilled: number
  turretsKilled: number
  objectivesStolen: number
}
export interface PlayerVision {
  visionScore: number
  wardsKilled: number
  wardsPlaced: number
  controlWardsPlaced: number
}

export interface PlayerStats {
  champLevel: number
  kills: {
    expandable?: boolean
    value: number
    stats: Multikills
  }
  deaths: number
  assists: number
  kda: number
  kp: number
  mvpScore: number
}

export interface Multikills {
  killingSprees: number
  tripleKills: number
  doubleKills: number
  quadraKills: number
  pentaKills: number
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

export type PlayerItems = {
  0: number
  1: number
  2: number
  3: number
  4: number
  5: number
  6: number
}

export type PlayerSpells = {
  0: number
  1: number
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
