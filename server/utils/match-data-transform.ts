export function transformMatchData(raw: any): MatchData {
  const participants: Player[] = raw.info.participants.map(
    (p: any): Player => ({
      riotIdGameName: p.riotIdGameName ?? '',
      puuid: p.puuid,
      profileIcon: p.profileIcon,
      riotIdTagline: p.riotIdTagline ?? '',
      role: p.role ?? '',
      teamId: p.teamId,
      teamPosition: p.teamPosition ?? '',
      kills: p.kills,
      deaths: p.deaths,
      assists: p.assists,
      lane: p.lane ?? '',
      win: p.win ?? '',
      championId: p.championId,
      championName: p.championName,
      item0: p.item0,
      item1: p.item1,
      item2: p.item2,
      item3: p.item3,
      item4: p.item4,
      item5: p.item5,
      item6: p.item6,
      summoner1Id: p.summoner1Id,
      summoner2Id: p.summoner2Id,
      totalDamageDealtToChampions: p.totalDamageDealtToChampions,
      physicalDamageDealtToChampions: p.physicalDamageDealtToChampions,
      magicDamageDealtToChampions: p.magicDamageDealtToChampions,
      trueDamageDealtToChampions: p.trueDamageDealtToChampions,
      largestCriticalStrike: p.largestCriticalStrike,
      totalHealsOnTeammates: p.totalHealsOnTeammates,
      totalDamageShieldedOnTeammates: p.totalDamageShieldedOnTeammates,
      totalDamageTaken: p.totalDamageTaken,
      physicalDamageTaken: p.physicalDamageTaken,
      magicDamageTaken: p.magicDamageTaken,
      trueDamageTaken: p.trueDamageTaken,
      timeCCingOthers: p.timeCCingOthers,
      visionScore: p.visionScore,
      wardsPlaced: p.wardsPlaced,
      wardsKilled: p.wardsKilled,
      wardsGuarded: p.wardsGuarded,
      damageDealtToObjectives: p.damageDealtToObjectives,
      turretKills: p.turretKills,
      inhibitorTakedowns: p.inhibitorTakedowns,
      objectivesStolen: p.objectivesStolen,
      dragonKills: p.dragonKills,
      firstBloodKill: p.firstBloodKill,
      soloKills: p.soloKills,
      doubleKills: p.doubleKills,
      tripleKills: p.tripleKills,
      quadraKills: p.quadraKills,
      pentaKills: p.pentaKills,
      neutralMinionsKilled: p.neutralMinionsKilled,
      goldSpent: p.goldSpent,
      goldEarned: p.goldEarned,
      totalMinionsKilled: p.totalMinionsKilled,
      totalEnemyJungleMinionsKilled: p.totalEnemyJungleMinionsKilled,
      totalAllyJungleMinionsKilled: p.totalAllyJungleMinionsKilled,

      challenges: {
        bountyGold: p.challenges?.bountyGold ?? 0,
        buffsStolen: p.challenges?.buffsStolen ?? 0,
        controlWardsPlaced: p.challenges?.controlWardsPlaced ?? 0,
        damageTakenOnTeamPercentage:
          p.challenges?.damageTakenOnTeamPercentage ?? 0,
        effectiveHealAndShielding: p.challenges?.effectiveHealAndShielding ?? 0,
        goldPerMinute: p.challenges?.goldPerMinute ?? 0,
        kda: p.challenges?.kda ?? 0,
        killingSprees: p.challenges?.killingSprees ?? 0,
        scuttleCrabKills: p.challenges?.scuttleCrabKills ?? 0,
        saveAllyFromDeath: p.challenges?.saveAllyFromDeath ?? 0,
        teamBaronKills: p.challenges?.teamBaronKills ?? 0,
        voidMonsterKill: p.challenges?.voidMonsterKill ?? 0,
        wardsGuarded: p.challenges?.wardsGuarded ?? 0,
        killParticipation: p.challenges?.killParticipation ?? 0,
      },

      perks: {
        keystone: p.perks?.styles?.[0]?.selections?.[0]?.perk ?? 0,
        primary: p.perks?.styles?.[0]?.style ?? 0,
        secondary: p.perks?.styles?.[1]?.style ?? 0,
      },
    }),
  )

  const teams: MatchTeam[] = raw.info.teams.map((team: any): MatchTeam => {
    const teamParticipants = participants.filter(
      p => p.teamId === team.teamId,
    )

    return {
      teamId: team.teamId,
      win: team.win,

      gold: teamParticipants.reduce((sum, p) => sum + p.goldEarned, 0),
      goldSpent: teamParticipants.reduce((sum, p) => sum + p.goldSpent, 0),
      kills: teamParticipants.reduce((sum, p) => sum + p.kills, 0),
      deaths: teamParticipants.reduce((sum, p) => sum + p.deaths, 0),
      assists: teamParticipants.reduce((sum, p) => sum + p.assists, 0),

      feats: {
        EPIC_MONSTER_KILL: {
          featState: team.feats?.EPIC_MONSTER_KILL?.featState ?? 0,
        },
        FIRST_BLOOD: {
          featState: team.feats?.FIRST_BLOOD?.featState ?? 0,
        },
        FIRST_TURRET: {
          featState: team.feats?.FIRST_TURRET?.featState ?? 0,
        },
      },
      objectives: {
        atakhan: team.objectives?.atakhan ?? { first: false, kills: 0 },
        baron: team.objectives?.baron ?? { first: false, kills: 0 },
        champion: team.objectives?.champion ?? { first: false, kills: 0 },
        dragon: team.objectives?.dragon ?? { first: false, kills: 0 },
        horde: team.objectives?.horde ?? { first: false, kills: 0 },
        inhibitor: team.objectives?.inhibitor ?? { first: false, kills: 0 },
        riftHerald: team.objectives?.riftHerald ?? { first: false, kills: 0 },
        tower: team.objectives?.tower ?? { first: false, kills: 0 },
      },
    }
  })

  const matchData: MatchData = {
    metadata: {
      dataVersion: raw.metadata.dataVersion,
      matchId: raw.metadata.matchId,
      participants: raw.metadata.participants,
    },
    info: {
      endOfGameResult: raw.info.endOfGameResult,
      gameCreation: raw.info.gameCreation,
      gameDuration: raw.info.gameDuration,
      gameEndTimestamp: raw.info.gameEndTimestamp,
      gameId: raw.info.gameId,
      gameMode: raw.info.gameMode,
      gameName: raw.info.gameName,
      gameStartTimestamp: raw.info.gameStartTimestamp,
      gameType: raw.info.gameType,
      gameVersion: raw.info.gameVersion,
      mapId: raw.info.mapId,
      participants,
    },
    platformId: raw.info.platformId ?? 'NA1', // default fallback if missing
    queueId: raw.info.queueId ?? 420, // solo/duo as default?
    teams,
  }

  return matchData
}
