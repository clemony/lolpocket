import type {
  AvatarProps,
  ButtonProps,
  ChipProps,
  DropdownMenuItem,
  SelectProps,
  TabsProps,
} from "@nuxt/ui"
import type {
  ButtonRouteItem,
  DropdownRouteItem,
  RouteItem,
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

export const asChipColor = (color: string): ChipProps["color"] =>
  color as ChipProps["color"]

export function asItem(value: any): Item {
  return value as Item
}

export function asRune(value: any): Rune {
  return value as Rune
}

export function asChampion(value: any): Champion {
  return value as Champion
}

export function asSpell(value: any): Spell {
  return value as Spell
}

export function asAbility(value: any): Ability {
  return value as Ability
}

export function asTabsItems(items: any): TabsProps["items"] {
  return items
}

export function asSelectItems(items: any[]): SelectProps["items"] {
  return items
}

export const asPingSize = (size: string): ChipProps["size"] =>
  size as ChipProps["size"]

export const asSummoner = (value: any): Summoner => value

export const asAvatarSize = (size: string): AvatarProps["size"] =>
  size as AvatarProps["size"]
