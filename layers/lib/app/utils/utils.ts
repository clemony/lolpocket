export function computedOnce<T>(fn: () => T) {
  const v = shallowRef<T>()
  if (v.value === undefined)
    v.value = fn()
  return readonly(v)
}

/* dev */
export function assertNever(x: never): never {
  throw new Error(`Unexpected value: ${x}`)
}
