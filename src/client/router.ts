import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Table from '@/client/pages/PocketTables.vue'
import Settings from '@/client/pages/Settings.vue'
import Trash from '@/client/pages/Trash.vue'
import Archive from '@/client/pages/Archive.vue'
import Cards from '@/client/pages/PocketCards.vue'
import Favorites from '@/client/pages/Favorites.vue'
import { useGeneralStore } from '@/client/stores/generalStore'
import About from '@/client/pages/About.vue'
import Home from '@/client/pages/Home.vue'

import Runes from '@/client/pages/Runes.vue'
import Champions from '@/client/pages/Champions.vue'
import Items from './pages/Items.vue'
import Spells from '@/client/pages/Spells.vue'
import Pocket from '@/client/components/pocket/Pocket.vue'

import PocketDashboard from '@/client/components/pocket/dashboard/PocketDashboard.vue'
import PocketChampions from '@/client/components/pocket/champions/PocketChampions.vue'
import PocketItems from '@/client/components/pocket/items/PocketItems.vue'
import PocketRunes from '@/client/components/pocket/runes/PocketRunes.vue'

import GeneralSettings from '@/client/components/settings/GeneralSettings.vue'
import AppearanceSettings from '@/client/components/settings/AppearanceSettings.vue'
import AccountSettings from '@/client/components/settings/AccountSettings.vue'
import HotkeySettings from '@/client/components/settings/HotkeySettings.vue'
import StorageSettings from '@/client/components/settings/StorageSettings.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/about',
        name: 'about',
        component: About,
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
        component: Champions,
    },
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/items',
        name: 'items',
        component: Items,
    },
    {
        path: '/favorites',
        name: 'favorites',
        component: Favorites,
    },

    {
        path: '/pocket/:pocketKey',
        component: Pocket,
        meta: {
            title: 'Pocket',
        },
        props: true,
        children: [
            {
                name: 'Dashboard',
                path: '',
                component: PocketDashboard,
            },
            {
                name: 'Champions',
                path: 'champions',
                component: PocketChampions,
            },
            {
                name: 'Items',
                path: 'items',
                props: true,
                component: PocketItems,
            },
            {
                name: 'Runes',
                path: 'runes',
                component: PocketRunes,
            },
        ],
    },
    {
        path: '/table',
        name: 'table',
        component: Table,
        meta: {
            title: 'Tables',
        },
    },
    {
        path: '/cards',
        name: 'cards',
        component: Cards,
        meta: {
            title: 'Cards',
        },
    },
    {
        path: '/runes',
        name: 'runes',
        component: Runes,
        meta: {
            title: 'Runes',
        },
    },
    {
        path: '/spells',
        name: 'spells',
        component: Spells,
        meta: {
            title: 'Spells',
        },
    },

    {
        path: '/settings',
        name: 'settings',
        component: Settings,
        meta: {
            title: 'Settings',
        },
        props: true,
        children: [
            {
                name: 'general',
                path: '/settings',
                component: GeneralSettings,
            },
            {
                name: 'appearance',
                path: '/settings',
                component: AppearanceSettings,
            },
            {
                name: 'account',
                path: 'account',
                props: true,
                component: AccountSettings,
            },
            {
                name: 'hotkeys',
                path: 'hotkeys',
                props: true,
                component: HotkeySettings,
            },
            {
                name: 'storage',
                path: 'storage',
                component: StorageSettings,
            },
        ],
    },
    {
        path: '/trash',
        name: 'trash',
        component: Trash,
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
    const gs = useGeneralStore()
    const route = computed(() => {
        to.name == '' || to.name == '/' ? 'home' : to.name.toString()
    })
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
