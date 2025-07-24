import { normalizePatchNumber } from '../../app/utils/normalize/normalizePatch'

// utils/simplify-match.ts
export function simplifyMatchData(
  puuid: string,
  match: MatchData,
): SimplifiedMatchData | null {
  const participant = match.info.participants.find(p => p.puuid === puuid)
  if (!participant)
    return null

  return {
    matchId: match.metadata.matchId,
    puuid: participant.puuid,
    gameCreation: match.info.gameCreation,
    gameEndTimestamp: match.info.gameEndTimestamp,
    gameVersion: normalizePatchNumber(match.info.gameVersion),
    win: participant.win,
    kills: participant.kills,
    deaths: participant.deaths,
    assists: participant.assists,
    killParticipation: participant.challenges?.killParticipation ?? 0,
    queueId: match.queueId,
    championName: participant.championName,
    championId: participant.championId,
    teamPosition: participant.teamPosition,
    item0: participant.item0,
    item1: participant.item1,
    item2: participant.item2,
    item3: participant.item3,
    item4: participant.item4,
    item5: participant.item5,
    item6: participant.item6,
    perks: {
      keystone: participant.perks?.keystone ?? 0,
      primary: participant.perks?.primary ?? 0,
      secondary: participant.perks?.secondary ?? 0,
    },
    participants: match.info.participants.map(p => ({
      riotIdGameName: p.riotIdGameName,
      profileIcon: p.profileIcon,
    })),
  }
}
0
