import type { ContextMenuItem, DropdownMenuItem } from "@nuxt/ui"

export const toMenuItem = (item: any): DropdownMenuItem | ContextMenuItem => {
  const { onClick, ...rest } = item
  if (!rest.onSelect) return { ...rest, onSelect: onClick }
  return rest
}
