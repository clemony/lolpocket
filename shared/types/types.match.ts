export interface MatchData {
  endOfGameResult: string
  gameDuration: number
  gameEndTimestamp: number
  gamePatch: number
  matchId: string
  participantIds: string[]
  participants: Player[]
  queueId: number
  teams: MatchTeam[]
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
  mvpScore: number
  win: boolean
}
export interface PlayerStat {
  name: string
  value: number
}
export interface PlayerOffense {
  totalDamage: PlayerStat
  damagePercentage: PlayerStat
}

export interface PlayerUtility {
  effectiveHealingAndShielding: PlayerStat
  totalAllyHealing: PlayerStat
  totalAllyShielding: PlayerStat
  allySaves: PlayerStat
}

export interface PlayerDefense {
  totalDamageTaken: PlayerStat
  damageTakenPercentage: PlayerStat
  damageSelfMitigated: PlayerStat
  ccDuration: PlayerStat
}

export interface PlayerFarming {
  goldEarned: PlayerStat
  minionsKilled: PlayerStat
  neutralMinionsKilled: PlayerStat
  turretsKilled: PlayerStat
  objectivesStolen: PlayerStat
}
export interface PlayerVision {
  visionScore: PlayerStat
  wardsKilled: PlayerStat
  wardsPlaced: PlayerStat
  controlWardsPlaced: PlayerStat
}

export interface PlayerStats {
  kills: {
    total: number
    killingSprees: number
    tripleKills: number
    doubleKills: number
    quadraKills: number
    pentaKills: number
  }
  deaths: number
  assists: number
  kda: number
  kp: number
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
  feats: {
    EPIC_MONSTER_KILL: number
    FIRST_BLOOD: number
    FIRST_TURRET: number
  }
  gold?: number
  goldSpent?: number
  kills?: number
  objectives: {
    atakhan: number
    baron: number
    champion: number
    dragon: number
    horde: number
    inhibitor: number
    riftHerald: number
    tower: number
  }
  teamId: number
  win: boolean
}
