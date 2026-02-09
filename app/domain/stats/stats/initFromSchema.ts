//
export function initFromSchema<T extends Record<string, { init: () => any }>>(
  schema: T
): {
  [K in keyof T]: ReturnType<T[K]["init"]>
} {
  const out = {} as any
  for (const key in schema) {
    if (!Object.prototype.hasOwnProperty.call(schema, key)) continue
    const entry = schema[key as keyof T]
    if (!entry) continue
    out[key] = entry.init()
  }
  return out
}
