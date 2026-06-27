import type { ChipProps, SelectProps, TabsProps } from "@nuxt/ui"

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

const asPingSize = (size: string): ChipProps["size"] =>
  size as ChipProps["size"]
