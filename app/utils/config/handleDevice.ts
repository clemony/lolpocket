export function getDevice() {
  const ua = navigator.userAgent
  if (/Mobi|Android/i.test(ua))
    return 'Mobile'
  if (/iPad|Tablet/i.test(ua))
    return 'Tablet'
  if (/Mac/i.test(ua))
    return 'MacOS'
  if (/Win/i.test(ua))
    return 'Windows'
  if (/Linux/i.test(ua))
    return 'Linux'
  return 'Unknown'
}

export function getDeviceKey() {
  const device = getDevice()
  return (
    device === 'Windows'
      ? '⊞'
      : '⌘'
  )
}

export function getMetaIcon() {
  const device = getDevice()
  return (
    device === 'Windows'
      ? 'win-key'
      : 'command'
  )
}

export function isDesktop() {
  const device = getDevice()
  return ['MacOS', 'Windows', 'Linux'].includes(device)
}
