import { usePocketStore } from '@/stores/pocketStore'
import type { navData } from 'types'
export const nav: navData = [
    {
        name: 'Database',
        url: '',
        icon: 'qlementine-icons:drive-16', //cil:save
        isActive: true,

        items: [
            {
                name: 'Champions',
                url: 'champions',
                icon: '',
            },
            {
                name: 'Items',
                url: 'items',
                icon: '',
            },
            {
                name: 'Runes',
                url: 'runes',
                icon: '',
            },

            {
                name: 'Spells',
                url: 'spells',
                icon: '',
            },
        ],
    },
    {
        name: 'Settings',
        url: '#',
        icon: 'ph:gear-six',
        items: [
            {
                name: 'General',
                url: 'settings',
                hash: '#general',
                icon: '',
            },
            {
                name: 'Appearance',
                url: 'settings',
                hash: '#appearance',
                icon: 'teenyicons:info-outline',
            },
            {
                name: 'Account',
                url: 'settings',
                hash: '#account',
                icon: 'teenyicons:at-outline',
            },
        ],
    },
]
