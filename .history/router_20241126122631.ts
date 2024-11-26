import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Pockets from './src/pages/PocketGrids.vue'
import Settings from './src/pages/Settings.vue'
import Trash from './src/pages/trash.vue'
import Archive from './src/pages/archive.vue'
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
        path: '/loved',
        name: 'loved',
        component: () => import('./src/pages/Loved.vue'),
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
        path: '/pockets',
        name: 'pockets',
        component: Pockets,
        meta: {
            title: 'Pockets',
            icon: 'formkit:folder',
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
                name: 'General',
                path: '',
                component: () =>
                    import('./src/components/settings/GeneralSettings.vue'),
            },
            {
                name: 'Appearance',
                path: 'appearance',
                component: () =>
                    import('./src/components/settings/AppearanceSettings.vue'),
            },
            {
                name: 'Account',
                path: 'account',
                props: true,
                component: () =>
                    import('./src/components/settings/AccountSettings.vue'),
            },
            {
                name: 'Hotkeys',
                path: 'hotkeys',
                props: true,
                component: () =>
                    import('./src/components/settings/HotkeySettings.vue'),
            },
            {
                name: 'Storage',
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
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            }
        }
    },
})

export default router
