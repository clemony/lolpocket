export function formatTimeAgo(date: Date, format?: 'letter' | 'short') {
  if (!date)
    return

  const timeAgo = useTimeAgo(date)
  if (format == 'short') {
    return timeAgo.value.replace(' minutes', ' min').replace(' seconds', ' sec')
  }
  else {
    return timeAgo.value.replace(' minutes', 'm').replace(' hours', 'h').replace(' seconds', 's')
  }
}

export function isStale(date?: Date | string | null, maxMinutes = 30) {
  if (!date)
    return true
  const updated = typeof date === 'string' ? new Date(date) : date
  const diff = (Date.now() - updated.getTime()) / 1000 / 60
  return diff > maxMinutes
}

/**
 * Takes a Date, string, null, or undefined and returns a Date
 * object. If the input is a string, it will be parsed as a date.
 * If the input is null or undefined, the function will return null.
 */
export function parseDate(
  input: Date | string | null | undefined,
): Date | null {
  if (!input)
    return null
  return typeof input === 'string' ? new Date(input) : input
}

export function getISOWeek(date: Date): number {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))
  const dayNum = d.getUTCDay() || 7
  d.setUTCDate(d.getUTCDate() + 4 - dayNum)
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1))
  return Math.ceil((((+d - +yearStart) / 86400000) + 1) / 7)
}

export function getISOWeekKey(date: Date): string {
  const year = date.getUTCFullYear()
  const week = getISOWeek(date)
  return `${year}-W${String(week).padStart(2, '0')}`
}