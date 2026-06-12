import type { ButtonProps, EmptyProps, TooltipProps } from "@nuxt/ui"
import type { TooltipContentProps } from "reka-ui"

export interface CommandMessage extends InboxMessage {
  component: Component
  onClick: () => void
}

export interface CommandNotification extends InboxNotification {
  component: Component
}

export interface CommandButton {
  component: Component
  props: ButtonProps
}

export interface ActionProps extends ButtonProps {
  tooltip?: TooltipProps & TooltipContentProps
}

export interface Box {
  label: string
  count?: number
  items: Array<CommandMessage | CommandNotification | CommandButton | null>
  to?: string
  empty: EmptyProps
  actions: ActionProps[]
}
