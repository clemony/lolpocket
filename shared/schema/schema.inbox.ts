import * as v from "valibot"

const uuidSchema = v.pipe(v.string(), v.uuid("invalid user uuid"))
const timestampSchema = v.pipe(
  v.string(),
  v.isoTimestamp("incorrect date format")
)

export const inboxParticipantSchema = v.object({
  uuid: uuidSchema,
  name: v.nullable(v.string()),
  username: v.nullable(v.string()),
  icon: v.nullable(v.string())
})

export const inboxNotificationRecordSchema = v.object({
  id: v.pipe(v.string(), v.uuid("invalid notification id")),
  recipient_uuid: uuidSchema,
  // actor_uuid: v.nullable(uuidSchema),
  template: v.string(),
  vars: v.fallback(v.record(v.string(), v.string()), {}),
  related_type: v.nullable(v.string()),
  related_id: v.nullable(v.string()),
  created_at: timestampSchema,
  read_at: v.nullable(timestampSchema),
  dismissed_at: v.nullable(timestampSchema)
})

export const inboxMessageRecordSchema = v.object({
  id: v.pipe(v.string(), v.uuid("invalid message id")),
  recipient_uuid: uuidSchema,
  sender_uuid: uuidSchema,
  title: v.string(),
  content: v.any(),
  preview: v.fallback(v.string(), ""),
  can_reply: v.fallback(v.boolean(), false),
  created_at: timestampSchema,
  read_at: v.nullable(timestampSchema),
  archived_at: v.nullable(timestampSchema),
  trashed_at: v.nullable(timestampSchema),
  deleted_at: v.nullable(timestampSchema)
})

export const inboxMessageSchema = v.object({
  ...inboxMessageRecordSchema.entries,
  from: inboxParticipantSchema,
  to: inboxParticipantSchema
})

export const inboxSchema = v.fallback(
  v.object({
    messages: v.fallback(v.array(inboxMessageSchema), []),
    notifications: v.fallback(v.array(inboxNotificationRecordSchema), [])
  }),
  { messages: [], notifications: [] }
)
