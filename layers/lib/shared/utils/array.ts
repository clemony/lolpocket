type SortDirection = "asc" | "desc"

export function getRandom(thing: any[]) {
  const i = globalThis.Math.floor(globalThis.Math.random() * thing.length)
  return thing[i]
}

export function getRandomValue<T>(values: readonly T[]): T | null {
  if (!values.length) return null
  return getRandom([...values]) as T
}

export function sampleUnique<T>(values: readonly T[], count: number): T[] {
  const pool = [...new Set(values)]
  const limit = Math.min(count, pool.length)

  for (let i = 0; i < limit; i++) {
    const next = i + getRandomInt(pool.length - i)
    const current = pool[i]!
    pool[i] = pool[next]!
    pool[next] = current
  }

  return pool.slice(0, limit)
}

export const chunkArray = (
  array: readonly any[],
  chunkSize: number
): readonly any[][] => {
  const chunks = Array.from(
    { length: globalThis.Math.ceil(array.length / chunkSize) },
    (_, i) => array.slice(i * chunkSize, (i + 1) * chunkSize)
  )
  return chunks.map((chunk) => [...chunk])
}

export function getByIndex<T extends Record<string, any>>(
  dataset: T[],
  inputKey: keyof T,
  value: T[keyof T]
): T | undefined {
  return dataset.find((i) => i[inputKey] === value)
}

export function findInIndex<T extends Record<string, any>>(
  dataset: T[],
  inputKey: keyof T,
  value: T[keyof T],
  outputKey: keyof T
): T[keyof T] | undefined {
  return dataset.find((i) => i[inputKey] === value)?.[outputKey]
}

export const safeArray = <T>(v?: T[] | null): T[] => (Array.isArray(v) ? v : [])

export function sortMapBy<K, T, P extends keyof T>(
  map: Map<K, T>,
  prop: P,
  direction: SortDirection = "desc",
  locale?: string
): T[] {
  const dir = direction === "asc" ? 1 : -1

  return Array.from(map.values()).sort((a, b) => {
    const av = a[prop]
    const bv = b[prop]

    if (typeof av === "number" && typeof bv === "number") {
      return (av - bv) * dir
    }

    return (
      String(av).localeCompare(String(bv), locale, {
        numeric: true,
        sensitivity: "base"
      }) * dir
    )
  })
}
