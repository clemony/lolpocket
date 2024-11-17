import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Pocket from './src/Pages/pocket.vue'
import Pockets from './src/Pages/pockets.vue'
import Settings from './src/Pages/settings.vue'
import Trash from './src/Pages/trash.vue'
import Archive from './src/Pages/archive.vue'
import { usePocketStore } from '@/stores/pocketStore'
import { useGeneralStore } from '@stores/generalStore'

import Home from './src/Pages/home.vue'
import Runes from './src/Pages/runes.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/about',
        name: 'about',
        component: () => import('./src/Pages/about.vue'),
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
        component: () => import('./src/Pages/champions.vue'),
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
        component: () => import('./src/Pages/items.vue'),
    },
    {
        path: '/likes',
        name: 'likes',
        component: () => import('./src/Pages/likes.vue'),
    },
    {
        path: '/pocket/:pocketKey',
        component: Pocket,
        meta: {
            title: 'Pocket',
            icon: 'teenyicons:folder-outline',
        },
        props: true,
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
        name: 'rettings',
        component: Runes,
        meta: {
            title: 'Runes',
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
})

export default router
