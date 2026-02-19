type SortDirection = "asc" | "desc"

export const safeObject = <T extends object>(v?: T | null): T => (v ?? {}) as T

export function Object_assign<T extends AnyObj, S extends readonly AnyObj[]>(
  target: T,
  ...sources: S
): DeepMergeMany<[T, ...S]> {
  for (const source of sources) {
    for (const key of Object.keys(source) as Array<keyof typeof source>) {
      const sVal = source[key]
      const tVal = target[key as keyof T]

      ;(target as AnyObj)[key as string] =
        tVal &&
        sVal &&
        typeof tVal === "object" &&
        typeof sVal === "object" &&
        !Array.isArray(tVal) &&
        !Array.isArray(sVal)
          ? Object_assign(tVal as AnyObj, sVal as AnyObj)
          : sVal
    }
  }

  return target as DeepMergeMany<[T, ...S]>
}

export function indexBy<T, K extends PropertyKey>(
  arr: readonly T[],
  key: (item: T) => K
): Record<K, T> {
  return Object.fromEntries(arr.map((i) => [key(i), i])) as Record<K, T>
}

export function sortAbc<T>(
  items: readonly T[],
  key?: keyof T,
  direction: SortDirection = "asc",
  locale?: string
): T[] {
  const dir = direction === "desc" ? -1 : 1

  return [...items].sort((a, b) => {
    const av = String(key ? a[key] : (a ?? ""))
    const bv = String(key ? b[key] : (b ?? ""))

    return av.localeCompare(bv, locale, { sensitivity: "base" }) * dir
  })
}

export function isJSON(str: string): boolean {
  try {
    const parsed = JSON.parse(str)
    return typeof parsed === "object" && parsed !== null
  } catch {
    return false
  }
}

export function getKeyByValue<T extends Record<PropertyKey, unknown>>(
  object: T,
  value: T[keyof T]
) {
  return Object.keys(object).find((key) => object[key as keyof T] === value)
}
