import type { ContextMenuItem, InputProps, SwitchProps } from "@nuxt/ui"

export type SwitchItem = ContextMenuItem & SwitchProps
export function asSwitch(item: ContextMenuItem): SwitchItem {
  return item
}

export function asInputSize(size: string): InputProps["size"] {
  return size as InputProps["size"]
}

export function asInputProps(item: Record<string, any>): InputProps {
  return item as InputProps
}
