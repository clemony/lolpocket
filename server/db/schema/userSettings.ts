import { boolean, integer, jsonb, pgTable, text, varchar } from 'drizzle-orm/pg-core'
import { userData } from './userAccount'

// Separated settings table
export const userSettings = pgTable('user_settings', {
  userId: varchar('user_id')
    .primaryKey()
    .references(() => userData.id),

  alertNewPocket: boolean('alert_new_pocket').default(true),
  alertDeletePocket: boolean('alert_delete_pocket').default(true),
  motion: boolean('motion').default(true),
  noConfirmTrash: boolean('no_confirm_trash').default(false),
  showSolo: boolean('show_solo').default(true),
  showFlex: boolean('show_flex').default(true),
  showAllies: boolean('show_allies').default(true),
  theme: varchar('theme', { length: 50 }).default('light'),

  dockX: integer('dock_x').default(50),
  dockY: integer('dock_y').default(200),
  dockSide: varchar('dock_side', { length: 20 }).default('left'),
})