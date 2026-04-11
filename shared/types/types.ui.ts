import type {
  AvatarProps,
  ButtonProps,
  CheckboxGroupItem,
  InputProps,
  TooltipProps
} from "@nuxt/ui"
import type { AcceptableValue } from "reka-ui"

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

export type ChartMode = "scatter" | "heatmap" | "bubble" | "donut"

export type TooltipUi = TooltipProps["ui"] & {
  trailingIcon?: string
  label?: string
}
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

export interface ButtonPropsExt extends ButtonProps {
  tabindex?: number
}

export interface TooltipPropsExt extends TooltipProps {
  map?: number
  side?: Side
  disabled?: boolean
  pin?: boolean
  interactive?: boolean
  avatar?: AvatarPropsExt
  ui?: TooltipUi
  icon?: string
  sideOffset?: number
  trailingIcon?: string
  followPointer?: boolean
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
