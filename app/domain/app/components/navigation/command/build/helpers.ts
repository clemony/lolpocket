import type { ShallowRef } from "vue"

export const mergeBtnUi = (
  itemUi: ButtonPropsExt["ui"],
  propUi: ButtonPropsExt["ui"]
) =>
  mergeUi<NonNullable<ButtonPropsExt["ui"]>>(
    itemUi as NonNullable<ButtonPropsExt["ui"]>,
    propUi as NonNullable<ButtonPropsExt["ui"]>
  )

export function pathDepth(path: string) {
  return path.split("/").filter(Boolean).length
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
