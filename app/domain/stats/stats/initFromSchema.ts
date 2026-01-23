export function initFromSchema<T extends Record<string, { init: () => any }>>(
  schema: T
): {
  [K in keyof T]: ReturnType<T[K]['init']>
} {
  const out = {} as any
  for (const key in schema) {
    out[key] = schema[key].init()
  }
  return out
}
