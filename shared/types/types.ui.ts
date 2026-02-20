import type {
  AvatarProps,
  ButtonProps,
  CardProps,
  DropdownMenuItem,
  NavigationMenuItem,
  TabsItem,
} from "@nuxt/ui"

import type { Orientation as ChOr } from "vue-chrts/enums"

export type Side = "top" | "right" | "bottom" | "left"
export type Direction = "left" | "right" | "down" | "up"
export type Align = "start" | "center" | "end"
export type Size = "3xs" | "2xs" | "xs" | "sm" | "md" | "lg" | "xl"
export type Shape = "square" | "circle"
export type Orientation = "vertical" | "horizontal" | "responsive"
export type LoadingStyle = "none" | "spinner" | null
export type TooltipSize = "sm" | "md" | "lg"
export type DataOrientation = "vertical" | "horizontal"
export type DataAlign = "top" | "middle" | "bottom"

export type ClassKey =
  | "root"
  | "label"
  | "leading"
  | "trailing"
  | "separator"
  | "leadingIcon"
  | "trailingIcon"

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

export type ChartOrientation = ChOr
export type ChartMode = "scatter" | "heatmap" | "bubble" | "donut"

export interface NavButtonProps extends ButtonProps {
  value?: string
  id?: string
  open?: boolean
  kbds?: string[]
  as?: "card" | "button" | "separator"
  description?: string
}
