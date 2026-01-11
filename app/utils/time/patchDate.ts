import type { DateValue, ZonedDateTime } from "@internationalized/date"
import {
  getLocalTimeZone,
  parseAbsoluteToLocal,
  Time,
  toCalendarDateTime,
  toZoned,
} from "@internationalized/date"
import { patchDates } from "~~/shared/constants/misc/patch-date"

export const patchDatesMap: Record<string, ZonedDateTime> = Object.fromEntries(
  Object.entries(patchDates).map(([patch, dateStr]) => {
    const date = parseAbsoluteToLocal(dateStr).set({ hour: 0 })
    return [patch, date]
  })
)

export function isPatchDay(date: DateValue) {
  // combine with midnight
  const midnightDateTime = toCalendarDateTime(date, new Time(0, 0))

  // convert zoned date in the local timezone
  const zonedDate = toZoned(midnightDateTime, getLocalTimeZone())

  const a = Object.values(patchDatesMap).some(
    (patchDate) => patchDate.compare(zonedDate) === 0
  )
  return a
}

export function getPatchForDate(date: DateValue): string | null {
  const entries = Object.entries(patchDatesMap).sort((a, b) =>
    a[1].compare(b[1])
  ) // ascending by date

  let currentPatch: string | null = null

  for (const [patch, patchDate] of entries) {
    // patchDate <= date
    if (patchDate.compare(date) <= 0) {
      currentPatch = patch
    } else {
      break
    }
  }

  return currentPatch
}
