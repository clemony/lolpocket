import { useAccountStore } from '@stores/accountStore'
import { useTempStore } from '@stores/tempStore'
import type { Champion } from 'types'

export function toggleDrawerState(drawerData, pocket?, champion?: Champion) {
    console.log('💠 - toggleDrawerState - champion:', champion)
    console.log('💠 - toggleDrawerState - pocket:', pocket)
    console.log('💠 - toggleDrawerState - drawerData:', drawerData)
    const as = useAccountStore()

    as.drawerValue = drawerData

    if (pocket != null) {
        as.drawerPocket = pocket
    } else if (champion != null) {
        const ts = useTempStore()
        ts.selectedChampion = champion
    }
    as.drawerState = !as.drawerState
}

export function scrollToSection(el) {
    var targetElement = ref(el)

    if (targetElement) {
        targetElement.value.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center',
        })
    }
}

export function smoothScrollTo(target, duration) {
    const start = window.scrollY
    const end = target.getBoundingClientRect().top + start
    const distance = end - start
    let startTime = null

    function step(timestamp) {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / duration, 1)
        const ease = easeInOutCubic(progress)
        window.scrollTo(0, start + distance * ease)

        if (progress < 1) {
            window.requestAnimationFrame(step)
        }
    }

    window.requestAnimationFrame(step)
}

function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
}
