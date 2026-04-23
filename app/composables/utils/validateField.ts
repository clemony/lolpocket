//
// useValibot.ts
import type { UseRefHistoryReturn } from "@vueuse/core"
import { safeParse } from "valibot"

export function validateValue(value: unknown) {}
export function validateRefHistory(schema: unknown, required = false) {
  return (value: UseRefHistoryReturn<string, string>) =>
    required && !value.last.value.snapshot
      ? value.reset()
      : (value: UseRefHistoryReturn<string, string>) => {
          const res = safeParse(schema as never, value) as {
            success: boolean
            issues?: { message: string }[]
          }
          return res.success
            ? true
            : (res.issues?.[0]?.message ?? "Invalid value")
        }
}
export function validateField(schema: unknown) {
  return (value: unknown) => {
    const res = safeParse(schema as never, value) as {
      success: boolean
      issues?: { message: string }[]
    }
    return res.success ? true : (res.issues?.[0]?.message ?? "Invalid value")
  }
}
