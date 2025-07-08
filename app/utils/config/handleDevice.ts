import {
  isLinux,
  isMacOS,
  isMobile,
  isTablet,
  isWindows,
} from "@basitcodeenv/vue3-device-detect"

export function getDevice() {
  return (
    isMacOS ? "MacOS"
    : isWindows ? "Windows"
    : isMobile ? "Mobile"
    : null
  )
}

export function getDeviceKey() {
  return (
    getDevice() == "MacOS" ? "⌘"
    : getDevice() == "Windows" ? "ctrl"
    : getDevice() == "Mobile" ? ""
    : "meta"
  )
}

export function isDesktop() {
  return (
    isMacOS ? true
    : isWindows ? true
    : isLinux ? true
    : !isMobile ? false
    : !isTablet
  )
}
