import { usePocketStore } from '@stores/pocketStore'

export const navData = {
    navCollapse: [

        {
            title: 'Database',
            url: '',
            icon: 'cil:save',
            isActive: true,

            items: [
                {
                    title: 'Champions',
                    url: '/champions',
                    icon: '',
                    array: '',
                },
                {
                    title: 'Items',
                    url: '/items',
                    icon: '',
                },
                {
                    title: 'Runes',
                    url: '/runes',
                    icon: '',
                },
            ],
        },
        {
            title: 'Settings',
            url: '#',
            icon: 'qlementine-icons:tool-16',
            items: [
                {
                    title: 'General',
                    url: '/settings',
                    icon: '',
                },
                {
                    title: 'Account',
                    url: '#',
                    icon: 'teenyicons:at-outline',
                },
                {
                    title: 'About',
                    url: '/about',
                    icon: 'teenyicons:info-outline',
                },

            ],
        },
    ],

}


