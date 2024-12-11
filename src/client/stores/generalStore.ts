import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import { pocket, drawer } from 'types'

export const useGeneralStore = defineStore(
    'generalStore',
    () => {
        const dataMode = ref('light')
        const theme = ref('light')
        const dataneutral = ref('minimalist')
        const dataTheme = ref('light')
        const app = ref()
        const isMinimized = ref(false)
        const sidebarState = ref()
        const sidebarWidth = ref(18)

        const drawerState = ref(false)
        const drawerValue = shallowRef(undefined as drawer)
        const drawerPocket = ref(undefined)

        const cardBack = ref('/img/cards/moonfall.webp')
        const commandOpen = ref(false)
        const pocketGridSize = ref()
        const pocketPreview = ref(false)
        const reducedMotion = ref(false)
        const routeHistory = []

        const appearanceRef = ref()
        // Watch for theme changes
        watch(theme, (newValue) => {
            document.documentElement.setAttribute('data-theme', newValue)
        })

        // Watch for mode changes
        watch(dataTheme, (newMode) => {
            document.documentElement.setAttribute('data-mode', newMode)
            //console.log(`Mode changed to: ${newMode}`);
        })

        return {
            theme,
            dataMode,
            dataneutral,
            reducedMotion,
            pocketPreview,
            isMinimized,
            commandOpen,
            sidebarState,
            sidebarWidth,
            app,
            cardBack,
            pocketGridSize,
            drawerState,
            drawerValue,
            drawerPocket,
            dataTheme,
            appearanceRef,
            routeHistory,
        }
    },
    {
        persist: {
            storage: localStorage,
            key: 'generalStore',
            omit: ['drawer, drawerPocket, drawerState'],
            afterHydrate: (ctx) => {
                const gs = useGeneralStore()
                gs.drawerState = false
            },
        },
    }
)
