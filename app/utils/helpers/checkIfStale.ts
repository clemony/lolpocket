export function isStale(date?: Date | string | null, maxMinutes = 30) {
  if (!date)
    return true
  const updated = typeof date === 'string' ? new Date(date) : date
  const diff = (Date.now() - updated.getTime()) / 1000 / 60
  return diff > maxMinutes
}