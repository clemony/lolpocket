import type { DateRange } from "reka-ui"

function localTimeZone() {
  return Intl.DateTimeFormat().resolvedOptions().timeZone
}

function localDateKey(timestamp: number, timeZone = localTimeZone()) {
  const parts = new Intl.DateTimeFormat("en", {
    day: "2-digit",
    month: "2-digit",
    timeZone,
    year: "numeric"
  }).formatToParts(new Date(timestamp))

  const values = Object.fromEntries(
    parts.map((part) => [part.type, part.value])
  )

  return `${values.year}-${values.month}-${values.day}`
}

function dateValueKey(value: DateRange["start"]) {
  return value ? String(value).slice(0, 10) : null
}

export function dateInRange(
  absTimestamp: number,
  range: DateRange | null | undefined
) {
  if (!range) return true

  const start = dateValueKey(range.start)
  const end = dateValueKey(range.end)

  if (!start && !end) return true

  const matchDate = localDateKey(absTimestamp)

  if (start && matchDate < start) return false
  if (end && matchDate > end) return false

  return true
}
