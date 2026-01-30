type SortDirection = 'asc' | 'desc'

export function getRandom(thing: any[]) {
  const i = Math.floor(Math.random() * thing.length)
  return thing[i]
}

export function getByIndex<T extends Record<string, any>>(
  dataset: T[],
  inputKey: keyof T,
  value: T[keyof T]
): T | undefined {
  return dataset.find(i => i[inputKey] === value)
}

export function findInIndex<T extends Record<string, any>>(
  dataset: T[],
  inputKey: keyof T,
  value: T[keyof T],
  outputKey: keyof T
): T[keyof T] | undefined {
  return dataset.find(i => i[inputKey] === value)?.[outputKey]
}

export const safeArray = <T>(v?: T[] | null): T[] => (Array.isArray(v) ? v : [])

export function sortMapBy<K, T, P extends keyof T>(
  map: Map<K, T>,
  prop: P,
  direction: SortDirection = 'desc',
  locale?: string
): T[] {
  const dir = direction === 'asc' ? 1 : -1

  return Array.from(map.values()).sort((a, b) => {
    const av = a[prop]
    const bv = b[prop]

    if (typeof av === 'number' && typeof bv === 'number') {
      return (av - bv) * dir
    }

    return (
      String(av).localeCompare(String(bv), locale, {
        numeric: true,
        sensitivity: 'base',
      }) * dir
    )
  })
}
