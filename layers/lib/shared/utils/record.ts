type SortDirection = 'asc' | 'desc'

export function sortRecordBy<
  T extends Record<K, string | number>,
  K extends keyof T,
>(
  record: Record<string, T>,
  prop: K,
  direction: SortDirection = 'asc',
  locale?: string
): T[] {
  const dir = direction === 'desc' ? -1 : 1

  return Object.values(record).sort((a, b) => {
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
