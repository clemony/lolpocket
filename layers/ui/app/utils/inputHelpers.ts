import type { InputProps } from "@nuxt/ui"

export function asInputSize(size: string): InputProps["size"] {
  return size as InputProps["size"]
}
