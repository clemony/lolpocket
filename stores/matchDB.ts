// dexie/matchDB.ts
import Dexie from 'dexie'
import type { Table } from 'dexie'

export class MatchDexie extends Dexie {
  matchData!: Table<MatchData, string> // `string` = matchId as primary key

  constructor() {
    super('MatchDB')
    this.version(1).stores({
      matchData: 'metadata.matchId', // Primary key (must be unique in each match)
    })
  }
}

export const matchDB = new MatchDexie()