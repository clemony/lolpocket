// shared/schemas/user.ts
import * as v from "valibot"

// Account
export const accountSchema = v.object({
  puuid: v.nullable(v.pipe(v.string("puuid not a string"))),
  title: v.nullable(v.string("title not a string")),
  username: v.nullable(v.string("username not a string")),
  uuid: v.pipe(v.string(), v.uuid("uuid malformed")),
  peer_messages: v.fallback(v.boolean(), false),
  splash: v.nullable(v.string("splash not a string")),
  //
  created: v.nullable(
    v.pipe(v.string(), v.isoTimestamp("incorrect date format"))
  ),
  updated: v.nullable(
    v.pipe(v.string(), v.isoTimestamp("incorrect date format"))
  ),
})

// Settings
export const settingsSchema = v.object({
  pin_sidebar: v.fallback(v.boolean(), false),
  favorite_pockets: v.fallback(v.array(v.pipe(v.string(), v.uuid())), []),
  favorite_summoners: v.fallback(v.array(v.pipe(v.string(), v.uuid())), []),
  instant_trash: v.fallback(v.boolean(), false),
  language: v.fallback(v.string(), "en"),
  motion: v.fallback(v.boolean(), true),
  once: v.fallback(v.record(v.string(), v.boolean()), {}), // new
  ping_delete_pocket: v.fallback(v.boolean(), true),
  ping_new_pocket: v.fallback(v.boolean(), true),
  show_allies: v.fallback(v.boolean(), true),
  show_flex: v.fallback(v.boolean(), true),
  show_solo: v.fallback(v.boolean(), true),
  theme: v.fallback(v.string(), "daylight"),
  updated: v.pipe(v.string(), v.isoTimestamp("incorrect date format")),
})

// --- Types ---
export type AccountSchema = v.InferOutput<typeof accountSchema>
export type Account = v.InferOutput<typeof accountSchema> & Partial<Summoner>
export type Settings = v.InferOutput<typeof settingsSchema>

// --- Helpers ---
export const getEmptyAccount = () => <Account>v.getDefaults(accountSchema)
export const getEmptySettings = () => <Settings>v.getDefaults(settingsSchema)
