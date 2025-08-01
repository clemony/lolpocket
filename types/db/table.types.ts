// table.types.ts
import type { Database } from './database.types'

// Base utility type for extracting full table definition
export type TableDefinition<T extends keyof Database['public']['Tables']>
  = Database['public']['Tables'][T]

// Row types (actual structure of a record in the table)
export type TableRow<T extends keyof Database['public']['Tables']>
  = TableDefinition<T>['Row']

// Insert/Update helpers if needed
export type TableInsert<T extends keyof Database['public']['Tables']>
  = TableDefinition<T>['Insert']

export type TableUpdate<T extends keyof Database['public']['Tables']>
  = TableDefinition<T>['Update']

// Named exports for specific tables
export type UserPublicInsert = TableInsert<'user_public'>
export type UserPublicUpdate = TableUpdate<'user_public'>
export type UserPublic = TableRow<'user_public'>
export type UserData = TableRow<'user_data'>
export type UserRoles = TableRow<'user_roles'>
