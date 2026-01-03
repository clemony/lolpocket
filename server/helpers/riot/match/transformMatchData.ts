export function transformMatchData(raw: any): MatchData {
  // map raw participants into player
  const participants: Player[] = raw.info.participants.map(
    (p: any): Player => ({
      puuid: p.puuid,
      riotIdGameName: p.riotIdGameName ?? "",
      riotIdTagline: p.riotIdTagline ?? "",
      profileIcon: p.profileIcon,
      teamId: p.teamId,
      teamPosition:
        p.teamPosition.toLowerCase().replace("utility", "support") ?? "",
      championId: p.championId,
      timeSpentDead: p.totalTimeSpentDead ?? "",
      //
      stats: {
        champLevel: p.champLevel,
        kills: {
          expandable: true,
          value: p.kills,
          stats: {
            killingSprees: p.challenges?.killingSprees ?? 0,
            doubleKills: p.doubleKills,
            tripleKills: p.tripleKills,
            quadraKills: p.quadraKills,
            pentaKills: p.pentaKills,
          },
        },
        deaths: p.deaths,
        assists: p.assists,
        kda: p.challenges?.kda ?? 0,
        kp: p.challenges?.killParticipation ?? 0,
        // placeholder, will overwrite after MVP calculation
        mvpScore: 0,
      },

      //
      items: {
        0: p.item0,
        1: p.item1,
        2: p.item2,
        3: p.item3,
        4: p.item4,
        5: p.item5,
        6: p.item6,
      },

      //
      runes: {
        keystone: p.perks?.styles?.[0]?.selections?.[0]?.perk ?? 0,
        primary: {
          path: p.perks?.styles?.[0]?.style ?? 0,
          runes: [
            p.perks?.styles?.[0]?.selections?.[1]?.perk ?? 0,
            p.perks?.styles?.[0]?.selections?.[2]?.perk ?? 0,
            p.perks?.styles?.[0]?.selections?.[3]?.perk ?? 0,
          ],
        },
        secondary: {
          path: p.perks?.styles?.[1]?.style ?? 0,
          runes: [
            p.perks?.styles?.[1]?.selections?.[0]?.perk ?? 0,
            p.perks?.styles?.[1]?.selections?.[1]?.perk ?? 0,
          ],
        },
        shards: [
          p.perks?.statPerks.offense,
          p.perks?.statPerks.flex,
          p.perks?.statPerks.defense,
        ],
      },

      //
      spells: {
        0: p.summoner1Id,
        1: p.summoner2Id,
      },

      //
      offense: {
        totalDamage: p.totalDamageDealtToChampions,
        damagePercentage: p.challenges?.teamDamagePercentage ?? 0,
      },

      //
      defense: {
        totalDamageTaken: p.totalDamageTaken,
        damageTakenPercentage: p.challenges?.damageTakenOnTeamPercentage ?? 0,
        damageSelfMitigated: p.damageSelfMitigated,
        ccDuration: p.timeCCingOthers,
      },

      //
      utility: {
        effectiveHealingAndShielding:
          Math.round(p.challenges?.effectiveHealAndShielding) ?? 0,
        totalAllyHealing: p.totalHealsOnTeammates,
        totalAllyShielding: p.totalDamageShieldedOnTeammates,
        allySaves: p.challenges?.saveAllyFromDeath ?? 0,
      },

      //
      farming: {
        goldEarned: p.goldEarned,
        minionsKilled: p.totalMinionsKilled,
        neutralMinionsKilled: p.neutralMinionsKilled,
        turretsKilled: p.turretKills,
        objectivesStolen: p.objectivesStolen,
      },

      //
      vision: {
        visionScore: p.visionScore,
        wardsKilled: p.wardsKilled,
        wardsPlaced: p.wardsPlaced,
        controlWardsPlaced: p.challenges?.controlWardsPlaced ?? 0,
      },

      //
      win: p.win ?? false,
    })
  )

  /* prep stats for mvp */
  const playerStats = raw.info.participants.map((p: any) => ({
    deathsInverse: Math.exp(-(p.deaths ?? 99) * 0.35),
    puuid: p.puuid,
    assists: p.assists,
    damageTakenOnTeamPercentage: p.challenges.damageTakenOnTeamPercentage,
    killParticipation: p.challenges.killParticipation,
    saveAllyFromDeath: p.challenges.saveAllyFromDeath,
    teamDamagePercentage: p.challenges.teamDamagePercentage,
    immobilizeAndKillWithAlly: p.challenges.immobilizeAndKillWithAlly,
    killAfterHiddenWithAlly: p.challenges.killAfterHiddenWithAlly,
    laneMinionsFirst10Minutes: p.challenges.laneMinionsFirst10Minutes,
    laningPhaseGoldExpAdvantage: p.challenges.laningPhaseGoldExpAdvantage,
    maxCsAdvantageOnLaneOpponent: p.challenges.maxCsAdvantageOnLaneOpponent,
    pickKillWithAlly: p.challenges.pickKillWithAlly,
    damageDealtToBuildings: p.challenges.damageDealtToBuildings,
    damageDealtToTurrets: p.challenges.damageDealtToTurrets,
    damageDealtToEpicMonsters: p.challenges.damageDealtToEpicMonsters,
    jungleCsBefore10Minutes: p.challenges.jungleCsBefore10Minutes,
    championId: p.championId,
    damageSelfMitigated: p.damageSelfMitigated,
    deaths: p.deaths,
    dragonKills: p.dragonKills,
    effectiveHealAndShielding:
      (p.totalHealsOnTeammates || 0) + (p.totalDamageShieldedOnTeammates || 0),
    goldEarned: p.goldEarned,
    kills: p.kills,
    matchId: raw.metadata.matchId,
    objectivesStolen: p.objectivesStolen,
    teamId: p.teamId,
    teamPosition: p.teamPosition,
    timeCCingOthers: p.timeCCingOthers,
    totalDamageDealtToChampions: p.totalDamageDealtToChampions,
    totalDamageShieldedOnTeammates: p.totalDamageShieldedOnTeammates,
    totalDamageTaken: p.totalDamageTaken,
    totalHealsOnTeammates: p.totalHealsOnTeammates,
    totalMinionsKilled: p.totalMinionsKilled,
    turretKills: p.turretKills,
    visionScore: p.visionScore,
    win: p.win,
    damagePerGold:
      p.goldEarned > 0 ? p.totalDamageDealtToChampions / p.goldEarned : 0,
    objectiveImpact:
      (p.challenges.damageDealtToTurrets || 0) +
      (p.challenges.damageDealtToBuildings || 0) +
      (p.challenges.damageDealtToEpicMonsters || 0),
  }))

  // calc mvp scores
  const mvpScores = calculateMvpScores(playerStats)

  // inject mvp into player
  for (const participant of participants) {
    participant.stats.mvpScore = mvpScores[participant.puuid] ?? 0
  }

  // continue mapping
  const teams: MatchTeam[] = raw.info.teams.map((team: any): MatchTeam => {
    const teamParticipants = participants.filter(
      (p) => p.teamId === team.teamId
    )

    const tp = raw.info.participants.filter((p) => p.teamId === team.teamId)

    return {
      assists: teamParticipants.reduce((sum, p) => sum + p.stats.assists, 0),
      deaths: teamParticipants.reduce((sum, p) => sum + p.stats.deaths, 0),
      gold: teamParticipants.reduce((sum, p) => sum + p.farming.goldEarned, 0),
      kills: teamParticipants.reduce((sum, p) => sum + p.stats.kills.value, 0),

      baron: team.objectives?.baron.kills ?? 0,
      elder: tp[0].challenges.teamElderDragonKills ?? 0,
      dragon: team.objectives?.dragon.kills ?? 0,
      horde: team.objectives?.horde.kills ?? 0,
      inhibitor: team.objectives?.inhibitor.kills ?? 0,
      riftHerald: team.objectives?.riftHerald.kills ?? 0,
      tower: team.objectives?.tower.kills ?? 0,

      bans: team.bans.map((b) => b.championId),
      teamId: team.teamId,
      win: team.win,
    }
  })

  return {
    endOfGameResult: raw.info.endOfGameResult,
    gameDuration: raw.info.gameDuration,
    gameEndTimestamp: raw.info.gameEndTimestamp,
    gamePatch: raw.info.gameVersion,
    matchId: raw.metadata.matchId,
    participantIds: raw.metadata.participants,
    participants,
    regionId: raw.info.platformId.toLowerCase(),
    queueId: raw.info.queueId ?? 420,
    teams,
  }
}
