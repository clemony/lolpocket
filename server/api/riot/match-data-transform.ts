interface TransformedMatch {
  matchId: string
  duration: number
  mode: string
  gameStart: number
  participants: TransformedParticipant[]
  teams: MatchTeam[]
}

interface TransformedParticipant {
  puuid: number
  riotIdGameName: string
  teamId: number
  championId: number
  kda: string
  killParticipation: string
  totalDamage: number
  items: number[]
  runes: {
    keystone: number
    primary: number
    secondary: number
  }
}

export function transformMatch(raw: MatchData): TransformedMatch {
  const { matchId } = raw.metadata
  const { gameDuration, gameMode, gameStartTimestamp, participants } = raw.info

  const transformedParticipants: TransformedParticipant[] = participants.map((p) => {
    const totalKills = raw.info.participants.reduce((acc, cur) => cur.teamId === p.teamId ? acc + cur.kills : acc, 0)
    const killParticipation = totalKills > 0 ? (p.kills + p.assists) / totalKills : 0

    return {
      puuid: p.puuid,
      riotIdGameName: p.riotIdGameName ?? '', // fallback in case it's undefined
      teamId: p.teamId,
      championId: p.championId,
      kda: `${p.kills}/${p.deaths}/${p.assists}`,
      killParticipation: `${(killParticipation * 100).toFixed(1)}%`,
      totalDamage: p.totalDamageDealtToChampions,
      items: [p.item0, p.item1, p.item2, p.item3, p.item4, p.item5, p.item6],
      runes: {
        keystone: p.perks.keystone,
        primary: p.perks.primary,
        secondary: p.perks.secondary,
      },
    }
  })

  return {
    matchId,
    duration: gameDuration,
    mode: gameMode,
    gameStart: gameStartTimestamp,
    participants: transformedParticipants,
    teams: raw.teams,
  }
}