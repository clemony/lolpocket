export function transformMatchData(raw: any): MatchData {
  /*   const teamHealingAndShielding = {
    100: raw.info.participants
      .filter((p) => p.teamId === 100)
      .map((p) => p.challenges.effectiveHealAndShielding)
      .reduce((sum, ehsp) => sum + ehsp, 0),
    200: raw.info.participants
      .filter((p) => p.teamId === 200)
      .map((p) => p.challenges.effectiveHealAndShielding)
      .reduce((sum, ehsp) => sum + ehsp, 0),
  } */

  const participants: Player[] = raw.info.participants.map(
    (p: any): Player => ({
      puuid: p.puuid,
      name: p.riotIdGameName ?? "",
      tag: p.riotIdTagline ?? "",
      icon: p.profileIcon,
      teamId: p.teamId,
      role: p.teamPosition.toLowerCase().replace("utility", "support"),
      championId: p.championId,
      //
      stats: {
        champLevel: p.champLevel,
        kills: p.kills,
        deaths: p.deaths,
        assists: p.assists,
        kda: p.challenges?.kda ?? 0,
        kp: p.challenges?.killParticipation ?? 0,
        timeSpentDead: p.totalTimeSpentDead ?? "",
        // placeholder, will overwrite after MVP calculation
        mvpScore: 0,
      },

      //
      items: {
        role: p.roleBoundItem ?? 0,
        slots: [
          p.item0 ?? 0,
          p.item1 ?? 0,
          p.item2 ?? 0,
          p.item3 ?? 0,
          p.item4 ?? 0,
          p.item5 ?? 0,
        ],
        trinket: p.item6 ?? 0,
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
          p.perks?.statPerks.offense ?? 0,
          p.perks?.statPerks.flex ?? 0,
          p.perks?.statPerks.defense ?? 0,
        ],
      },

      //
      spells: [p.summoner1Id ?? 0, p.summoner2Id ?? 0],

      //
      offense: {
        totalDamage: p.totalDamageDealtToChampions ?? 0,
        damagePercentage:
          Math.round(p.challenges?.teamDamagePercentage * 1000) / 10,
        sprees: p.challenges?.killingSprees ?? 0,
        damagePerMin: p.challenges.damagePerMinute ?? 0,
        firstBloodAssist: p.challenges.firstBloodAssist ?? false,
        firstBloodKill: p.challenges.firstBloodKill ?? false,
        multiKills: {
          doubleKills: p.doubleKills ?? 0,
          tripleKills: p.tripleKills ?? 0,
          quadraKills: p.quadraKills ?? 0,
          pentaKills: p.pentaKills ?? 0,
        },
      },

      //
      defense: {
        totalDamageTaken: p.totalDamageTaken ?? 0,
        damageTakenPercentage:
          Math.round(p.challenges?.damageTakenOnTeamPercentage * 1000) / 10,
        damageSelfMitigated: p.damageSelfMitigated ?? 0,
        ccDuration: p.timeCCingOthers ?? 0,
      },

      //
      utility: {
        effectiveHealingAndShielding:
          Math.round(p.challenges?.effectiveHealAndShielding) ?? 0,
        totalAllyHealing: p.totalHealsOnTeammates ?? 0,
        totalAllyShielding: p.totalDamageShieldedOnTeammates ?? 0,
        allySaves: p.challenges?.saveAllyFromDeath ?? 0,
      },

      //
      farming: {
        goldEarned: p.goldEarned ?? 0,
        goldPerMin: p.challenges.goldPerMinute ?? 0,
        minionsKilled: p.totalMinionsKilled ?? 0,
        neutralMinionsKilled: p.neutralMinionsKilled,
        turretsKilled: p.turretKills ?? 0,
        objectivesStolen: p.objectivesStolen ?? 0,
        firstTowerAssist: p.challenges.firstTowerAssist ?? 0,
        firstTowerKill: p.challenges.firstTowerKill ?? 0,
      },

      //
      vision: {
        visionScore: p.visionScore ?? 0,
        wardsKilled: p.wardsKilled ?? 0,
        wardsPlaced: p.wardsPlaced ?? 0,
        controlWardsPlaced: p.challenges?.controlWardsPlaced ?? 0,
      },

      //
      win: raw.info.gameDuration < 147 ? "remake" : (p.win ?? false),
    })
  )

  //lane compare
  /*
challenges.maxCsAdvantageOnLaneOpponent
  maxLevelLeadLaneOpponent
moreEnemyJungleThanOpponent
maxKillDeficit
challenges.earlyLaningPhaseGoldExpAdvantage

challenges.laningPhaseGoldExpAdvantage


challenges.laneMinionsFirst10Minutes
getTakedownsInAllLanesEarlyJungleAsLaner
  */

  // calc mvp scores
  const mvpScores = calculateMvpScores(raw)

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
      kills: teamParticipants.reduce((sum, p) => sum + p.stats.kills, 0),

      baron: team.objectives?.baron.kills ?? 0,
      elder: tp[0].challenges.teamElderDragonKills ?? 0,
      dragon: team.objectives?.dragon.kills ?? 0,
      horde: team.objectives?.horde.kills ?? 0,
      inhibitor: team.objectives?.inhibitor.kills ?? 0,
      riftHerald: team.objectives?.riftHerald.kills ?? 0,
      tower: team.objectives?.tower.kills ?? 0,

      bans: team.bans.map((b) => b.championId ?? 0),
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
    mapId: raw.info.mapId ?? 11,
    queueId: raw.info.queueId ?? 420,
    teams,
  }
}
