// shared/schemas/user.ts
import * as v from 'valibot'

// InboxItem
export const InboxItemSchema = v.object({
  id: v.string(),
  date: v.date(),
  template: v.string(),
  vars: v.record(v.string(), v.string()),
  read: v.optional(v.boolean()), // optional default = undefined
})

// InboxMessage (extends InboxItem)
export const InboxMessageSchema = v.object({
  ...InboxItemSchema.entries,
  title: v.string(),
  content: v.string(),
  from: v.object({
    name: v.string(),
    id: v.string(),
    icon: v.string(),
  }),
  to: v.optional(v.string()),
  trash: v.optional(v.boolean()),
  dateTrashed: v.optional(v.nullable(v.date())),
})

// Account
export const AccountSchema = v.object({
  username: v.fallback(v.string(), 'Summoner'),
  puuid: v.nullable(v.string()),
  name: v.nullable(v.string()),
  tag: v.nullable(v.string()),
  level: v.fallback(v.number(), 0),
  regionGroup: v.fallback(v.string(), 'americas'),
  region: v.nullable(v.string()),
  icon: v.nullable(v.string()),
  inbox: v.object({
    messages: v.fallback(v.array(InboxMessageSchema), []),
    notifications: v.fallback(v.array(InboxItemSchema), []),
  }),
})

// Settings
export const SettingsSchema = v.object({
  theme: v.fallback(v.string(), 'daylight'),
  language: v.fallback(v.string(), 'en'),

  alertNewPocket: v.fallback(v.boolean(), true),
  alertDeletePocket: v.fallback(v.boolean(), true),
  motion: v.fallback(v.boolean(), true),
  noConfirmTrash: v.fallback(v.boolean(), false),
  showSolo: v.fallback(v.boolean(), true),
  showFlex: v.fallback(v.boolean(), true),
  showAllies: v.fallback(v.boolean(), true),
  lockSidebar: v.fallback(v.boolean(), false),
})

// PublicData
export const PublicDataSchema = v.object({
  splash: v.fallback(v.string(), ''),
  title: v.fallback(v.string(), ''),
  peerMessages: v.fallback(v.boolean(), false),
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
export const getEmptyPublicData = () => <PublicData>v.getDefaults(PublicDataSchema)
