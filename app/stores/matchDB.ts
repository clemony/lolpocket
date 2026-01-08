import type { Table } from "dexie"
import Dexie from "dexie"

export interface MatchCursor {
  puuid: string
  lastIndex: number
}

export class MatchDB extends Dexie {
  matchData!: Table<MatchData, string>
  matchCursor!: Table<MatchCursor, string>
  matchTimeline!: Table<MatchTimeline, string>
  playerChampions!: Table<PlayerChampionStats, [string, number]>
  playerChampionMastery!: Table<PlayerChampionMastery, [string, number]>
  summonerMastery!: Table<SummonerMastery, string>

  constructor() {
    super("MatchDB")

    this.version(2).stores({
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

      playerChampions: `
    &[puuid+championId],
    puuid,
    championId,
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

export const matchDB = new MatchDB()
