import type { ShallowRef } from "vue"

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
