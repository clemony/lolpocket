import { parseAbsoluteToLocal } from '@internationalized/date'

export function parseISOString(ISO: string) {
  const a = parseAbsoluteToLocal(ISO).toAbsoluteString()
  // return useDateFormat(a, 'MMM D, YYYY h:MM a')
  return useTimeAgo(a)
}