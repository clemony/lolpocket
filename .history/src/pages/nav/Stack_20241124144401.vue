<script setup>
import { ref, onMounted } from 'vue'

const supportTransitions = window.Modernizr.csstransitions
const transEndEventNames = {
    WebkitTransition: 'webkitTransitionEnd',
    MozTransition: 'transitionend',
    OTransition: 'oTransitionEnd',
    msTransition: 'MSTransitionEnd',
    transition: 'transitionend',
}
const transEndEventName =
    transEndEventNames[window.Modernizr.prefixed('transition')]

const stack = ref(null)
const pages = ref([])
const pagesTotal = ref(0)
const current = ref(0)
const isMenuOpen = ref(false)
const menuCtrl = ref(null)
const nav = ref(null)
const navItems = ref([])

// Utility for handling transitions
const onEndTransition = (el, callback) => {
    const onEndCallbackFn = (ev) => {
        if (supportTransitions) {
            if (ev.target !== el) return
            el.removeEventListener(transEndEventName, onEndCallbackFn)
        }
        if (typeof callback === 'function') {
            callback()
        }
    }
    if (supportTransitions) {
        el.addEventListener(transEndEventName, onEndCallbackFn)
    } else {
        onEndCallbackFn()
    }
}

const buildStack = () => {
    const stackPagesIdxs = getStackPagesIdxs()
    pages.value.forEach((page, i) => {
        const posIdx = stackPagesIdxs.indexOf(i)
        if (current.value !== i) {
            page.classList.add('page--inactive')
            if (posIdx !== -1) {
                page.style.transform = 'translate3d(0,100%,0)'
            } else {
                page.style.transform = 'translate3d(0,75%,-300px)'
            }
        } else {
            page.classList.remove('page--inactive')
        }
        page.style.zIndex =
            i < current.value ?
                current.value - i
            :   pagesTotal.value + current.value - i
        page.style.opacity = posIdx !== -1 ? 1 - 0.1 * posIdx : 0
    })
}

const toggleMenu = () => {
    isMenuOpen.value ? closeMenu() : openMenu()
}

const openMenu = () => {
    menuCtrl.value.classList.add('menu-button--open')
    stack.value.classList.add('pages-stack--open')
    nav.value.classList.add('pages-nav--open')

    const stackPagesIdxs = getStackPagesIdxs()
    stackPagesIdxs.forEach((idx, i) => {
        const page = pages.value[idx]
        page.style.transform = `translate3d(0, 75%, ${-200 - 50 * i}px)`
    })
    isMenuOpen.value = true
}

const closeMenu = () => {
    openPage()
}

const openPage = (id) => {
    const futurePage =
        id ? document.getElementById(id) : pages.value[current.value]
    const futureCurrent = pages.value.indexOf(futurePage)
    const stackPagesIdxs = getStackPagesIdxs(futureCurrent)

    futurePage.style.transform = 'translate3d(0, 0, 0)'
    futurePage.style.opacity = 1

    stackPagesIdxs.forEach((idx) => {
        const page = pages.value[idx]
        page.style.transform = 'translate3d(0,100%,0)'
    })

    if (id) current.value = futureCurrent

    menuCtrl.value.classList.remove('menu-button--open')
    nav.value.classList.remove('pages-nav--open')

    onEndTransition(futurePage, () => {
        stack.value.classList.remove('pages-stack--open')
        buildStack()
        isMenuOpen.value = false
    })
}

const getStackPagesIdxs = (excludePageIdx = -1) => {
    const nextStackPageIdx =
        current.value + 1 < pagesTotal.value ? current.value + 1 : 0
    const nextStackPageIdx_2 =
        current.value + 2 < pagesTotal.value ? current.value + 2 : 1
    return [current.value, nextStackPageIdx, nextStackPageIdx_2].filter(
        (idx) => idx !== excludePageIdx
    )
}

onMounted(() => {
    stack.value = document.querySelector('.pages-stack')
    pages.value = Array.from(stack.value.children)
    pagesTotal.value = pages.value.length
    menuCtrl.value = document.querySelector('button.menu-button')
    nav.value = document.querySelector('.pages-nav')
    navItems.value = Array.from(nav.value.querySelectorAll('.link--page'))

    buildStack()

    menuCtrl.value.addEventListener('click', toggleMenu)
    navItems.value.forEach((item) => {
        const pageId = item.getAttribute('href').slice(1)
        item.addEventListener('click', (ev) => {
            ev.preventDefault()
            openPage(pageId)
        })
    })
})
</script>
