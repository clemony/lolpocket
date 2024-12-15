export const summoner = {
    name: 'clem',
    tag: 'cats',
    region: 'americas',
    level: 143,
    icon: '/img/summoner-icons/space-yuumi.jpg',
    border: 'theme-21-border',

    peakRank: {
        peak: 'diamond',
        season: '8',
    },

    ranks: {
        soloDuo: {
            rank: 'bronze',
            tier: 4,
            games: 200,
            win: 100,
            loss: 100,
        },

        flex: {
            rank: 'platinum',
            tier: 4,
            games: 200,
            win: 200,
            loss: 0,
        },
    },
    champions: [
        {
            queue: 'all',
            champions: [
                {
                    champion: 'Sona',
                    games: 20,
                    wins: 16,
                },
                {
                    champion: 'Seraphine',
                    games: 20,
                    wins: 16,
                },
                {
                    champion: 'Janna',
                    games: 20,
                    wins: 10,
                },
                {
                    champion: 'Nami',
                    games: 25,
                    wins: 13,
                },
                {
                    champion: 'Karma',
                    games: 20,
                    wins: 1,
                },
            ],
        },
        {
            queue: 'soloDuo',
            champions: [
                {
                    champion: 'Sona',
                    games: 20,
                    wins: 16,
                },
                {
                    champion: 'Seraphine',
                    games: 20,
                    wins: 16,
                },
                {
                    champion: 'Janna',
                    games: 20,
                    wins: 16,
                },
                {
                    champion: 'Nami',
                    games: 100,
                    wins: 69,
                },
                {
                    champion: 'Soraka',
                    games: 20,
                    wins: 16,
                },
            ],
        },
        {
            queue: 'flex',
            champions: [
                {
                    champion: 'Sona',
                    games: 20,
                    wins: 16,
                },
                {
                    champion: 'Seraphine',
                    games: 20,
                    wins: 16,
                },
                {
                    champion: 'Lulu',
                    games: 20,
                    wins: 16,
                },
                {
                    champion: 'Nami',
                    games: 20,
                    wins: 16,
                },
                {
                    champion: 'Soraka',
                    games: 20,
                    wins: 16,
                },
            ],
        },
    ],
    role: {
  /*             support: {
            percent: 20,
        },
        bottom: {
            percent: 20,
        },
        mid: {
            percent: 20,
        },
        jungle: {
            percent: 20,
        },
        top: {
            percent: 20,
        }, */

        support: {
            percent: 80,
        },
        bottom: {
            percent: 10,
        },
        mid: {
            percent: 10,
        },
        jungle: {
            percent: 0,
        },
        top: {
            percent: 0,
        },
    },
}
