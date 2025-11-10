// shared/schemas/user.ts
import * as v from 'valibot'

// Account
export const AccountSchema = v.object({
  name: v.nullable(v.string()),
  puuid: v.nullable(v.pipe(v.string(), v.uuid())),
  title: v.nullable(v.string()),
  username: v.fallback(v.string(), 'Summoner'),
  uuid: v.pipe(v.string(), v.uuid()),
  icon: v.nullable(v.string()),
  level: v.fallback(v.number(), 0),
  peer_messages: v.fallback(v.boolean(), false),
  region: v.nullable(v.string()),
  splash: v.fallback(v.string(), ''),
  tag: v.nullable(v.string()),
})

// Settings
export const SettingsSchema = v.object({
  pin_sidebar: v.fallback(v.boolean(), false),
  favorite_pockets: v.fallback(v.array(v.pipe(v.string(), v.uuid())), []),
  favorite_summoners: v.fallback(v.array(v.pipe(v.string(), v.uuid())), []),
  instant_trash: v.fallback(v.boolean(), false),
  language: v.fallback(v.string(), 'en'),
  motion: v.fallback(v.boolean(), true),
  once: v.fallback(v.record(v.string(), v.boolean()), {}), // new
  ping_delete_pocket: v.fallback(v.boolean(), true),
  ping_new_pocket: v.fallback(v.boolean(), true),
  show_allies: v.fallback(v.boolean(), true),
  show_flex: v.fallback(v.boolean(), true),
  show_solo: v.fallback(v.boolean(), true),
  theme: v.fallback(v.string(), 'daylight'),
})

// PublicData
export const PublicDataSchema = v.object({
})

// --- Types ---
export type Account = v.InferOutput<typeof AccountSchema>
export type Settings = v.InferOutput<typeof SettingsSchema>
export type PublicData = v.InferOutput<typeof PublicDataSchema>

// --- Helpers ---
export const getEmptyAccount = () => <Account>v.getDefaults(AccountSchema)
export const getEmptySettings = () => <Settings>v.getDefaults(SettingsSchema)
