/* interface TransformedMatch {
  matchId: string
  duration: number
  mode: string
  gameStart: number
  participants: TransformedParticipant[]
  teams: MatchTeam[]
}

interface TransformedParticipant {
  puuid: number
  name: string
  teamId: number
  championId: number
  kills: number
  deaths: number
  assists: number
  totalDamageDealtToChampions: number
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
    return {
      puuid: p.puuid,
      name: p.riotIdGameName,
      teamId: p.teamId,
      championId: p.championId,
      kills: p.kills,
      deaths: p.deaths,
      assists: p.assists,
      totalDamageDealtToChampions: p.totalDamageDealtToChampions,
      items: p.items,
      runes: {
        keystone: p.runes.keystone,
        primary: p.runes.primary,
        secondary: p.runes.secondary,
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
} */