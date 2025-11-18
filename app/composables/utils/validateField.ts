// useValibot.ts
import { safeParse } from 'valibot'

export function validateField(schema) {
  return (value: any) => {
    const res = safeParse(schema, value)
    return res.success ? true : res.issues[0].message
  }
}
