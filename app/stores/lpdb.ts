import type { Table } from 'dexie'
import Dexie from 'dexie'

export interface MatchCursor {
  puuid: string
  lastIndex: number
}

export class LPDB extends Dexie {
  matchData!: Table<MatchData, string>
  matchCursor!: Table<MatchCursor, string>
  matchTimeline!: Table<MatchTimeline, string>
  playerChampionMastery!: Table<ChampionMastery, [string, number]>
  summonerMastery!: Table<SummonerMastery, string>

  constructor() {
    super('Lpdb')

    this.version(1).stores({
      matchData: `
    matchId,
    *participantIds,
    creation,
    queueId,
    lastAccessedAt
  `,

      matchCursor: `puuid, lastIndex`,

      matchTimeline: `
    matchId,
    *participantIds,
    lastAccessedAt
  `,

      playerChampionMastery: `
    &[puuid+championId],
    puuid,
    championId,
    lastAccessedAt
  `,

      summonerMastery: `
    &puuid,
    updated
  `,
    })
  }
}

export const lpdb = new LPDB()
