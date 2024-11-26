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

<template>
    <!-- Navigation -->
    <nav class="pages-nav">
        <div class="pages-nav__item">
            <a class="link--page link" href="#page-home">Home</a>
        </div>
        <div class="pages-nav__item">
            <a class="link--page link" href="#page-docu">Documentation</a>
        </div>
        <div class="pages-nav__item">
            <a class="link--page link" href="#page-manuals">Manuals</a>
        </div>
        <div class="pages-nav__item">
            <a class="link--page link" href="#page-software">Software</a>
        </div>
        <div class="pages-nav__item">
            <a class="link--page link" href="#page-custom">
                Customization &amp; Settings
            </a>
        </div>
        <div class="pages-nav__item">
            <a class="link--page link" href="#page-training">Training</a>
        </div>
        <div class="pages-nav__item pages-nav__item--small">
            <a class="link--page link--faded link" href="#page-buy">
                Where to buy
            </a>
        </div>
        <div class="pages-nav__item pages-nav__item--small">
            <a class="link--page link--faded link" href="#page-blog">
                Blog &amp; News
            </a>
        </div>
        <div class="pages-nav__item pages-nav__item--small">
            <a class="link--page link--faded link" href="#page-contact">
                Contact
            </a>
        </div>
        <div class="pages-nav__item pages-nav__item--social">
            <a class="link--social link--faded link" href="#">
                <i class="fa fa-twitter"></i>
                <span class="text-hidden">Twitter</span>
            </a>
            <a class="link--social link--faded link" href="#">
                <i class="fa fa-linkedin"></i>
                <span class="text-hidden">LinkedIn</span>
            </a>
            <a class="link--social link--faded link" href="#">
                <i class="fa fa-facebook"></i>
                <span class="text-hidden">Facebook</span>
            </a>
            <a class="link--social link--faded link" href="#">
                <i class="fa fa-youtube-play"></i>
                <span class="text-hidden">YouTube</span>
            </a>
        </div>
    </nav>

    <!-- Pages stack -->
    <div class="pages-stack">
        <div class="page" id="page-home">
            <header class="bp-header cf">
                <span class="bp-header__present">
                    Blueprint
                    <span
                        class="bp-tooltip bp-icon bp-icon--about"
                        data-content="The Blueprints are a collection of basic and minimal website concepts, components, plugins and layouts with minimal style for easy adaption and usage, or simply for inspiration."></span>
                </span>
                <h1 class="bp-header__title">Page Stack Navigation</h1>
                <p class="bp-header__desc">
                    Based on Ilya Kostin's Dribbble shot
                    <a
                        href="https://dribbble.com/shots/2286042-Stacked-navigation">
                        Stacked navigation
                    </a>
                </p>
                <nav class="bp-nav">
                    <a
                        class="bp-nav__item bp-icon bp-icon--prev"
                        href="http://tympanus.net/Blueprints/ZoomSlider/"
                        data-info="previous Blueprint">
                        <span>Previous Blueprint</span>
                    </a>
                    <a
                        class="bp-nav__item bp-icon bp-icon--drop"
                        href="http://tympanus.net/codrops/?p=25311"
                        data-info="back to the Codrops article">
                        <span>back to the Codrops article</span>
                    </a>
                    <a
                        class="bp-nav__item bp-icon bp-icon--archive"
                        href="http://tympanus.net/codrops/category/blueprints/"
                        data-info="Blueprints archive">
                        <span>Go to the archive</span>
                    </a>
                </nav>
            </header>
            <img class="poster" src="" alt="img01" />
        </div>

        <!-- Additional pages -->
        <div class="page" id="page-docu">
            <header class="bp-header cf">
                <h1 class="bp-header__title">Documentation</h1>
                <p class="bp-header__desc">
                    Based on Ilya Kostin's Dribbble shot
                    <a
                        href="https://dribbble.com/shots/2286042-Stacked-navigation">
                        Stacked navigation
                    </a>
                </p>
                <p class="info">
                    "We cannot have peace among men whose hearts find delight in
                    killing any living creature." &mdash; Rachel Carson
                </p>
            </header>
            <img class="poster" src="" alt="img06" />
        </div>
        <!-- Additional pages like this... -->
    </div>
</template>

<script setup>
// Add interactivity or dynamic data in Vue's <script> section as needed.
// For now, this is static content, so this section can remain empty unless interaction or dynamic rendering is required.
</script>

<style scoped>
/* Copy your CSS styles here or use external stylesheets */
.pages-nav {
    /* Sample styles */
    display: flex;
    flex-direction: column;
}

.pages-stack {
    /* Additional styles */
}

.page {
    /* Page-specific styling */
}

.bp-header {
    /* Blueprint header styles */
}
</style>
