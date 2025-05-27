import { isMacOS, isMobile, isWindows } from '@basitcodeenv/vue3-device-detect'

export function getDevice() {
  return isMacOS ? 'MacOS' : isWindows ? 'Windows' : isMobile ? 'Mobile' : ''
}

export function getDeviceKey() {
  return getDevice() == 'MacOS' ? '⌘' : getDevice() == 'Windows' ? 'ctrl' : getDevice() == 'Mobile' ? '' : 'meta'
}
