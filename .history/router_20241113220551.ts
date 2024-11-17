import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Pocket from './src/pages/pocket.vue'
import Pockets from './src/pages/pockets.vue'
import Settings from './src/pages/settings.vue'
import Trash from './src/pages/trash.vue'
import Archive from './src/pages/archive.vue'
import { usePocketStore } from '@/Stores/pocketStore'
import Home from '@pages/home.vue'


const routes: RouteRecordRaw[] = [
    
    {
        path: '/about',
        name: 'about',
        component: () => import('./src/pages/about.vue'),
    },
    {
        path: '/app',
        name: 'app',
        component: () => import('./src/pages/app.vue'),
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
        component: () => import('./src/pages/home.vue'),
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
        path: '/likes',
        name: 'likes',
        component: () => import('./src/pages/likes.vue'),
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


