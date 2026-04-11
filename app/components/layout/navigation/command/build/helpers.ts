import type { ButtonProps, DropdownMenuItem } from "@nuxt/ui"
import type { ShallowRef } from "vue"
import type { CommandItem } from "./useCommandGroups"

export function asDropdownItem(
  item: DropdownMenuItem | DropdownMenuItem[] | ButtonProps
): DropdownMenuItem {
  return item as DropdownMenuItem
}

export const mergeBtnUi = (
  itemUi: ButtonPropsExt["ui"],
  propUi: ButtonPropsExt["ui"]
) =>
  mergeUi<NonNullable<ButtonPropsExt["ui"]>>(
    itemUi as NonNullable<ButtonPropsExt["ui"]>,
    propUi as NonNullable<ButtonPropsExt["ui"]>
  )

export function asCommandItem(item: unknown) {
  return item as CommandItem
}

export function pathDepth(path: string) {
  return path.split("/").filter(Boolean).length
}

export function asString(value: unknown) {
  return typeof value === "string" ? value : undefined
}

export function onContentInteractOutside(
  event: Event,
  input: HTMLInputElement | undefined
) {
  if (!input) {
    return
  }

  const target =
    (event as Event & { detail?: { originalEvent?: Event } }).detail
      ?.originalEvent?.target ?? event.target

  if (target instanceof Node && input.contains(target)) {
    event.preventDefault()
  }
}

export function focusTrigger(
  open: ShallowRef<boolean>,
  input: HTMLInputElement | undefined
) {
  if (!input) {
    return
  }

  open.value = true
  input.focus()
  input.select()
}
