import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import { useDataStore } from './dataStore'

export const useGeneralStore = defineStore(
    'generalStore',
    () => {
        const dataMode = ref('light')
        const dataTheme = ref('lightminimalist')
        const dataAccent = ref('minimalist')
        const ds = useDataStore()

        const isMinimized = ref(false)
        const firstPane = ref(17)
        const secondPane = ref(83)

        const reducedMotion = ref()

        // Watch for theme changes
        watch(dataTheme, (newValue) => {
            document.documentElement.setAttribute('data-theme', newValue)
        })

        // Watch for mode changes
        watch(dataMode, (newMode) => {
            document.documentElement.setAttribute('data-mode', newMode)
            //console.log(`Mode changed to: ${newMode}`);
        })



        return {
            dataTheme,
            dataMode,
            dataAccent,
            reducedMotion,
            isMinimized,
            firstPane,
            secondPane,
        }
    },
    {
        persist: {
            storage: localStorage,
            key: 'generalStore',
        },
    }
)
