export function formatHMS(ms) {
  const hours = Math.floor((ms / 3600000) % 24)

  let minutes = Math.floor((ms / 60000) % 60)
  if (hours)
   minutes.toString().padStart(2, '0')

  const seconds = Math.floor((ms / 1000) % 60)

  return `${hours ? `${hours.toString()}:`
  : ''}${minutes ? `${minutes}:`
  : '0:'}${seconds.toString().padStart(2, '0')}`
}
