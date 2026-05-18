import type { MaybeElementRef } from "@vueuse/core"

export function useFocusInput(
  inputRef: ComputedRef<
    HTMLInputElement | { value?: HTMLInputElement | null } | null | undefined
  >
) {
  function focus() {
    if (!inputRef) return
    void nextTick(() => {
      const element =
        inputRef instanceof HTMLInputElement
          ? inputRef
          : (toValue(inputRef) as HTMLInputElement)

      element?.focus()
      element?.select()
    })
  }

  return {
    focus
  }
}
