const mobile = /Mobi|Android/i
const tablet = /iPad|Tablet/i
const mac = /Mac/i
const win = /Win/i
const linux = /Linux/i

export function getDevice() {
  const ua = navigator?.userAgent
  if (mobile.test(ua)) return "Mobile"
  if (tablet.test(ua)) return "Tablet"
  if (mac.test(ua)) return "MacOS"
  if (win.test(ua)) return "Windows"
  if (linux.test(ua)) return "Linux"
  return "Unknown"
}

export function getDeviceKey() {
  const device = getDevice()
  return device === "Windows" ? "⊞" : "⌘"
}

export function getMetaIcon() {
  const device = getDevice()
  return device === "Windows" ? "win-key" : "command"
}

export function isDesktop() {
  const device = getDevice()
  return ["MacOS", "Windows", "Linux"].includes(device)
}
