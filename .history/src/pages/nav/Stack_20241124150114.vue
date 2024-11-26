<script setup lang="ts">
import { navData } from '@/components/layout/sidebar/nav'
const stack = ref(null)
const pages = ref([])
const current = ref(0)
const isMenuOpen = ref(false)

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
}

const navItems = navData.navCollapse

const openPage = (index) => {
    current.value = index
    isMenuOpen.value = false
}

const getPageStyle = (index) => {
    if (current.value === index) {
        return { transform: 'translate3d(0, 0, 0)', opacity: 1 }
    }
    const stackPagesIdxs = getStackPagesIdxs()
    const posIdx = stackPagesIdxs.indexOf(index)
    return {
        transform:
            posIdx !== -1 ?
                `translate3d(0, 75%, ${-200 - 50 * posIdx}px)`
            :   'translate3d(0, 100%, 0)',
        opacity: posIdx !== -1 ? 1 - 0.1 * posIdx : 0,
    }
}

const getStackPagesIdxs = (excludePageIdx = -1) => {
    const nextStackPageIdx =
        current.value + 1 < pages.value.length ? current.value + 1 : 0
    const nextStackPageIdx_2 =
        current.value + 2 < pages.value.length ? current.value + 2 : 1
    return [current.value, nextStackPageIdx, nextStackPageIdx_2].filter(
        (idx) => idx !== excludePageIdx
    )
}

onMounted(() => {
    stack.value = document.querySelector('.pages-stack')
    pages.value = Array.from(stack.value.children)
})
</script>

<template>
    <div class="pages-stack" :class="{ 'pages-stack--open': isMenuOpen }">
        <transition-group
            name="page-transition"
            tag="div"
            class="pages-stack-inner">
            <div
                v-for="(page, index) in pages"
                :key="index"
                :class="{ 'page--inactive': current !== index }"
                :style="getPageStyle(index)">
                <!-- Page content -->
            </div>
        </transition-group>
    </div>
    <button
        class="menu-button"
        :class="{ 'menu-button--open': isMenuOpen }"
        @click="toggleMenu">
        Menu
    </button>
    <nav class="pages-nav" :class="{ 'pages-nav--open': isMenuOpen }">
        <a
            v-for="(item, index) in navItems"
            :key="index"
            class="link--page"
            @click.prevent="openPage(index)">
            {{ item.title }}
        </a>
    </nav>
</template>

<style scoped>
.page--inactive {
    pointer-events: none;
}

.pages-stack--open .page--inactive {
    transform: translate3d(0, 75%, -300px);
}

.page-transition-enter-active,
.page-transition-leave-active {
    transition:
        transform 0.5s,
        opacity 0.5s;
}

.page-transition-enter-from,
.page-transition-leave-to {
    transform: translate3d(0, 100%, 0);
    opacity: 0;
}
</style>
