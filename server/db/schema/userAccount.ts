import { boolean, integer, jsonb, pgTable, text, varchar } from 'drizzle-orm/pg-core'

// Core user account data (auth-linked)
export const userData = pgTable('user_account', {
  id: varchar('id').primaryKey(), // Supabase UUID
  name: varchar('name', { length: 255 }),
  role: varchar('role', { length: 50 }),

  // Riot identity as JSONB (so you can evolve fields without migrations)
  riot: jsonb('riot').$type<{
    puuid: string
    name: string
    tag: string
    region: string
    profileIcon: string
  }>(),

  // Pockets as JSONB (if it’s structured but not relational yet)
  pockets: jsonb('pockets').$type<UserPockets>(),

  inbox: jsonb('inbox').$type<{
    messages: InboxMessage[]
    notifications: InboxItem[]
  }>(),

  createdAt: text('created_at').default('now()'),
})
