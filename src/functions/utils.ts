import { useTempStore } from '@stores/tempStore'
import type { Champion, Item, Rune } from '@/types/dataTypes'
import { drawer } from '@/types/pocketTypes'

export function toggleDrawerState(
    drawerData,
    pocket?,
    champion?: Champion,
    item?: Item,
    rune?: Rune
) {
    console.log('💠 - toggleDrawerState - champion:', champion)
    console.log('💠 - toggleDrawerState - pocket:', pocket)
    console.log('💠 - toggleDrawerState - drawerData:', drawerData)
    const ts = useTempStore()

    ts.drawerValue = drawerData

    if (pocket != null) {
        ts.drawerPocket = pocket
    } else if (champion != null) {
        ts.selectedChampion = champion
    } else if (item != null) {
        ts.selectedItem = item
    } else if (rune != null) {
        ts.selectedRune = rune
    }
    ts.drawerState = !ts.drawerState

    if (!ts.drawerState) {
        ts.drawerPocket = null
        ts.selectedChampion = null
        ts.selectedItem = null
        ts.selectedRune = null
        ts.drawerValue = null as drawer
    }
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
