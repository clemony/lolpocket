import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import { pocket, drawer } from 'types'

export const useGeneralStore = defineStore(
    'generalStore',
    () => {
        const theme = ref('light')
        const accents = ref('light')

        const reducedMotion = ref(false)
        const colorBlindMode = ref(false)

        const app = ref()
        const isMinimized = ref(false)
        const sidebarState = ref()
        const defaultSidebarState = ref(true)
        const sidebarWidth = ref(18)

        const drawerState = ref(false)
        const drawerValue = shallowRef(undefined as drawer)
        const drawerPocket = ref(undefined)

        const cardBack = ref('/img/cards/moonfall.webp')
        const commandOpen = ref(false)
        const pocketGridSize = ref()
        const pocketPreview = ref(false)
        const routeHistory = []

        watch(theme, (newValue) => {
            document.documentElement.setAttribute('data-theme', newValue)
        })

        // Watch for mode changes
        watch(accents, (newMode) => {
            document.documentElement.setAttribute('data-mode', newMode)
            //console.log(`Mode changed to: ${newMode}`);
        })

        return {
            theme,
            accents,
            colorBlindMode,
            reducedMotion,
            pocketPreview,
            defaultSidebarState,
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
