export default function getOS() {
  if (navigator.userAgent.includes('Mac OS X')) {
    useTempStore().userOS = 'Mac'
    console.log('🍎 - getOS - userOS:', useTempStore().userOS)
  }
  else {
    useTempStore().userOS = 'Windows'
    console.log('🪟 - getOS - userOS:', useTempStore().userOS)
  }
}
