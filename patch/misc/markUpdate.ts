import fs from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const _dir = dirname(fileURLToPath(import.meta.url))
const raw = join(_dir, './raw/patch-index.json')
export const patchList = JSON.parse(fs.readFileSync(raw, 'utf-8'))

export function getFormattedDateTime(): string {
  const now = new Date()

  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    hour: '2-digit',
    hour12: true,
    minute: '2-digit',
    month: '2-digit',
    second: '2-digit',
    timeZoneName: 'short',
    year: 'numeric', // 👈 these must be literal values
  }

  const formatter = new Intl.DateTimeFormat('en-US', options)
  const parts = formatter.formatToParts(now)

  const partMap = Object.fromEntries(
    parts.map(({ type, value }) => [type, value])
  ) as Record<string, string> // 👈 optional: avoid TS warning

  return (
    `${partMap.month}/${partMap.day}/${partMap.year} `
    + `${partMap.hour}:${partMap.minute}:${partMap.second} `
    + `${partMap.dayPeriod} ${partMap.timeZoneName}`
  )
}

export function markUpdate() {
  return `Updated Patch ${patchList[0]} - ${getFormattedDateTime()}`
}
