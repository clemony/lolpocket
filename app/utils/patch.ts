import type { DateValue, ZonedDateTime } from '@internationalized/date'
import { patchDates } from '#shared/appdata/index/patch-date'
import { getLocalTimeZone, parseAbsoluteToLocal, Time, toCalendarDateTime, toZoned } from '@internationalized/date'

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
    patchDate => patchDate.compare(zonedDate) === 0
  )
  return a
}

export function getPatchForDate(date: DateValue) {
  const entry = Object.entries(patchDatesMap).find(([_, patchDate]) => patchDate.compare(date) === 0)
  return entry ? entry[0] : null
}