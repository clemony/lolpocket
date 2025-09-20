import { normalizePatchNumber } from '#shared/utils/normalizePatch'

export function transformMatchData(raw: any): MatchData {
  // 1️⃣ Map raw participants into Player
  const participants: Player[] = raw.info.participants.map(
    (p: any): Player => ({
      puuid: p.puuid,
      assists: p.assists,
      challenges: {
        controlWardsPlaced: p.challenges?.controlWardsPlaced ?? 0,
        damageTakenOnTeamPercentage:
          p.challenges?.damageTakenOnTeamPercentage ?? 0,
        effectiveHealAndShielding: p.challenges?.effectiveHealAndShielding ?? 0,
        kda: p.challenges?.kda ?? 0,
        killingSprees: p.challenges?.killingSprees ?? 0,
        killParticipation: p.challenges?.killParticipation ?? 0,
        saveAllyFromDeath: p.challenges?.saveAllyFromDeath ?? 0,
        teamDamagePercentage: p.challenges?.teamDamagePercentage ?? 0,
      },
      championId: p.championId,
      damageSelfMitigated: p.damageSelfMitigated,
      deaths: p.deaths,
      doubleKills: p.doubleKills,
      dragonKills: p.dragonKills,
      goldEarned: p.goldEarned,
      item0: p.item0,
      item1: p.item1,
      item2: p.item2,
      item3: p.item3,
      item4: p.item4,
      item5: p.item5,
      item6: p.item6,
      kills: p.kills,
      neutralMinionsKilled: p.neutralMinionsKilled,
      objectivesStolen: p.objectivesStolen,
      pentaKills: p.pentaKills,
      perks: {
        keystone: p.perks?.styles?.[0]?.selections?.[0]?.perk ?? 0,
        primary: p.perks?.styles?.[0]?.style ?? 0,
        secondary: p.perks?.styles?.[1]?.style ?? 0,
      },
      profileIcon: p.profileIcon,
      quadraKills: p.quadraKills,
      riotIdGameName: p.riotIdGameName ?? '',
      riotIdTagline: p.riotIdTagline ?? '',
      soloKills: p.soloKills,
      summoner1Id: p.summoner1Id,
      summoner2Id: p.summoner2Id,
      teamId: p.teamId,
      teamPosition: p.teamPosition ?? '',
      timeCCingOthers: p.timeCCingOthers,
      totalDamageDealtToChampions: p.totalDamageDealtToChampions,
      totalDamageShieldedOnTeammates: p.totalDamageShieldedOnTeammates,
      totalDamageTaken: p.totalDamageTaken,
      totalHealsOnTeammates: p.totalHealsOnTeammates,
      totalMinionsKilled: p.totalMinionsKilled,
      tripleKills: p.tripleKills,
      turretKills: p.turretKills,
      visionScore: p.visionScore,
      wardsKilled: p.wardsKilled,
      wardsPlaced: p.wardsPlaced,
      win: p.win ?? false,

      // placeholder, will overwrite after MVP calculation
      mvpScore: 0,
    })
  )

  // 2️⃣ Prepare PlayerStats for MVP
  const playerStats: PlayerStats[] = participants.map(p => ({
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

  // 3️⃣ Calculate MVP scores
  const mvpScores = calculateMvpScores(playerStats)

  // 4️⃣ Inject MVP into participants
  for (const participant of participants) {
    participant.mvpScore = mvpScores[participant.puuid] ?? 0
  }

  // … continue mapping teams and matchData as before
  const teams: MatchTeam[] = raw.info.teams.map((team: any): MatchTeam => {
    const teamParticipants = participants.filter(
      p => p.teamId === team.teamId
    )

    return {
      assists: teamParticipants.reduce((sum, p) => sum + p.assists, 0),
      deaths: teamParticipants.reduce((sum, p) => sum + p.deaths, 0),
      feats: {
        EPIC_MONSTER_KILL: team.feats?.EPIC_MONSTER_KILL?.featState ?? 0,
        FIRST_BLOOD: team.feats?.FIRST_BLOOD?.featState ?? 0,
        FIRST_TURRET: team.feats?.FIRST_TURRET?.featState ?? 0,
      },
      gold: teamParticipants.reduce((sum, p) => sum + p.goldEarned, 0),
      kills: teamParticipants.reduce((sum, p) => sum + p.kills, 0),
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
    gamePatch: normalizePatchNumber(raw.info.gameVersion),
    matchId: raw.metadata.matchId,
    participantIds: raw.metadata.participants,
    participants,
    queueId: raw.info.queueId ?? 420,
    teams,
  }
}
