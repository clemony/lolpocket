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

// Inbox

export const InboxSchema = v.fallback(v.object({
  messages: v.fallback(v.array(InboxMessageSchema), []),
  notifications: v.fallback(v.array(InboxItemSchema), []),
}), { messages: [], notifications: [] })

// --- Types ---
export type Inbox = v.InferOutput<typeof InboxSchema>
export type InboxItem = v.InferOutput<typeof InboxItemSchema>
export type InboxMessage = v.InferOutput<typeof InboxMessageSchema>

// --- Helpers ---
// export const getEmptyInbox = () => <Account>getDeepDefaults(InboxSchema)