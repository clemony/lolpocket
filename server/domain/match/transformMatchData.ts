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
        totalDamage: p.totalDamageDealtToChampions,
        damagePercentage:
          Math.round(p.challenges?.teamDamagePercentage * 1000) / 10,
        sprees: p.challenges?.killingSprees ?? 0,
        damagePerMin: p.damagePerMinute ?? 0,
        multiKills: {
          doubleKills: p.doubleKills,
          tripleKills: p.tripleKills,
          quadraKills: p.quadraKills,
          pentaKills: p.pentaKills,
        },
      },

      //
      defense: {
        totalDamageTaken: p.totalDamageTaken,
        damageTakenPercentage:
          Math.round(p.challenges?.damageTakenOnTeamPercentage * 1000) / 10,
        damageSelfMitigated: p.damageSelfMitigated,
        ccDuration: p.timeCCingOthers,
      },

      //
      utility: {
        effectiveHealingAndShielding:
          Math.round(p.challenges?.effectiveHealAndShielding) ?? 0,
        /*        healingAndShieldingPercentage:
          Math.round(
            (p.challenges?.effectiveHealAndShielding /
              teamHealingAndShielding[p.teamId]) *
              1000
          ) / 10, */
        totalAllyHealing: p.totalHealsOnTeammates,
        totalAllyShielding: p.totalDamageShieldedOnTeammates,
        allySaves: p.challenges?.saveAllyFromDeath ?? 0,
      },

      //
      farming: {
        goldEarned: p.goldEarned,
        goldPerMin: p.goldPerMinute ?? 0,
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

  //lane compare
  /*
  maxLevelLeadLaneOpponent
moreEnemyJungleThanOpponent
maxCsAdvantageOnLaneOpponent
laningPhaseGoldExpAdvantage
maxKillDeficit
maxCsAdvantageOnLaneOpponent
earlyLaningPhaseGoldExpAdvantage
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
