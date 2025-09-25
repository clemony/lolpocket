// shared/schemas/user.ts
import * as v from 'valibot'

// InboxItem
export const InboxItemSchema = v.object({
  id: v.string(),
  date: v.number(),
  read: v.optional(v.boolean()), // optional default = undefined
  template: v.string(),
  vars: v.record(v.string(), v.string()),
})

// InboxMessage (extends InboxItem)
export const InboxMessageSchema = v.object({
  ...InboxItemSchema.entries,
  title: v.string(),
  content: v.string(),
  dateTrashed: v.optional(v.nullable(v.number())),
  from: v.object({
    id: v.string(),
    name: v.string(),
    icon: v.string(),
  }),
  to: v.optional(v.string()),
  trash: v.optional(v.boolean()),
})

// Account
export const AccountSchema = v.object({
  name: v.nullable(v.string()),
  puuid: v.nullable(v.string()),
  username: v.fallback(v.string(), 'Summoner'),
  icon: v.nullable(v.string()),
  inbox: v.object({
    messages: v.fallback(v.array(InboxMessageSchema), []),
    notifications: v.fallback(v.array(InboxItemSchema), []),
  }),
  level: v.fallback(v.number(), 0),
  region: v.nullable(v.string()),
  regionGroup: v.fallback(v.string(), 'americas'),
  tag: v.nullable(v.string()),
})

// Settings
export const SettingsSchema = v.object({
  lockSidebar: v.fallback(v.boolean(), false),
  alertDeletePocket: v.fallback(v.boolean(), true),
  alertNewPocket: v.fallback(v.boolean(), true),
  language: v.fallback(v.string(), 'en'),
  motion: v.fallback(v.boolean(), true),
  noConfirmTrash: v.fallback(v.boolean(), false),
  profileSplashHeader: v.fallback(v.boolean(), true), // new
  showAllies: v.fallback(v.boolean(), true),
  showFlex: v.fallback(v.boolean(), true),
  showSolo: v.fallback(v.boolean(), true),
  theme: v.fallback(v.string(), 'daylight'),
})

// PublicData
export const PublicDataSchema = v.object({
  title: v.fallback(v.string(), ''),
  peerMessages: v.fallback(v.boolean(), false),
  splash: v.fallback(v.string(), ''),
})

// --- Types ---
export type InboxItem = v.InferOutput<typeof InboxItemSchema>
export type InboxMessage = v.InferOutput<typeof InboxMessageSchema>
export type Account = v.InferOutput<typeof AccountSchema>
export type Settings = v.InferOutput<typeof SettingsSchema>
export type PublicData = v.InferOutput<typeof PublicDataSchema>

// --- Helpers ---
export const getEmptyAccount = () => <Account>v.getDefaults(AccountSchema)
export const getEmptySettings = () => <Settings>v.getDefaults(SettingsSchema)
export function getEmptyPublicData() {
  return <PublicData>v.getDefaults(PublicDataSchema)
}
