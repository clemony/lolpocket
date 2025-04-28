declare global {

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
    riotIdTagline: string
    puuid: string
    profileIcon: number
    teamId: number
    teamPosition: string
    role: string
    lane: string
    win: boolean
    kills: number
    deaths: number
    assists: number
    championId: number
    championName: string
    item0: number
    item1: number
    item2: number
    item3: number
    item4: number
    item5: number
    item6: number
    summoner1Id: number
    summoner2Id: number
    goldEarned: number
    goldSpent: number
    totalMinionsKilled: number
    neutralMinionsKilled: number
    totalEnemyJungleMinionsKilled: number
    totalAllyJungleMinionsKilled: number
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
    firstBloodKill: boolean
    soloKills: number
    doubleKills: number
    tripleKills: number
    quadraKills: number
    pentaKills: number

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

    perks: {
      keystone: number
      primary: number
      secondary: number
    }
  }

  interface MatchTeam {
    teamId: number
    win: boolean
    feats: {
      EPIC_MONSTER_KILL: Feat
      FIRST_BLOOD: Feat
      FIRST_TURRET: Feat
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
  }

  interface Feat {
    featState: number
  }

  interface ObjectiveTakedowns {
    first: boolean
    kills: number
  }

  interface SimplifiedMatchData {
    puuid: string
    gameCreation: number
    gameEndTimestamp: number
    gameVersion: string
    win: boolean
    queueId: number
    championName: string
    teamPosition: string
    item0: number
    item1: number
    item2: number
    item3: number
    item4: number
    item5: number
    item6: number
    perks: {
      keystone: number
      primary: number
      secondary: number
    }
    participants: {
      riotIdGameName: string
      profileIcon: number
    }[]
  }


  interface RankedEntry {
    tier: string
    division: string
    lp: number
    wins: number
    losses: number
    queueType: string
  }
}
export { }