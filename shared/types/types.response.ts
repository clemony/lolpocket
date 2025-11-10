import type { JwtPayload as rawJwtPayload, User } from '@supabase/supabase-js'

export type JwtPayload = rawJwtPayload
export type JwtUser = User

export interface OgResponse {
  title: string
  description: string
  image: string
  url: string
}
export interface PatchNotesData extends OgResponse {
  patch: string
}
