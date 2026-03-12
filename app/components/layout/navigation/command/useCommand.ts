import type { ShallowRef } from "vue"
export const internalInputProps = {
  readonly: true,
  tabindex: -1,
  autocomplete: "off",
  inputmode: "none" as const,
  spellcheck: false,
  onFocus: (event: FocusEvent) => {
    const target = event.target as HTMLInputElement | null
    target?.blur()
  },
}

export function onContentInteractOutside(
  event: Event,
  input: HTMLInputElement | undefined,
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
  input: HTMLInputElement | undefined,
) {
  if (!input) {
    return
  }

  open.value = true
  input.focus()
  input.select()
}
