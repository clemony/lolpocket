export interface MatchData {
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

export interface Player {
  puuid: string
  name: string
  tag: string
  icon: number
  teamId: number
  role: string
  championId: number
  stats: PlayerStats

  items: PlayerItems
  runes: PlayerRunes
  spells: [number, number]
  lpScore: PlayerLpScore
  win: boolean | "remake"
}

export type PlayerLpScore = {
  rank: number
  score: number
  ace: boolean
  mvp: boolean
}

export type PlayerStats = {
  champLevel: number
  kills: number
  deaths: number
  assists: number
  kda: number
  kp: number
  timeSpentDead: number

  totalDamage: number
  damagePercentage: number
  damagePerMin: number
  firstBloodAssist: boolean
  firstBloodKill: boolean
  tripleKills: number
  doubleKills: number
  quadraKills: number
  pentaKills: number
  sprees: number

  effectiveHealingAndShielding: number
  totalAllyHealing: number
  totalAllyShielding: number
  allySaves: number

  totalDamageTaken: number
  damageTakenPercentage: number
  damageSelfMitigated: number
  ccDuration: number

  goldEarned: number
  goldPerMin: number
  goldShare: number
  minionsKilled: number
  neutralMinionsKilled: number
  turretsKilled: number
  firstTowerAssist: boolean
  firstTowerKill: boolean
  objectivesStolen: number

  visionScore: number
  visionShare: number
  wardsKilled: number
  wardsPlaced: number
  controlWardsPlaced: number
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
