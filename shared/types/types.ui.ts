import type {
  AvatarProps,
  ButtonProps,
  CheckboxGroupItem,
  InputProps,
  TooltipProps,
} from "@nuxt/ui"
import type { AcceptableValue, AsTag } from "reka-ui"
import type { ShallowRef } from "vue"

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

export interface Coordinates {
  x: number
  y: number
}

export type ControlKey = "sidebar" | "command" | "settings"

export interface UiControl {
  open: ShallowRef<boolean>
  toggle: () => void
  value: ShallowRef<string | number>
}

export type UiController = Partial<Record<ControlKey, UiControl>>

export type ClassKey =
  | "root"
  | "label"
  | "leading"
  | "trailing"
  | "separator"
  | "leadingIcon"
  | "trailingIcon"

export type ChartMode = "scatter" | "heatmap" | "bubble" | "donut"

export type DomainType =
  | "rune"
  | "item"
  | "champion"
  | "spell"
  | "ability"
  | "path"
  | "keystone"
  | "status"
  | "summoner"
  | "player"

export interface ButtonPropsExt extends ButtonProps {
  tabindex?: number
}
export type TooltipUi = TooltipProps["ui"] & {
  trailingIcon?: string
  leadingIcon?: HTMLAttributes["class"]
  label?: string
}
export interface TooltipPropsExt extends TooltipProps {
  map?: number
  type?: "static" | "follow"
  side?: Side
  disabled?: boolean
  pin?: boolean
  interactive?: boolean
  avatar?: AvatarPropsExt | false
  ui?: TooltipUi
  icon?: string
  as?: AsTag | string
  sideOffset?: number
  trailingIcon?: string
  followCursor?: boolean
  inertia?: boolean | number
  label?: string
  title?: string
  src?: string
  component?: string | Component | null
}

export interface AvatarPropsExt extends AvatarProps {
  effects?: boolean
  status?: {
    color?: string
    size?: string
    class?: HTMLAttributes["class"]
  }
  round?: boolean
  spinner?: boolean
}

export interface HoverIcon {
  id?: number | null
  k?: string | null
  type?: DomainType
  summoner?: Summoner
  tooltip?: TooltipPropsExt
  avatar?: AvatarPropsExt
}

export interface TooltipExpose {
  pinned: boolean
  isOpen: boolean
}

export type InputClearUi = Partial<
  InputProps["ui"] & Record<"clear", ButtonProps["ui"]>
>
export type BaseItem = ButtonProps & {
  value?: AcceptableValue
  id?: string
  open?: boolean
  kbds?: string[]
  description?: string
  to?: string
  label?: string
  icon?: string
  trailingIcon?: string
  suffix?: string
  prefix?: string
}

export type CheckboxItem = CheckboxGroupItem & {
  icon: string
  label: string
  color?: string
}

export interface CustomClass {
  class?: string
  not?: string[]
  is?: string[]
}

export type SortDirection = "asc" | "desc"

export interface Label {
  name?: string
  color?: string
  value?: string | number
}
