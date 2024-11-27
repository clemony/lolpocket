import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import { pocket, modal } from 'types'

export const useGeneralStore = defineStore(
    'generalStore',
    () => {
        const dataMode = ref('light')
        const mainTheme = ref('defaultTheme')
        const dataAccent = ref('minimalist')
        const dataTheme = ref('light')
        const app = ref()
        const isMinimized = ref(false)
        const sidebarState = ref()
        const sidebarWidth = ref(18)
        const modalState = ref(false)
        const modalValue = shallowRef(undefined as modal)
        const modalPocket = ref(undefined)
        function toggleModalState(modalData, pocket?) {
            modalState.value = !modalState.value
            modalValue.value = modalData
            pocket ? (modalPocket.value = pocket) : ''
        }
        const commandOpen = ref(false)
        const pocketGridSize = ref()
        const pocketPreview = ref(false)
        const reducedMotion = ref(false)

        const appearanceRef = ref()
        // Watch for theme changes
        watch(mainTheme, (newValue) => {
            document.documentElement.setAttribute('data-theme', newValue)
        })

        // Watch for mode changes
        watch(dataMode, (newMode) => {
            document.documentElement.setAttribute('data-mode', newMode)
            //console.log(`Mode changed to: ${newMode}`);
        })

        return {
            mainTheme,
            dataMode,
            dataAccent,
            reducedMotion,
            pocketPreview,
            isMinimized,
            commandOpen,
            sidebarState,
            sidebarWidth,
            app,
            pocketGridSize,
            modalState,
            toggleModalState,
            modalValue,
            modalPocket,
            dataTheme,
            appearanceRef,
        }
    },
    {
        persist: {
            storage: localStorage,
            key: 'generalStore',
            omit: ['modal, modalPocket, modalState'],
            afterHydrate: (ctx) => {
                const gs = useGeneralStore()
                gs.modalState = false
            },
        },
    }
)
