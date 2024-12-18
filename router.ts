import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import { useAccountStore } from './src/stores/accountStore'

import { computed } from 'vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        component: () => import(`./src/pages/Home.vue`),
    },

    // player

    {
        path: '/insights',
        name: 'insights',
        component: () => import(`./src/pages/Home.vue`),
    },
    {
        path: '/buildanalysis',
        name: 'build-analysis',
        component: () => import(`./src/pages/BuildAnalysis.vue`),
    },
    {
        path: '/matchhistory',
        name: 'match-history',
        component: () => import(`./src/pages/MatchHistory.vue`),
    },

    // pocket

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

    // pocket tools

    {
        path: '/archive',
        name: 'archive',
        component: () => import(`./src/pages/pocketTools/Archive.vue`),
    },
    {
        path: '/trash',
        name: 'trash',
        component: () => import(`./src/pages/pocketTools/Trash.vue`),
        meta: {
            title: 'lolpockets | Trash',
        },
    },
    {
        path: '/table',
        name: 'table',
        component: () => import(`./src/pages/pocketTools/PocketTables.vue`),
        meta: {
            title: 'Tables',
        },
    },
    {
        path: '/cards',
        name: 'cards',
        component: () => import(`./src/pages/pocketTools/PocketCards.vue`),
        meta: {
            title: 'Cards',
        },
    },

    // tools

    {
        path: '/calculator',
        name: 'calculator',
        component: () => import(`./src/pages/pocketTools/Trash.vue`),
    },

    // database

    {
        path: '/favorites',
        name: 'favorites',
        component: () => import(`./src/pages/Favorites.vue`),
    },
    {
        path: '/champions',
        name: 'champions',
        component: () => import(`./src/pages/Champions.vue`),
    },
    {
        path: '/items',
        name: 'items',
        component: () => import(`./src/pages/Items.vue`),
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

    // settings

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

    // unimportant

    {
        path: '/about',
        name: 'about',
        component: () => import(`./src/pages/About.vue`),
    },
]

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

const router = createRouter({
    history: createWebHistory(),
    routes,
})

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
