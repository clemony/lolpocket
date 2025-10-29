import { parseAbsoluteToLocal } from '@internationalized/date'

export function parseISOStringToRelative(ISO: string) {
  const a = parseAbsoluteToLocal(ISO).toAbsoluteString()
  return useTimeAgo(a)
}

export function parseISOStringToDate(ISO: string) {
  const a = parseAbsoluteToLocal(ISO).toAbsoluteString()
  return useDateFormat(a, 'M/D/YY h:MM a')
}