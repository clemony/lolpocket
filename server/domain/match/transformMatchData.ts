export function transformMatchData(raw: any): MatchData {
  const teamTotal = (sKey: string, teamId: number) => {
    return raw.info.participants
      .filter((p) => p.teamId === teamId)
      .map((p) => p[sKey])
      .reduce((s, v) => s + v, 0)
  }
  const teamGold = {
    100: teamTotal("goldEarned", 100),
    200: teamTotal("goldEarned", 200),
  }
  const teamVision = {
    100: teamTotal("visionScore", 100),
    200: teamTotal("visionScore", 200),
  }

  const participants: Player[] = raw.info.participants.map(
    (p: any): Player => ({
      puuid: p.puuid,
      name: p.riotIdGameName ?? "",
      tag: p.riotIdTagline ?? "",
      icon: p.profileIcon,
      teamId: p.teamId,
      role: p.teamPosition.toLowerCase().replace("utility", "support"),
      championId: p.championId,

      // placeholder, will overwrite after MVP calculation
      lpScore: {
        rank: 0,
        score: 0,
        ace: false,
        mvp: false,
      },

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

      spells: [p.summoner1Id ?? 0, p.summoner2Id ?? 0],

      //stats
      stats: {
        champLevel: p.champLevel,
        kills: p.kills,
        deaths: p.deaths,
        assists: p.assists,
        kda: roundDecimal(p.challenges?.kda) ?? 0,
        kp: roundDecimalToPercent(p.challenges?.killParticipation, 1) ?? 0,
        timeSpentDead: p.totalTimeSpentDead ?? "",

        //offense
        totalDamage: p.totalDamageDealtToChampions ?? 0,
        damagePercentage:
          roundDecimalToPercent(p.challenges?.teamDamagePercentage, 1) ?? 0,
        sprees: p.challenges?.killingSprees ?? 0,
        damagePerMin: roundDecimal(p.challenges.damagePerMinute) ?? 0,
        firstBloodAssist: p.challenges.firstBloodAssist ?? false,
        firstBloodKill: p.challenges.firstBloodKill ?? false,
        doubleKills: p.doubleKills ?? 0,
        tripleKills: p.tripleKills ?? 0,
        quadraKills: p.quadraKills ?? 0,
        pentaKills: p.pentaKills ?? 0,

        //defense
        totalDamageTaken: p.totalDamageTaken ?? 0,
        damageTakenPercentage:
          roundDecimalToPercent(p.challenges?.damageTakenOnTeamPercentage, 1) ??
          0,
        damageSelfMitigated: p.damageSelfMitigated ?? 0,
        ccDuration: p.timeCCingOthers ?? 0,

        //utility
        effectiveHealingAndShielding:
          Math.round(p.challenges?.effectiveHealAndShielding) ?? 0,
        totalAllyHealing: p.totalHealsOnTeammates ?? 0,
        totalAllyShielding: p.totalDamageShieldedOnTeammates ?? 0,
        allySaves: p.challenges?.saveAllyFromDeath ?? 0,

        //farming
        goldEarned: p.goldEarned ?? 0,
        goldPerMin: roundDecimal(p.challenges.goldPerMinute) ?? 0,
        goldShare: roundDecimalToPercent(p.goldEarned, teamGold[p.teamId]) ?? 0,
        minionsKilled: p.totalMinionsKilled ?? 0,
        allyJungleMinions: p.totalAllyJungleMinionsKilled ?? 0,
        enemyJungleMinions: p.totalEnemyJungleMinionsKilled ?? 0,
        totalCs:
          p.totalMinionsKilled +
          p.totalAllyJungleMinionsKilled +
          p.totalEnemyJungleMinionsKilled,
        csPerMin: roundDecimal(
          (p.totalMinionsKilled +
            p.totalAllyJungleMinionsKilled +
            p.totalEnemyJungleMinionsKilled) /
            (raw.info.gameDuration / 60)
        ),
        turretsKilled: p.turretKills ?? 0,
        objectivesStolen: p.objectivesStolen ?? 0,
        firstTowerAssist: p.challenges.firstTowerAssist ?? false,
        firstTowerKill: p.challenges.firstTowerKill ?? false,

        //vision
        visionScore: p.visionScore ?? 0,
        visionShare:
          roundDecimalToPercent(p.visionScore, teamVision[p.teamId]) ?? 0,
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
    participant.lpScore.score = mvpScores[participant.puuid] ?? 0
  }

  // continue mapping
  const teams: MatchTeam[] = raw.info.teams.map((team: any): MatchTeam => {
    const teamParticipants = participants.filter(
      (p) => p.teamId === team.teamId
    )

    const tp = raw.info.participants.filter((p) => p.teamId === team.teamId)

    return {
      assists:
        teamParticipants.reduce((sum, p) => sum + p.stats.assists, 0) ?? 0,
      deaths: teamParticipants.reduce((sum, p) => sum + p.stats.deaths, 0) ?? 0,
      kills: teamParticipants.reduce((sum, p) => sum + p.stats.kills, 0) ?? 0,
      gold: teamGold[team.teamId] ?? 0,

      baron: team.objectives?.baron.kills ?? 0,
      elder: tp[0].challenges.teamElderDragonKills ?? 0,
      dragon: team.objectives?.dragon.kills ?? 0,
      horde: team.objectives?.horde.kills ?? 0,
      inhibitor: team.objectives?.inhibitor.kills ?? 0,
      riftHerald: team.objectives?.riftHerald.kills ?? 0,
      tower: team.objectives?.tower.kills ?? 0,

      bans: team.bans.map((b) => b.championId ?? 0),
      teamId: team.teamId ?? 0,
      win: team.win ?? false,
    }
  })

  return {
    gameDuration: raw.info.gameDuration / 60,
    gameEndTimestamp: raw.info.gameEndTimestamp,
    gamePatch: normalizePatch(raw.info.gameVersion),
    matchId: raw.metadata.matchId,
    participantIds: raw.metadata.participants,
    participants,
    regionId: raw.info.platformId.toLowerCase(),
    mapId: raw.info.mapId ?? 11,
    queueId: raw.info.queueId ?? 420,
    teams,
  }
}
