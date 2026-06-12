import type { ButtonProps, DropdownMenuItem } from "@nuxt/ui"
import type {
  ButtonRouteItem,
  DropdownRouteItem,
  RouteItem
} from "~/types/route.types"

export function asDropdownItem(
  item: DropdownMenuItem | DropdownMenuItem[] | ButtonProps
): DropdownMenuItem {
  return item as DropdownMenuItem
}
export function asRouteItem(item: unknown) {
  return item as RouteItem
}

export function asRouteItemArray(item: unknown) {
  return item as RouteItem[]
}

export function asRouteButtonItemArray(item: unknown) {
  return item as ButtonRouteItem[]
}

export function asDropdownRouteItemArray(item: unknown) {
  return item as DropdownRouteItem[]
}

export function asString(value: unknown) {
  return typeof value === "string" ? value : undefined
}
