import type {
  AvatarProps,
  ButtonProps,
  CardProps,
  DropdownMenuItem,
  EmitsToProps,
  NavigationMenuItem,
  TabsItem,
  TooltipProps,
} from "@nuxt/ui"

export type Side = "top" | "right" | "bottom" | "left"
export type Direction = "left" | "right" | "down" | "up"
export type Align = "start" | "center" | "end"
export type Size = "3xs" | "2xs" | "xs" | "sm" | "md" | "lg" | "xl"
export type Shape = "square" | "circle"
export type UOrientation = "vertical" | "horizontal" | "responsive"
export type LoadingStyle = "none" | "default" | "spinner" | null
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

export type ChartMode = "scatter" | "heatmap" | "bubble" | "donut"

export type TooltipUi = TooltipProps["ui"] & {
  trailingIcon?: string
  label?: string
}

export interface TipProps {
  avatar?: string
  ui?: TooltipUi
  icon?: string
  side?: Side
  sideOffset?: number
  trailingIcon?: string
  followPointer?: boolean
  inertia?: boolean | number
  interactive?: boolean
  label?: string
  title?: string
}

export interface TooltipExpose {
  pinned: boolean
  isOpen: boolean
}

export interface NavButtonProps extends ButtonProps {
  value?: string
  id?: string
  open?: boolean
  kbds?: string[]
  as?: "card" | "button" | "separator"
  description?: string
}
