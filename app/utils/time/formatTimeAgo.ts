export function formatTimeAgo(date: number, format?: 'letter' | 'short') {
  if (!date)
    return

  const timeAgo = useTimeAgo(date)
  if (format === 'short') {
    return timeAgo.value.replace(' minutes', ' min').replace(' seconds', ' sec')
  }
  else {
    return timeAgo.value
      .replace(' minutes', 'm')
      .replace(' hours', 'h')
      .replace(' seconds', 's')
  }
}