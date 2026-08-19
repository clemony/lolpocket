import type {
  AvatarProps,
  BadgeProps,
  ButtonProps,
  CommandPaletteGroup,
  CommandPaletteItem,
  ContextMenuItem,
  DropdownMenuItem,
  PageLink,
  TabsItem,
} from "@nuxt/ui"
import type { HTMLAttributes } from "vue"

export type RouteReturn = Record<string, RouteItem[]>

export interface RouteItem {
  value?: string | number | undefined
  label: string
  icon?: string
  iconFill?: string
  type?: string
  class?: string
  to?: string
  description?: string
  auth?: boolean
  id?: string
  order?: number
  highlight?: boolean
  trailingIcon?: string
  component?: Component
  searchable?: boolean
  keys?: string[]
  children?: RouteItem[]
  slot?: string
  onClick?: () => void
  ui?: Record<string, HTMLAttributes["class"] | undefined>
}

type UiType = "label" | "separator"
type ButtonTypes = ButtonProps["type"] & UiType

export type ButtonRouteItem = RouteItem &
  Omit<ButtonProps, "type"> & {
    badge?: BadgeProps
    item?: ButtonRouteItem
    type?: ButtonTypes
  }

export type CommandRouteType = Omit<
  RouteItem & CommandPaletteItem,
  "to" | "value"
>
export interface CommandRouteEx extends Omit<
  RouteItem,
  "to" | "value" | "children" | "class" | "icon" | "label" | "ui"
> {
  to?: string
  value?: string | number
  children?: CommandRouteItem[]
  icon?: string
  label?: string
  ui?: CommandPaletteItem["ui"]
}

export type CommandRouteItem = CommandRouteEx & CommandPaletteItem
export interface DropdownRouteItem extends Partial<
  Exclude<RouteItem, DropdownMenuItem>
> {
  badge?: BadgeProps
}

export interface PageLinkRouteItem
  extends Omit<RouteItem, keyof PageLink>, PageLink {}

export interface RouteGroup<T> {
  order?: number
  id?: string
  value?: string
  icon?: string
  trailingIcon?: string
  label?: string
  searchable?: boolean
  description?: string
  class?: string
  component?: Component
  keys?: string[]
  highlight?: boolean
  items?: T[]
  children?: T[]
  action?: T
  ui?: Record<string, unknown>
}

export interface CommandGroup<T>
  extends
    Omit<RouteGroup<CommandRouteItem>, "id" | "items">,
    CommandPaletteGroup {
  items: CommandRouteItem[]
  id: string
}

export interface RouteGroupOptions {
  onNavigate?: () => void
}

export interface AppCommandInject {
  open?: (item: RouteItem) => void
  close?: () => void
  back?: () => void
}
