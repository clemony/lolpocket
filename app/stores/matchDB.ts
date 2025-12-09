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
  playerChampions!: Table<PlayerChampionData, [string, number]> // [puuid+champId]

  constructor() {
    super("MatchDB")

    this.version(1).stores({
      matchData: `
        matchId,
        *participantIds,
        creation
      `,
    })

    this.version(2).stores({
      matchCursor: `puuid, lastIndex`,
    })

    this.version(3).stores({
      matchTimeline: `
        matchId,
        *participantIds
      `,
    })

    this.version(4).stores({
      playerChampions: `
        &[puuid+championId],
        puuid,
        championId
      `,
    })
  }
}

export const matchDB = new MatchDB()
