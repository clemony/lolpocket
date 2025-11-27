// date-range.ts
import {
  fromAbsolute,
  getLocalTimeZone,
  isSameDay,
  toCalendarDateTime,
  toZoned,
  type ZonedDateTime,
} from "@internationalized/date" // your existing imports
import type { DateRange } from "reka-ui"

export function dateInRange(
  absTimestamp: number,
  range: DateRange | null | undefined
) {
  if (!range) return true

  const tz = getLocalTimeZone()

  const sp = range.start ? toZoned(toCalendarDateTime(range.start), tz) : null

  const ep = range.end ? toZoned(toCalendarDateTime(range.end), tz) : null

  // no start & no end → always match
  if (!sp && !ep) return true

  const md = fromAbsolute(absTimestamp, tz)

  // same-day filter
  if (sp && ep && isSameDay(sp, ep)) {
    return isSameDay(md, sp)
  }

  // normal range
  if (sp && md.compare(sp) < 0) return false
  if (ep && md.compare(ep) > 0) return false

  return true
}
