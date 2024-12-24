import { navData } from 'types'

export const links: navData = [
    {
        name: 'Database',
        icon: 'qlementine-icons:drive-16',
        open: true,
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
        name: 'Resources',
        icon: 'carbon:group-resource',
        open: false,
        submenu: [
            {
                name: 'Official',
                open: true,
                items: [
                    {
                        name: 'Dev Updates',
                        url: 'https://www.leagueoflegends.com/en-us/news/dev/',
                        icon: '/img/logos/fist.webp',
                    },
                    {
                        name: 'Patch Notes',
                        url: 'https://www.leagueoflegends.com/en-us/news/tags/patch-notes/',
                        icon: '/img/logos/league2.webp',
                    },
                    {
                        name: 'Wiki',
                        url: 'https://wiki.leagueoflegends.com/en-us/',
                        icon: '/img/logos/wiki.webp',
                    },
                ],
            },
            {
                name: 'Statistics',
                open: true,
                items: [
                    {
                        name: 'Lolalytics',
                        url: 'https://lolalytics.com',
                        icon: '/img/logos/lolalytics.webp',
                    },
                    {
                        name: 'op.gg',
                        url: 'https://www.op.gg',
                        icon: '/img/logos/opgg2.webp',
                    },
                    {
                        name: 'u.gg',
                        url: 'https://u.gg',
                        icon: '/img/logos/ugg2.webp',
                    },
                    {
                        name: 'League of Graphs',
                        url: 'https://www.leagueofgraphs.com',
                        icon: '/img/logos/LoG.webp',
                    },
                    {
                        name: 'League of Items',
                        url: 'https://leagueofitems.com',
                        icon: '/img/logos/LoI.webp',
                    },
                ],
            },
        ],
    },
]

export const settingLinks: navData = [
    {
        name: 'General',
        url: 'general',
        icon: '',
    },
    {
        name: 'appearance',
        url: 'appearance',
        icon: '',
    },
    {
        name: 'account',
        url: 'account',
        icon: '',
    },
    {
        name: 'hotkeys',
        url: 'hotkeys',
        icon: '',
    },
]

export const infoLinks = [
    {
        name: 'Docs',
        url: 'docs',
        type: 'i',
    },
    {
        name: 'About',
        url: 'about',
        type: 'i',
    },
    {
        name: 'contact@lolpocket.win',
        url: '',
        type: 'ex',
    },
    {
        name: 'support@lolpocket.win',
        url: '',
        type: 'ex',
    },
    {
        name: 'Discord',
        url: 'https://discord.gg/Jzuu7bYTZY',
        type: 'ex',
    },
]
