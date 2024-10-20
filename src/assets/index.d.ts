import type plugin from 'tailwindcss/plugin'

declare const pocketui: ReturnType<typeof plugin>

export default pocketui

type CustomTheme = Record<string, Record<string, string>>

/**
 * https://daisyui.com/docs/themes/#
 */
type Theme = 'light' | 'dark' | 'neutral' | 'dim'

interface PocketUIConfig {
    /**
     *
     * @default false
     */
    themes?: boolean | (Theme | CustomTheme)[]

    /**
     * The element that receives theme color CSS variables
     *
     * @default ':root'
     */
    themeRoot?: string
}

export type { PocketUIConfig as Config, Theme, CustomTheme }
