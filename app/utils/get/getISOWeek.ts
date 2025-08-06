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