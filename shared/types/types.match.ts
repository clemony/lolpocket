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
  items: number[]
  player: Player
  queue: QueueIndex
}


export interface Player {
  puuid: string
  assists: number
  challenges: {
    controlWardsPlaced: number
    damageTakenOnTeamPercentage: number
    effectiveHealAndShielding: number
    kda: number
    killingSprees: number
    saveAllyFromDeath: number
    killParticipation: number
    teamDamagePercentage: number
  }
  championId: number
  damageSelfMitigated: number
  deaths: number
  doubleKills: number
  dragonKills: number
  goldEarned: number
  item0: number
  item1: number
  item2: number
  item3: number
  item4: number
  item5: number
  item6: number
  kills: number
  mvpScore: number
  neutralMinionsKilled: number
  objectivesStolen: number
  pentaKills: number
  runes: {
    keystone: number
    primary: {
      path: number
      runes: number[]
    }
    secondary:  {
      path: number
      runes: number[]
    }
  }
  profileIcon: number
  quadraKills: number
  riotIdGameName: string
  riotIdTagline: string
  soloKills: number
  summoner1Id: number
  summoner2Id: number
  teamId: number
  teamPosition: string
  timeCCingOthers: number
  totalDamageDealtToChampions: number
  totalDamageShieldedOnTeammates: number
  totalDamageTaken: number
  totalHealsOnTeammates: number
  totalMinionsKilled: number
  tripleKills: number
  turretKills: number
  visionScore: number
  wardsKilled: number
  wardsPlaced: number
  win: boolean
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

export interface MatchTimeline {
  matchId: string
  players: Record<string, PlayerTimeline>
}

export interface PlayerTimeline {
  puuid: string
  matchId?: string
  stats: {
    deathsBefore15: number
    killsBefore15: number
    assistsBefore15: number
  }
  inventory: ItemEvent[]
  skills: any
  kills: ChampionDeathEvent[]
  assists: ChampionDeathEvent[]
  deaths: ChampionDeathEvent[]
}

export interface ItemEvent {
  timestamp: number
  events: NormalizedItemEvent[] }

export type NormalizedItemEvent =
  | { action: "ADD"; id: number, count: number }
  | {  action: "REMOVE"; id: number, count: number }
  | {  action: "UPGRADE"; from: number | number[]; to: number }
  | { action: "SUPPORT_UPGRADE"; from: number | number[]; to: number }

export interface PlayerItemEvent {
  timestamp: number
  participantId: number
  itemId?: number
  afterId?: number
  beforeId?: number
  goldGain?: number
  type:
    | "ITEM_PURCHASED"
    | "ITEM_UNDO"
    | "ITEM_SOLD"
    | "ITEM_DESTROYED"
    | "ITEM_OBTAINED"
}

export interface ChampionDeathEvent {
  killerId: number
  assistingParticipantIds: number[]
  victimId: number
  timestamp: number
}
