import type { ContextMenuItem, SwitchProps } from "@nuxt/ui"

export type SwitchItem = ContextMenuItem & SwitchProps
export function asSwitch(item: ContextMenuItem): SwitchItem {
  return item
}
