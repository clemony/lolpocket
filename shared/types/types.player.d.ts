declare global {
export interface Player {
  name: string
  puuid: string
  championId: number
  icon: number
  role: string
  stats: PlayerStats
  tag: string
  teamId: number

  items: PlayerItems
  lpScore: PlayerLpScore
  runes: PlayerRunes
  spells: [number, number]
  win: boolean | 'remake'
}

export interface PlayerLpScore {
  ace: boolean
  mvp: boolean
  rank: number
  score: number
}

export interface PlayerStats {
  assists: number
  champLevel: number
  deaths: number
  kda: number
  kills: number
  kp: number
  timeSpentDead: number

  damagePercentage: number
  damagePerMin: number
  doubleKills: number
  firstBloodAssist: boolean
  firstBloodKill: boolean
  pentaKills: number
  quadraKills: number
  sprees: number
  totalDamage: number
  tripleKills: number

  allySaves: number
  effectiveHealingAndShielding: number
  totalAllyHealing: number
  totalAllyShielding: number

  ccDuration: number
  damageSelfMitigated: number
  damageTakenPercentage: number
  totalDamageTaken: number

  allyJungleMinions: number
  csPerMin: number
  enemyJungleMinions: number
  goldEarned: number
  goldPerMin: number
  goldShare: number
  minionsKilled: number
  totalCs: number

  firstTowerAssist: boolean
  firstTowerKill: boolean
  objectivesStolen: number
  turretsKilled: number

  controlWardsPlaced: number
  visionScore: number
  visionShare: number
  wardsKilled: number
  wardsPlaced: number
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
}

