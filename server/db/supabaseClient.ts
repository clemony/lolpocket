import 'dotenv/config'
import { pgTable, serial, text, varchar } from 'drizzle-orm/pg-core'
import process from 'node:process'

import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  fullName: text('full_name'),
  phone: varchar('phone', { length: 256 }),
})

const connectionString = process.env.DATABASE_URL

// Disable prefetch as it is not supported for "Transaction" pool mode
export const client = postgres(connectionString, { prepare: false })
export const db = drizzle(client)