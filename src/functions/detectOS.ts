import { useAccountStore } from '@stores/accountStore'

export function getOS() {
    const as = useAccountStore()
    if (navigator.userAgent.indexOf('Mac OS X') != -1) {
        as.userOS = 'Mac'
        console.log('🍎 - getOS - userOS:', as.userOS)
    } else {
        as.userOS = 'Windows'
        console.log('🪟 - getOS - userOS:', as.userOS)
    }
}
