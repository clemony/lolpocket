import * as v from 'valibot'

// 🔧 Helpers
export function FixedArray<T extends v.BaseSchema<any, any, any>>(schema: T, length: number) {
  return v.pipe(v.array(schema), v.minLength(length), v.maxLength(length))
}

export function MinMaxArray<T extends v.BaseSchema<any, any, any>>(schema: T, min: number, max: number) {
  return v.pipe(v.array(schema), v.minLength(min), v.maxLength(max))
}

export function getDeepDefaults<T extends v.BaseSchema<any, any, any>>(schema: T): v.InferOutput<T> {
  const parsed = v.safeParse(schema, {})
  if (parsed.success)
    return parsed.output
  return v.getDefaults(schema) as v.InferOutput<T>
}