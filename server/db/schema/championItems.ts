// server/db/schemas/championItems.ts
/* import { integer, primaryKey, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const championItems = sqliteTable(
  'champion_items',
  {
    championId: integer('champion_id').notNull(),
    itemId: integer('item_id').notNull(),
    teamPosition: text('team_position').notNull(),
    totalGames: integer('total_games').notNull().default(0),
    totalWins: integer('total_wins').notNull().default(0),
  },
  table => [
    primaryKey({ columns: [table.championId, table.itemId, table.teamPosition] }),
  ],
) */