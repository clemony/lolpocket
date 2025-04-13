interface MatchData {
  metadata: {
    dataVersion: string
    matchId: string
    participants: string[]
  }
  info: {
    endOfGameResult: string
    gameCreation: number
    gameDuration: number
    gameEndTimestamp: number
    gameId: number
    gameMode: string
    gameName: string
    gameStartTimestamp: number
    gameType: string
    gameVersion: string
    mapId: number
    participants: MatchParticipant[]
  }
  platformId: string
  queueId: number
  teams: MatchTeam[]
}

interface MatchParticipant {
  riotIdGameName: string
  puuid: number
  riotIdTagLine: number
  role: number
  teamId: number
  teamPosition: number
  kills: number
  deaths: number
  assists: number
  lane: number
  challenges: {
    bountyGold: number
    buffsStolen: number
    controlWardsPlaced: number
    damageTakenOnTeamPercentage: number
    effectiveHealAndShielding: number
    goldPerMinute: number
    kda: number
    killingSprees: number
    scuttleCrabKills: number
    saveAllyFromDeath: number
    teamBaronKills: number
    voidMonsterKill: number
    wardsGuarded: number
    killParticipation: number
  }
  championId: number
  item0: number
  item1: number
  item2: number
  item3: number
  item4: number
  item5: number
  item6: number
  /*  perks.styles[0].selections[0].perk
perks.styles[0].style
perks.styles[1].style  mapped to below object */
  perks: {
    keystone: number
    primary: number
    secondary: number
  }
  summoner1Id: number
  summoner2Id: number
  totalDamageDealtToChampions: number
  physicalDamageDealtToChampions: number
  magicDamageDealtToChampions: number
  trueDamageDealtToChampions: number
  largestCriticalStrike: number
  totalHealsOnTeammates: number
  totalDamageShieldedOnTeammates: number
  totalDamageTaken: number
  physicalDamageTaken: number
  magicDamageTaken: number
  trueDamageTaken: number
  timeCCingOthers: number
  visionScore: number
  wardsPlaced: number
  wardsKilled: number
  wardsGuarded: number
  damageDealtToObjectives: number
  turretKills: number
  inhibitorTakedowns: number
  objectivesStolen: number
  dragonKills: number
  firstBloodKill: number
  soloKills: number
  doubleKills: number
  tripleKills: number
  quadraKills: number
  pentaKills: number
  neutralMinionsKilled: number
  goldSpent: number
  goldEarned: number
  totalMinionsKilled: number
  neutralMinionsKilled: number
  totalEnemyJungleMinionsKilled: number
  totalAllyJungleMinionsKilled: number
}

interface MatchTeam {
  feats: {
    EPIC_MONSTER_KILL: {
      featState: number
    }
    FIRST_BLOOD: {
      featState: number
    }
    FIRST_TURRET: {
      featState: number
    }
  }
  objectives: {
    atakhan: ObjectiveTakedowns
    baron: ObjectiveTakedowns
    champion: ObjectiveTakedowns
    dragon: ObjectiveTakedowns
    horde: ObjectiveTakedowns
    inhibitor: ObjectiveTakedowns
    riftHerald: ObjectiveTakedowns
    tower: ObjectiveTakedowns
  }
  teamId: number
  win: boolean
}

interface ObjectiveTakedowns {
  first: boolean
  kills: number
}