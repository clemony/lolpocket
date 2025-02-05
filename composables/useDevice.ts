import { isMacOS, isMobile, isWindows } from '@basitcodeenv/vue3-device-detect'

export function useDevice() {
  return isMacOS ? 'MacOS' : isWindows ? 'Windows' : isMobile ? 'Mobile' : ''
}

export function useDeviceKey() {
  return useDevice() == 'MacOS' ? '⌘' : useDevice() == 'Windows' ? '^' : 'meta'
}
