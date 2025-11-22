import type { Table } from "dexie"
import Dexie from "dexie"

export interface MatchCursor {
  puuid: string
  lastIndex: number
}

export class MatchDexie extends Dexie {
  matchData!: Table<MatchData, string> // matchId primary key
  matchCursor!: Table<MatchCursor, string>

  constructor() {
    super("MatchDB")

    // version 1 was your original schema
    this.version(1).stores({
      matchData: `
        matchId,
        *participantIds,
        creation
      `,
    })

    // version 2 adds the cursor table
    this.version(2).stores({
      matchCursor: `puuid, lastIndex`,
    })
  }
}

export const matchDB = new MatchDexie()
