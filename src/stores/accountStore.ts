import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import { pocket, drawer, Champion, Item, ItemSet } from 'types'

export const useAccountStore = defineStore(
    'accountStore',
    () => {
        const userOS = ref('')
        const theme = ref('light')
        const accents = ref('light')
        watch(theme, (newValue) => {
            document.documentElement.setAttribute('data-theme', newValue)
        })

        watch(accents, (newValue) => {
            document.documentElement.setAttribute('data-accents', newValue)
        })

        const reducedMotion = ref(false)
        const colorBlindMode = ref(false)

        const isMinimized = ref(false)
        const sidebarOpen = ref(false)
        const defaultSidebarOpen = ref(false)
        const sidebarWidth = ref(18)
        const sidebarCollapsible = ref()

        const drawerState = ref(false)
        const drawerValue = shallowRef(undefined as drawer)
        const drawerPocket = ref(undefined)

        const cardBack = ref('/img/cards/moonfall.webp')
        const commandOpen = ref(false)
        const pocketGridSize = ref()
        const pocketPreview = ref(false)
        const routeHistory = []

        const favoriteChamps = ref<Champion[]>([])

        //items
        const favoriteItems = ref<Item[]>([])
        const itemSets = ref<ItemSet[]>([])

        return {
            //settings
            userOS,
            theme,
            accents,
            colorBlindMode,
            reducedMotion,
            pocketPreview,

            //sidebar
            defaultSidebarOpen,
            sidebarOpen,
            sidebarWidth,
            sidebarCollapsible,

            commandOpen,
            drawerState,
            drawerValue,
            drawerPocket,
            routeHistory,

            cardBack,
            pocketGridSize,

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
            omit: ['drawer, drawerPocket, drawerState'],
            afterHydrate: (ctx) => {
                const as = useAccountStore()
                as.drawerState = false
            },
        },
    }
)
