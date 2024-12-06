module.exports = {
    defaultTheme: {
        defaultTheme: {
            extend: {
                colors: {
                    // globals

                    'tea-rose': '#E2ACAC',
                    'dark-rose': '#CE8E8E',
                    'old-rose': '#CE8E8E',
                    precision: '#ebcb8b',
                    domination: '#bf616a',
                    inspiration: '#A4C1C4',
                    sorcery: '#b48dad',
                    resolve: '#a3be8c',
                },
            },
        },
        themes: [
            {
                name: 'light',
                selectors: ['.light-mode', '[data-theme="light"]'],
                extend: {
                    colors: {
                        b1: '100% 0 0',
                        b2: '93% 0 0',
                        b3: '86% 0 0',
                        bc: '22.3899% 0.031305 278.07229',
                        primary: '#000000',
                        'primary-content': '100% 0 0',
                        secondary: '#000000',
                        'secondary-content': '100% 0 0',
                        accent: '#000000',
                        ac: '100% 0 0',
                        accent: '#000000',
                        ac: '100% 0 0',
                        info: '#B48EAD',
                        success: '#A3BE8C',
                        warning: '#EBCB8B',
                        error: '#BF616A',
                        'info-content': '22.3899% 0.031305 278.07229',
                    },
                },
            },
            {
                name: 'dark',
                selectors: ['.dark-mode', '[data-theme="dark"]'],
                extend: {
                    colors: {
                        b1: ' 24.3535% 0 0',
                        b2: ' 22.6487% 0 0',
                        b3: ' 20.944% 0 0',
                        bc: ' 84.8707% 0 0',
                        accent: '#000000',
                        ac: '100% 0 0',
                        primary: ' 84.8707% 0 0',
                        secondary: ' 84.8707% 0 0',
                        accent: ' 84.8707% 0 0',
                        info: '#B48EAD',
                        success: '#A3BE8C',
                        warning: '#EBCB8B',
                        error: '#BF616A',
                    },
                },
            },
            {
                name: 'nord',
                extend: {
                    colors: {
                        b1: ' 24.3535% 0 0',
                        b2: ' 22.6487% 0 0',
                        b3: ' 20.944% 0 0',
                        bc: ' 84.8707% 0 0',
                        'primary-content': '22.3899% 0.031305 278.07229',

                        'secondary-content': '22.3899% 0.031305 278.07229',

                        ac: '22.3899% 0.031305 278.07229',
                        accent: '#4C566A',
                        ac: '#D8DEE9',
                        primary: '#5E81AC',
                        secondary: '#81A1C1',
                        accent: '#88C0D0',
                        info: '#B48EAD',
                        success: '#A3BE8C',
                        warning: '#EBCB8B',
                        error: '#BF616A',
                    },
                },
            },
        ],
    },
}
