//
// useValibot.ts
import { safeParse } from "valibot"

export function validateField(schema: unknown) {
  return (value: unknown) => {
    const res = safeParse(schema as never, value) as {
      success: boolean
      issues?: { message: string }[]
    }
    return res.success ? true : (res.issues?.[0]?.message ?? "Invalid value")
  }
}
