import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Table from './src/pages/PocketTables.vue'
import Settings from './src/pages/Settings.vue'
import Trash from './src/pages/trash.vue'
import Archive from './src/pages/archive.vue'
import Cards from './src/pages/PocketCards.vue'
import Favorites from './src/pages/Favorites.vue'

import { usePocketStore } from '@/stores/pocketStore'
import { useGeneralStore } from '@stores/generalStore'

import Home from './src/pages/home.vue'
import Runes from './src/pages/runes.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/about',
        name: 'about',
        component: () => import('./src/pages/about.vue'),
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
        component: () => import('./src/pages/champions.vue'),
    },
    {
        path: '/home',
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
        component: () => import('./src/pages/items.vue'),
    },
    {
        path: '/favorites',
        name: 'favorites',
        component: Favorites,
    },

    {
        path: '/pocket/:pocketKey',
        component: () => import('./src/components/pocket/Pocket.vue'),
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
                        './src/components/pocket/dashboard/PocketDashboard.vue'
                    ),
            },
            {
                name: 'Champions',
                path: 'champions',
                component: () =>
                    import(
                        './src/components/pocket/champions/PocketChampions.vue'
                    ),
            },
            {
                name: 'Items',
                path: 'items',
                props: true,
                component: () =>
                    import('./src/components/pocket/items/PocketItems.vue'),
            },
            {
                name: 'Runes',
                path: 'runes',
                component: () =>
                    import('./src/components/pocket/runes/PocketRunes.vue'),
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
        component: () => import('./src/pages/Spells.vue'),
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
                    import('./src/components/settings/GeneralSettings.vue'),
            },
            {
                name: 'appearance',
                path: '/settings',
                component: () =>
                    import('./src/components/settings/AppearanceSettings.vue'),
            },
            {
                name: 'account',
                path: 'account',
                props: true,
                component: () =>
                    import('./src/components/settings/AccountSettings.vue'),
            },
            {
                name: 'hotkeys',
                path: 'hotkeys',
                props: true,
                component: () =>
                    import('./src/components/settings/HotkeySettings.vue'),
            },
            {
                name: 'storage',
                path: 'storage',
                component: () =>
                    import('./src/components/settings/StorageSettings.vue'),
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

export default router
