import * as v from 'valibot'

// InboxItem
export const InboxItemSchema = v.object({
  id: v.string(),
  date: v.pipe(v.string(), v.isoTimestamp('incorrect date format')),
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
  trash: v.optional(
    v.pipe(v.string(), v.isoTimestamp('incorrect date format'))
  ),
})

// Inbox

export const InboxSchema = v.fallback(
  v.object({
    messages: v.fallback(v.array(InboxMessageSchema), []),
    notifications: v.fallback(v.array(InboxItemSchema), []),
  }),
  { messages: [], notifications: [] }
)

// --- Helpers ---
// export const getEmptyInbox = () => <Account>getDeepDefaults(InboxSchema)
