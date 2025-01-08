import { useAccountStore } from '@stores/accountStore'
import { useTempStore } from '@stores/tempStore'

export function getOS() {
    const ts = useTempStore()
    if (navigator.userAgent.indexOf('Mac OS X') != -1) {
        ts.userOS = 'Mac'
        console.log('🍎 - getOS - userOS:', ts.userOS)
    } else {
        ts.userOS = 'Windows'
        console.log('🪟 - getOS - userOS:', ts.userOS)
    }
}
