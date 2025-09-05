// server/db/schemas/championSummoners.ts
/* import { integer, primaryKey, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const championSummoners = sqliteTable(
  'champion_summoners',
  {
    championId: integer('champion_id').notNull(),
    summonerSpellId: integer('summoner_spell_id').notNull(),
    teamPosition: text('team_position').notNull(),
    totalGames: integer('total_games').notNull().default(0),
    totalWins: integer('total_wins').notNull().default(0),
  },
  table => [
    primaryKey({ columns: [table.championId, table.summonerSpellId, table.teamPosition] }),
  ],
) */