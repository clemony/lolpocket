import type {
  inboxMessageRecordSchema,
  inboxMessageSchema,
  inboxNotificationRecordSchema,
  inboxParticipantSchema,
  inboxSchema
} from "#shared/schema"
import type { AvatarProps, ButtonProps } from "@nuxt/ui"
import type { DateLike } from "@vueuse/core"
import type * as v from "valibot"

export interface InboxBadge {
  class?: string
  icon?: IconObject
  text?: string
}
export interface IconObject {
  name: string
  alt?: IconObject
  class?: string | string[]
  modifier?: IconObject
}

export interface InboxType {
  name: string
  component?: any
  data?: object
  icon?: IconObject
  value?: number
}

export type Inbox = v.InferOutput<typeof inboxSchema>
export type InboxMessageRecord = v.InferOutput<typeof inboxMessageRecordSchema>
export type InboxMessage = v.InferOutput<typeof inboxMessageSchema>
export type InboxNotification = v.InferOutput<
  typeof inboxNotificationRecordSchema
>
export type InboxParticipant = v.InferOutput<typeof inboxParticipantSchema>
export type InboxItem = InboxNotification
export type SenderReceiver = InboxParticipant

export type InboxTemplateFactory = (
  vars: Record<string, string>
) => InboxTemplate

export interface InboxTemplate {
  action?: ButtonProps
  avatar?: AvatarProps
  date?: DateLike
  header?: string
  text?: string
  footer?: string
}
