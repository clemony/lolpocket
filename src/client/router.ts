import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Table from '@/client/pages/PocketTables.vue'
import Settings from '@/client/pages/Settings.vue'
import Trash from '@/client/pages/Trash.vue'
import Archive from '@/client/pages/Archive.vue'
import Cards from '@/client/pages/PocketCards.vue'
import Favorites from '@/client/pages/Favorites.vue'

import { usePocketStore } from '@/client/stores/pocketStore'
import { useGeneralStore } from '@/client/stores/generalStore'

import Home from '@/client/pages/Home.vue'
import Runes from '@/client/pages/Runes.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/about',
        name: 'about',
        component: () => import('@/client/pages/About.vue'),
    },
    {
        path: '/archive',
        name: 'archive',
        component: Archive,
    },
    {
        path: '/calculator',
        name: 'calculator',
        component: Trash,
    },
    {
        path: '/champions',
        name: 'champions',
        component: () => import('@/client/pages/Champions.vue'),
    },
    {
        path: '/',
        name: 'home',
        alias: '/',
        component: Home,
        meta: {
            title: 'Home',
            icon: 'teenyicons:home-outline',
        },
    },
    {
        path: '/items',
        name: 'items',
        component: () => import('@/client/pages/iIems.vue'),
    },
    {
        path: '/favorites',
        name: 'favorites',
        component: Favorites,
    },

    {
        path: '/pocket/:pocketKey',
        component: () => import('@/client/components/pocket/Pocket.vue'),
        meta: {
            title: 'Pocket',
            icon: 'teenyicons:folder-outline',
        },
        props: true,
        children: [
            {
                name: 'Dashboard',
                path: '',
                component: () =>
                    import(
                        '@/client/components/pocket/dashboard/PocketDashboard.vue'
                    ),
            },
            {
                name: 'Champions',
                path: 'champions',
                component: () =>
                    import(
                        '@/client/components/pocket/champions/PocketChampions.vue'
                    ),
            },
            {
                name: 'Items',
                path: 'items',
                props: true,
                component: () =>
                    import('@/client/components/pocket/items/PocketItems.vue'),
            },
            {
                name: 'Runes',
                path: 'runes',
                component: () =>
                    import('@/client/components/pocket/runes/PocketRunes.vue'),
            },
        ],
    },
    {
        path: '/table',
        name: 'table',
        component: Table,
        meta: {
            title: 'Tables',
            icon: 'formkit:folder',
        },
    },
    {
        path: '/cards',
        name: 'cards',
        component: Cards,
        meta: {
            title: 'Cards',
            icon: 'teenyicons:layers-outline',
        },
    },
    {
        path: '/runes',
        name: 'runes',
        component: Runes,
        meta: {
            title: 'Runes',
            icon: 'teenyicons:cog-outline',
        },
    },
    {
        path: '/spells',
        name: 'spells',
        component: () => import('@/client/pages/Spells.vue'),
        meta: {
            title: 'Spells',
            icon: 'teenyicons:cog-outline',
        },
    },
    {
        path: '/settings',
        name: 'settings',
        component: Settings,
        meta: {
            title: 'Settings',
            icon: 'teenyicons:cog-outline',
        },
        props: true,
        children: [
            {
                name: 'general',
                path: '',
                component: () =>
                    import('@/client/components/settings/GeneralSettings.vue'),
            },
            {
                name: 'appearance',
                path: '/settings',
                component: () =>
                    import('@/client/components/settings/AppearanceSettings.vue'),
            },
            {
                name: 'account',
                path: 'account',
                props: true,
                component: () =>
                    import('@/client/components/settings/AccountSettings.vue'),
            },
            {
                name: 'hotkeys',
                path: 'hotkeys',
                props: true,
                component: () =>
                    import('@/client/components/settings/HotkeySettings.vue'),
            },
            {
                name: 'storage',
                path: 'storage',
                component: () =>
                    import('@/client/components/settings/StorageSettings.vue'),
            },
        ],
    },
    {
        path: '/trash',
        name: 'trash',
        component: Trash,
        meta: {
            title: 'Trash',
            icon: 'teenyicons:bin-outline',
        },
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to) {
        if (to.hash) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const element = document.querySelector(to.hash)
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' })
                    }
                    resolve({ el: to.hash, behavior: 'smooth' })
                }, 500) // Adjust the delay if needed
            })
        }
        return { top: 0 } // Default scroll position
    },
})

router.afterEach((to, from) => {
    const gs = useGeneralStore()
    const route = to.name.toString()
    const history = gs.routeHistory

    if (history && history.includes(route)) {
        console.log('is in history?', history.includes(route))
        const a = history.findIndex((route) => route)
        console.log('splicing', a)
        history.splice(a, 1)
    }

    history.push(route)
    history.length > 5 ? history.splice(0, 1) : ''
    console.log(history)
})
export default router
