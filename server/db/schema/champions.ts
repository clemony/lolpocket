// server/db/schemas/champions.ts
import { integer, primaryKey, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const champions = sqliteTable(
  'champions',
  {
    championId: integer('champion_id').notNull(),
    teamPosition: text('team_position').notNull(),
    totalGames: integer('total_games').notNull().default(0),
    totalWins: integer('total_wins').notNull().default(0),
  },
  table => [
    primaryKey({ columns: [table.championId, table.teamPosition] }),
  ],
)