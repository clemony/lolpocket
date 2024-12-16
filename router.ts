import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
<<<<<<< HEAD

import { useAccountStore } from './src/stores/accountStore'

import { computed } from 'vue'
=======
import Table from '@/pages/PocketTables.vue'
import Settings from '@/pages/Settings.vue'
import Trash from '@/pages/Trash.vue'
import Archive from '@/pages/Archive.vue'
import Cards from '@/pages/PocketCards.vue'
import Favorites from '@/pages/Favorites.vue'
import { useGeneralStore } from '@stores/generalStore'
import About from '@/pages/About.vue'
import Home from '@/pages/Home.vue'

import Runes from '@/pages/Runes.vue'
import Champions from '@/pages/Champions.vue'
import Items from '@/pages/Items.vue'
import Spells from '@/pages/Spells.vue'
import Pocket from '@/components/pocket/Pocket.vue'

import PocketDashboard from '@/components/pocket/dashboard/PocketDashboard.vue'
import PocketChampions from '@/components/pocket/champions/PocketChampions.vue'
import PocketItems from '@/components/pocket/items/PocketItems.vue'
import PocketRunes from '@/components/pocket/runes/PocketRunes.vue'

import GeneralSettings from '@/components/settings/GeneralSettings.vue'
import AppearanceSettings from '@/components/settings/AppearanceSettings.vue'
import AccountSettings from '@/components/settings/AccountSettings.vue'
import HotkeySettings from '@/components/settings/HotkeySettings.vue'
import StorageSettings from '@/components/settings/StorageSettings.vue'
>>>>>>> 4634f11e (update 8 files and delete 426 files)

const routes: RouteRecordRaw[] = [
    {
        path: '/about',
        name: 'about',
        component: () => import(`./src/pages/About.vue`),
    },
    {
        path: '/archive',
        name: 'archive',
        component: () => import(`./src/pages/Archive.vue`),
    },
    {
        path: '/calculator',
        name: 'calculator',
        component: () => import(`./src/pages/Trash.vue`),
    },
    {
        path: '/champions',
        name: 'champions',
        component: () => import(`./src/pages/Champions.vue`),
    },
    {
        path: '/',
        name: 'home',
        component: () => import(`./src/pages/Home.vue`),
    },
    {
        path: '/items',
        name: 'items',
        component: () => import(`./src/pages/Items.vue`),
    },
    {
        path: '/favorites',
        name: 'favorites',
        component: () => import(`./src/pages/Favorites.vue`),
    },

    {
        path: '/pocket/:pocketKey',
        component: () => import(`./src/components/pocket/Pocket.vue`),
        meta: {
            title: 'Pocket',
        },
        props: true,
        children: [
            {
                name: 'Dashboard',
                path: '',
                component: () =>
                    import(
                        `./src/components/pocket/dashboard/PocketDashboard.vue`
                    ),
            },
            {
                name: 'Champions',
                path: 'champions',
                component: () =>
                    import(
                        `./src/components/pocket/champions/PocketChampions.vue`
                    ),
            },
            {
                name: 'Items',
                path: 'items',
                props: true,
                component: () =>
                    import(`./src/components/pocket/items/PocketItems.vue`),
            },
            {
                name: 'Runes',
                path: 'runes',
                component: () =>
                    import(`./src/components/pocket/runes/PocketRunes.vue`),
            },
        ],
    },
    {
        path: '/table',
        name: 'table',
        component: () => import(`./src/pages/PocketTables.vue`),
        meta: {
            title: 'Tables',
        },
    },
    {
        path: '/cards',
        name: 'cards',
        component: () => import(`./src/pages/PocketCards.vue`),
        meta: {
            title: 'Cards',
        },
    },
    {
        path: '/runes',
        name: 'runes',
        component: () => import(`./src/pages/Runes.vue`),
        meta: {
            title: 'Runes',
        },
    },
    {
        path: '/spells',
        name: 'spells',
        component: () => import(`./src/pages/Spells.vue`),
        meta: {
            title: 'Spells',
        },
    },

    {
        path: '/settings/general',
        name: 'settings',
        component: () => import(`./src/pages/Settings.vue`),
        meta: {
            title: 'Settings',
        },
        props: true,
        children: [
            {
                name: 'general',
                path: 'general',
                component: () =>
                    import(`./src/components/settings/GeneralSettings.vue`),
            },
            {
                name: 'appearance',
                path: 'appearance',
                component: () =>
                    import(`./src/components/settings/AppearanceSettings.vue`),
            },
            {
                name: 'account',
                path: 'account',
                props: true,
                component: () =>
                    import(`./src/components/settings/AccountSettings.vue`),
            },
            {
                name: 'hotkeys',
                path: 'hotkeys',
                props: true,
                component: () =>
                    import(`./src/components/settings/HotkeySettings.vue`),
            },
            {
                name: 'storage',
                path: 'storage',
                component: () =>
                    import(`./src/components/settings/StorageSettings.vue`),
            },
        ],
    },
    {
        path: '/trash',
        name: 'trash',
        component: () => import(`./src/pages/Trash.vue`),
        meta: {
            title: 'lolpockets | Trash',
        },
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

const scrollBehavior = (to) => {
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
}

router.afterEach((to, from) => {
    const as = useAccountStore()
    const route = computed(() => {
        to.name == '' || to.name == '/' || to.name == undefined ?
            'home'
        :   to.name.toString()
    })
    const history = as.routeHistory

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
