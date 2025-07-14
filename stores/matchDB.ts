// dexie/matchDB.ts
import type { Table } from "dexie"
import Dexie from "dexie"

export class MatchDexie extends Dexie {
  matchData!: Table<MatchData, string> // full match
  simplifiedMatchData!: Table<SimplifiedMatchData, string> // simplified

  constructor() {
    super("MatchDB")
    this.version(1).stores({
      matchData: "metadata.matchId",
      simplifiedMatchData: "matchId",
    })
  }
}

export const matchDB = new MatchDexie()
