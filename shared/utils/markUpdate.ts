import fs from 'node:fs'

export function getFormattedDateTime(): string {
  const now = new Date()

  const options: Intl.DateTimeFormatOptions = {
    timeZoneName: 'short',
    hour12: true,
    year: 'numeric', // 👈 these must be literal values
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }

  const formatter = new Intl.DateTimeFormat('en-US', options)
  const parts = formatter.formatToParts(now)

  const partMap = Object.fromEntries(
    parts.map(({ type, value }) => [type, value]),
  ) as Record<string, string> // 👈 optional: avoid TS warning

  return (
    `${partMap.month}/${partMap.day}/${partMap.year} `
    + `${partMap.hour}:${partMap.minute}:${partMap.second} `
    + `${partMap.dayPeriod} ${partMap.timeZoneName}`
  )
}

export function markUpdate() {
  const loadPatch = JSON.parse(
    fs.readFileSync('./scripts/update/misc/raw/patch-index.json', 'utf-8'),
  )

  return `Updated Patch ${loadPatch[0]} - ${getFormattedDateTime()}`
}
