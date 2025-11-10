// shared/schemas/user.ts
import * as v from 'valibot'

// Account
export const AccountSchema = v.object({
  name: v.nullable(v.string()),
  uuid: v.pipe(v.string(),v.uuid()),
  puuid: v.nullable(v.pipe(v.string(),v.uuid())),
  username: v.fallback(v.string(), 'Summoner'),
  icon: v.nullable(v.string()),
  level: v.fallback(v.number(), 0),
  region: v.nullable(v.string()),
  tag: v.nullable(v.string()),
  title: v.nullable(v.string()),
  peer_messages: v.fallback(v.boolean(), false),
  splash: v.fallback(v.string(), ''),
})


// Settings
export const SettingsSchema = v.object({
    favorite_pockets: v.fallback(v.array(v.pipe(v.string(),v.uuid())), []),
   favorite_summoners: v.fallback(v.array(v.pipe(v.string(),v.uuid())), []),
  pin_sidebar: v.fallback(v.boolean(), false),
  ping_delete_pocket: v.fallback(v.boolean(), true),
  ping_new_pocket: v.fallback(v.boolean(), true),
  language: v.fallback(v.string(), 'en'),
  motion: v.fallback(v.boolean(), true),
  instant_trash: v.fallback(v.boolean(), false),
  show_allies: v.fallback(v.boolean(), true),
  show_flex: v.fallback(v.boolean(), true),
  show_solo: v.fallback(v.boolean(), true),
  theme: v.fallback(v.string(), 'daylight'),
  once: v.fallback(v.record(v.string(), v.boolean()), {}), // new
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
