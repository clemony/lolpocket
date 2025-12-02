export function transformMatchData(raw: any): MatchData {
  // map raw participants into player
  const participants: Player[] = raw.info.participants.map(
    (p: any): Player => ({
      puuid: p.puuid,
      riotIdGameName: p.riotIdGameName ?? "",
      riotIdTagline: p.riotIdTagline ?? "",
      profileIcon: p.profileIcon,
      teamId: p.teamId,
      teamPosition: p.teamPosition ?? "",
      championId: p.championId,

      //
      stats: {
        kills: {
          total: p.kills,
          killingSprees: p.challenges?.killingSprees ?? 0,
          tripleKills: p.tripleKills,
          doubleKills: p.doubleKills,
          quadraKills: p.quadraKills,
          pentaKills: p.pentaKills,
        },
        deaths: p.deaths,
        assists: p.assists,
        kda: p.challenges?.kda ?? 0,
        kp: p.challenges?.killParticipation ?? 0,
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
        totalDamage: {
          name: "Total damage to champions",
          value: p.totalDamageDealtToChampions,
        },
        damagePercentage: {
          name: "Team damage percentage",
          value: p.challenges?.teamDamagePercentage ?? 0,
        },
      },

      //
      defense: {
        totalDamageTaken: {
          name: "Total damage taken",
          value: p.totalDamageTaken,
        },
        damageTakenPercentage: {
          name: "Damage taken of team total",
          value: p.challenges?.damageTakenOnTeamPercentage ?? 0,
        },
        damageSelfMitigated: {
          name: "Damage self-mitigated",
          value: p.damageSelfMitigated,
        },
        ccDuration: {
          name: "Crowd-control duration on enemies",
          value: p.timeCCingOthers,
        },
      },

      //

      utility: {
        effectiveHealingAndShielding: {
          name: "effective healing and shielding",
          value: p.challenges?.effectiveHealAndShielding ?? 0,
        },
        totalAllyHealing: {
          name: "total ally healing",
          value: p.totalHealsOnTeammates,
        },
        totalAllyShielding: {
          name: "total ally shielding",
          value: p.totalDamageShieldedOnTeammates,
        },
        allySaves: {
          name: "ally saves from death",
          value: p.challenges?.saveAllyFromDeath ?? 0,
        },
      },

      //
      farming: {
        goldEarned: {
          name: "gold earned",
          value: p.goldEarned,
        },
        minionsKilled: {
          name: "total minions killed",
          value: p.totalMinionsKilled,
        },
        neutralMinionsKilled: {
          name: "neutral minions killed",
          value: p.neutralMinionsKilled,
        },
        turretsKilled: {
          name: "turrets killed",
          value: p.turretKills,
        },
        objectivesStolen: {
          name: "objectives stolen",
          value: p.objectivesStolen,
        },
      },

      //
      vision: {
        visionScore: {
          name: "vision score",
          value: p.visionScore,
        },
        wardsKilled: {
          name: "wards killed",
          value: p.wardsKilled,
        },
        wardsPlaced: {
          name: "wards placed",
          value: p.wardsPlaced,
        },
        controlWardsPlaced: {
          name: "control wards placed",
          value: p.challenges?.controlWardsPlaced ?? 0,
        },
      },

      //
      win: p.win ?? false,

      // placeholder, will overwrite after MVP calculation
      mvpScore: 0,
    })
  )

  // prep stats for mvp
  const playerStats = raw.info.participants.map((p: any) => ({
    puuid: p.puuid,
    assists: p.assists,
    challenges: {
      damageTakenOnTeamPercentage: p.challenges.damageTakenOnTeamPercentage,
      killParticipation: p.challenges.killParticipation,
      saveAllyFromDeath: p.challenges.saveAllyFromDeath,
      teamDamagePercentage: p.challenges.teamDamagePercentage,
    },
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
  }))

  // calc mvp scores
  const mvpScores = calculateMvpScores(playerStats)

  // inject mvp into player
  for (const participant of participants) {
    participant.mvpScore = mvpScores[participant.puuid] ?? 0
  }

  // continue mapping
  const teams: MatchTeam[] = raw.info.teams.map((team: any): MatchTeam => {
    const teamParticipants = participants.filter(
      (p) => p.teamId === team.teamId
    )

    return {
      assists: teamParticipants.reduce((sum, p) => sum + p.stats.assists, 0),
      deaths: teamParticipants.reduce((sum, p) => sum + p.stats.deaths, 0),
      feats: {
        EPIC_MONSTER_KILL: team.feats?.EPIC_MONSTER_KILL?.featState ?? 0,
        FIRST_BLOOD: team.feats?.FIRST_BLOOD?.featState ?? 0,
        FIRST_TURRET: team.feats?.FIRST_TURRET?.featState ?? 0,
      },
      gold: teamParticipants.reduce(
        (sum, p) => sum + p.farming.goldEarned.value,
        0
      ),
      kills: teamParticipants.reduce((sum, p) => sum + p.stats.kills.total, 0),
      objectives: {
        atakhan: team.objectives?.atakhan.kills ?? 0,
        baron: team.objectives?.baron.kills ?? 0,
        champion: team.objectives?.champion.kills ?? 0,
        dragon: team.objectives?.dragon.kills ?? 0,
        horde: team.objectives?.horde.kills ?? 0,
        inhibitor: team.objectives?.inhibitor.kills ?? 0,
        riftHerald: team.objectives?.riftHerald.kills ?? 0,
        tower: team.objectives?.tower.kills ?? 0,
      },
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
    queueId: raw.info.queueId ?? 420,
    teams,
  }
}
