import { normalizePatchNumber } from '#shared/utils/normalizePatch'
import type { PlayerStats } from './mvpScoring'
import { calculateMvpScores } from './mvpScoring'

export function transformMatchData(raw: any): MatchData {
  // 1️⃣ Map raw participants into Player
  const participants: Player[] = raw.info.participants.map(
    (p: any): Player => ({
      riotIdGameName: p.riotIdGameName ?? '',
      puuid: p.puuid,
      profileIcon: p.profileIcon,
      riotIdTagline: p.riotIdTagline ?? '',
      teamId: p.teamId,
      teamPosition: p.teamPosition ?? '',
      kills: p.kills,
      deaths: p.deaths,
      assists: p.assists,
      win: p.win ?? false,
      championId: p.championId,
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
      totalHealsOnTeammates: p.totalHealsOnTeammates,
      totalDamageShieldedOnTeammates: p.totalDamageShieldedOnTeammates,
      damageSelfMitigated: p.damageSelfMitigated,
      totalDamageTaken: p.totalDamageTaken,
      timeCCingOthers: p.timeCCingOthers,
      visionScore: p.visionScore,
      wardsPlaced: p.wardsPlaced,
      wardsKilled: p.wardsKilled,
      turretKills: p.turretKills,
      objectivesStolen: p.objectivesStolen,
      dragonKills: p.dragonKills,
      soloKills: p.soloKills,
      doubleKills: p.doubleKills,
      tripleKills: p.tripleKills,
      quadraKills: p.quadraKills,
      pentaKills: p.pentaKills,
      neutralMinionsKilled: p.neutralMinionsKilled,
      goldEarned: p.goldEarned,
      totalMinionsKilled: p.totalMinionsKilled,

      challenges: {
        controlWardsPlaced: p.challenges?.controlWardsPlaced ?? 0,
        damageTakenOnTeamPercentage:
          p.challenges?.damageTakenOnTeamPercentage ?? 0,
        effectiveHealAndShielding: p.challenges?.effectiveHealAndShielding ?? 0,
        kda: p.challenges?.kda ?? 0,
        killingSprees: p.challenges?.killingSprees ?? 0,
        saveAllyFromDeath: p.challenges?.saveAllyFromDeath ?? 0,
        killParticipation: p.challenges?.killParticipation ?? 0,
        teamDamagePercentage: p.challenges?.teamDamagePercentage ?? 0,
      },

      perks: {
        keystone: p.perks?.styles?.[0]?.selections?.[0]?.perk ?? 0,
        primary: p.perks?.styles?.[0]?.style ?? 0,
        secondary: p.perks?.styles?.[1]?.style ?? 0,
      },

      // placeholder, will overwrite after MVP calculation
      mvpScore: 0,
    }),
  )

  // 2️⃣ Prepare PlayerStats for MVP
  const playerStats: PlayerStats[] = participants.map(p => ({
    matchId: raw.metadata.matchId,
    puuid: p.puuid,
    teamId: p.teamId,
    teamPosition: p.teamPosition,
    championId: p.championId,
    win: p.win,
    kills: p.kills,
    deaths: p.deaths,
    assists: p.assists,
    goldEarned: p.goldEarned,
    totalMinionsKilled: p.totalMinionsKilled,
    totalDamageDealtToChampions: p.totalDamageDealtToChampions,
    effectiveHealAndShielding:
      (p.totalHealsOnTeammates || 0) + (p.totalDamageShieldedOnTeammates || 0),
    totalDamageShieldedOnTeammates: p.totalDamageShieldedOnTeammates,
    totalHealsOnTeammates: p.totalHealsOnTeammates,
    damageSelfMitigated: p.damageSelfMitigated,
    totalDamageTaken: p.totalDamageTaken,
    timeCCingOthers: p.timeCCingOthers,
    visionScore: p.visionScore,
    turretKills: p.turretKills,
    dragonKills: p.dragonKills,
    objectivesStolen: p.objectivesStolen,
    challenges: {
      killParticipation: p.challenges.killParticipation,
      teamDamagePercentage: p.challenges.teamDamagePercentage,
      damageTakenOnTeamPercentage: p.challenges.damageTakenOnTeamPercentage,
      saveAllyFromDeath: p.challenges.saveAllyFromDeath,
    },
  }))

  // 3️⃣ Calculate MVP scores
  const mvpScores = calculateMvpScores(playerStats)

  // 4️⃣ Inject MVP into participants
  for (const participant of participants) {
    participant.mvpScore = mvpScores[participant.puuid] ?? 0
  }

  // … continue mapping teams and matchData as before
  const teams: MatchTeam[] = raw.info.teams.map((team: any): MatchTeam => {
    const teamParticipants = participants.filter(p => p.teamId === team.teamId)

    return {
      teamId: team.teamId,
      win: team.win,
      gold: teamParticipants.reduce((sum, p) => sum + p.goldEarned, 0),
      kills: teamParticipants.reduce((sum, p) => sum + p.kills, 0),
      deaths: teamParticipants.reduce((sum, p) => sum + p.deaths, 0),
      assists: teamParticipants.reduce((sum, p) => sum + p.assists, 0),
      feats: {
        EPIC_MONSTER_KILL: team.feats?.EPIC_MONSTER_KILL?.featState ?? 0,
        FIRST_BLOOD: team.feats?.FIRST_BLOOD?.featState ?? 0,
        FIRST_TURRET: team.feats?.FIRST_TURRET?.featState ?? 0,
      },
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
    }
  })

  return {
    matchId: raw.metadata.matchId,
    endOfGameResult: raw.info.endOfGameResult,
    gameDuration: raw.info.gameDuration,
    gameEndTimestamp: raw.info.gameEndTimestamp,
    gamePatch: normalizePatchNumber(raw.info.gameVersion),
    queueId: raw.info.queueId ?? 420,
    participants,
    participantIds: raw.metadata.participants,
    teams,
  }
}