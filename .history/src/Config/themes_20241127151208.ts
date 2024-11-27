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
                        'b1': 'oklch(100% 0 0)',
                        'base-200': 'oklch(93% 0 0)',
                        'base-300': 'oklch(86% 0 0)',
                        'base-content': 'oklch(22.3899% 0.031305 278.07229)',
                        primary: '#000000',
                        'primary-content': 'oklch(100% 0 0)',
                        secondary: '#000000',
                        'secondary-content': 'oklch(100% 0 0)',
                        accent: '#000000',
                        'accent-content': 'oklch(100% 0 0)',
                        neutral: '#000000',
                        'neutral-content': 'oklch(100% 0 0)',
                        info: '#B48EAD',
                        success: '#A3BE8C',
                        warning: '#EBCB8B',
                        error: '#BF616A',
                        'info-content': 'oklch(22.3899% 0.031305 278.07229)',
                    },
                },
            },
            {
                name: 'dark',
                selectors: ['.dark-mode', '[data-theme="dark"]'],
                extend: {
                    colors: {
                        'b1': 'oklch( 24.3535% 0 0)',
                        'base-200': 'oklch( 22.6487% 0 0)',
                        'base-300': 'oklch( 20.944% 0 0)',
                        'base-content': 'oklch( 84.8707% 0 0)',
                        neutral: '#000000',
                        'neutral-content': 'oklch(100% 0 0)',
                        primary: 'oklch( 84.8707% 0 0)',
                        secondary: 'oklch( 84.8707% 0 0)',
                        accent: 'oklch( 84.8707% 0 0)',
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
                        'b1': 'oklch( 24.3535% 0 0)',
                        'base-200': 'oklch( 22.6487% 0 0)',
                        'base-300': 'oklch( 20.944% 0 0)',
                        'base-content': 'oklch( 84.8707% 0 0)',
                        'primary-content': 'oklch(22.3899% 0.031305 278.07229)',

                        'secondary-content':
                            'oklch(22.3899% 0.031305 278.07229)',

                        'accent-content': 'oklch(22.3899% 0.031305 278.07229)',
                        neutral: '#4C566A',
                        'neutral-content': '#D8DEE9',
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
