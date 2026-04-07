import type {
  InboxItemSchema,
  InboxMessageSchema,
  InboxSchema
} from "#shared/schema"
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

export type Inbox = v.InferOutput<typeof InboxSchema>
export type InboxItem = v.InferOutput<typeof InboxItemSchema>
export type InboxMessage = v.InferOutput<typeof InboxMessageSchema>

export type InboxTemplateFactory = (
  vars: Record<string, string>
) => InboxTemplate

export interface InboxTemplate {
  title: string
  action?: {
    type: string
    function: any
    text?: string
    icon?: IconObject
  }
  badge?: InboxBadge
}
