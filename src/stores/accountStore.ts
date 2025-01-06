import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { Champion, Item, Rune } from '@/types/dataTypes'
import { ItemSet } from '@/types/pocketTypes'

export const useAccountStore = defineStore(
    'accountStore',
    () => {
        const isLoggedIn = ref(false)

        const theme = ref('light')
        const accents = ref('light')
        watch(theme, (newValue) => {
            document.documentElement.setAttribute('data-theme', newValue)
        })

        watch(accents, (newValue) => {
            document.documentElement.setAttribute('data-accents', newValue)
        })

        const heroModel = ref(0)

        const reducedMotion = ref(false)
        const colorBlindMode = ref(false)

        const sidebarOpen = ref(false)
        const mobileOpen = ref(false)
        const defaultSidebarOpen = ref(false)
        const sidebarWidth = ref(18)
        const sidebarCollapsible = ref()

        const cardBack = ref('/img/cards/moonfall.webp')
        const commandOpen = ref(false)
        const pocketPreview = ref(false)
        const routeHistory = []

        const favoriteChamps = ref<Champion[]>([])

        //items
        const favoriteItems = ref<Item[]>([])
        const itemSets = ref<ItemSet[]>([])

        return {
            isLoggedIn,

            //settings
            theme,
            accents,
            heroModel,
            colorBlindMode,
            reducedMotion,
            pocketPreview,

            //sidebar
            defaultSidebarOpen,
            sidebarOpen,
            mobileOpen,
            sidebarWidth,
            sidebarCollapsible,

            commandOpen,
            routeHistory,

            cardBack,

            //champs
            favoriteChamps,

            //items
            favoriteItems,
            itemSets,
        }
    },
    {
        persist: {
            storage: localStorage,
            key: 'accountStore',
            afterHydrate: (ctx) => {
                const as = useAccountStore()
                // ts.drawerState = false
            },
        },
    }
)
