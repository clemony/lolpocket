<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { useAccountStore } from '@stores/accountStore'
=======
import { useGeneralStore } from '@/stores/generalStore'
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
import { useAccountStore } from '@stores/accountStore'
>>>>>>> 404a531d (update 84 files and delete 4 files)
=======
import { useAccountStore } from '@stores/accountStore'
=======
import { useGeneralStore } from '@/stores/generalStore'
>>>>>>> 5132f0ce (update 8 files and delete 426 files)
>>>>>>> be133e04 (update 8 files and delete 426 files)

export function toggleDrawerState(drawerData, pocket?) {
    const as = useAccountStore()

    as.drawerValue = drawerData
    pocket ? (as.drawerPocket = pocket) : as.drawerPocket = null
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
