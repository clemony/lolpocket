// server/db/schemas/championRunes.ts
/* import { integer, primaryKey, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const championRunes = sqliteTable(
  'champion_runes',
  {
    championId: integer('champion_id').notNull(),
    runeId: integer('rune_id').notNull(),
    teamPosition: text('team_position').notNull(),
    totalGames: integer('total_games').notNull().default(0),
    totalWins: integer('total_wins').notNull().default(0),
  },
  table => [
    primaryKey({ columns: [table.championId, table.runeId, table.teamPosition] }),
  ],
) */