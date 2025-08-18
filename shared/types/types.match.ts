import type { RouteRecordRaw } from 'vue-router'

export interface PlayerData {
  summoner: Summoner
  matches: MatchData[]
  allMatches: MatchData[]
  topChampion: TopChampion
  useChampions: any
  useRoles: any
  useAllies: any
  useItems: any
  links: Record<string, string>
  loading: boolean
  filter: MatchFilter
  fetchMastery: () => void
  findSummoner: () => void
  setFilter: (string, key) => void
  clearFilters: () => void

}

export interface MatchData {

  matchId: string
  endOfGameResult: string
  gameDuration: number
  gameEndTimestamp: number
  gamePatch: number
  queueId: number
  participants: Player[]
  participantIds: string[]
  teams: MatchTeam[]
}

export interface Player {
  riotIdGameName: string
  riotIdTagline: string
  puuid: string
  profileIcon: number
  item0: number
  item1: number
  item2: number
  item3: number
  item4: number
  item5: number
  item6: number
  summoner1Id: number
  summoner2Id: number
  teamId: number
  teamPosition: string
  championId: number
  win: boolean
  kills: number
  deaths: number
  assists: number
  mvpScore: number
  goldEarned: number
  totalMinionsKilled: number
  neutralMinionsKilled: number
  totalDamageDealtToChampions: number
  totalHealsOnTeammates: number
  totalDamageShieldedOnTeammates: number
  damageSelfMitigated: number
  totalDamageTaken: number
  timeCCingOthers: number
  visionScore: number
  wardsPlaced: number
  wardsKilled: number
  turretKills: number
  objectivesStolen: number
  dragonKills: number
  soloKills: number
  doubleKills: number
  tripleKills: number
  quadraKills: number
  pentaKills: number
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
  perks: {
    keystone: number
    primary: number
    secondary: number
  }
}

export interface MatchTeam {
  teamId: number
  win: boolean
  gold?: number
  goldSpent?: number
  kills?: number
  deaths?: number
  assists?: number
  feats: {
    EPIC_MONSTER_KILL: number
    FIRST_BLOOD: number
    FIRST_TURRET: number
  }
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
}
