// shared/schemas/user.ts
import * as v from "valibot"

// Account
export const AccountSchema = v.object({
  name: v.nullable(v.string("name not a string")),
  puuid: v.nullable(v.pipe(v.string("puuid not a string"))),
  title: v.nullable(v.string("title not a string")),
  username: v.nullable(v.string("username not a string")),
  uuid: v.pipe(v.string(), v.uuid("uuid malformed")),
  icon: v.nullable(v.string("icon not a string")),
  level: v.nullable(v.number("level not a number")),
  peer_messages: v.fallback(v.boolean(), false),
  region: v.nullable(v.string("region not a string")),
  splash: v.nullable(v.string("splash not a string")),
  tag: v.nullable(v.string(" not a string")),
  //
  created: v.pipe(v.string(), v.isoTimestamp("incorrect date format")),
  updated: v.pipe(v.string(), v.isoTimestamp("incorrect date format")),
})

// Settings
export const SettingsSchema = v.object({
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
export type Account = v.InferOutput<typeof AccountSchema>
export type Settings = v.InferOutput<typeof SettingsSchema>

// --- Helpers ---
export const getEmptyAccount = () => <Account>v.getDefaults(AccountSchema)
export const getEmptySettings = () => <Settings>v.getDefaults(SettingsSchema)
