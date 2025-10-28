export function isStale(date?: number | string | Date | null, maxMinutes = 30) {
  if (!date)
    return true

  const updated
    = typeof date === 'number'
      ? new Date(date)
      : typeof date === 'string'
        ? new Date(date)
        : date

  const diff = (Date.now() - updated.getTime()) / 1000 / 60
  return diff > maxMinutes
}