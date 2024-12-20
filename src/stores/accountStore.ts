import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import { pocket, drawer, Champion, Item, ItemSet } from 'types'

export const useAccountStore = defineStore(
    'accountStore',
    () => {
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
        const sidebarOpen = ref()
        const defaultSidebarOpen = ref(true)
        const sidebarWidth = ref(18)

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
            theme,
            accents,
            colorBlindMode,
            reducedMotion,
            pocketPreview,
            defaultSidebarOpen,
            isMinimized,
            commandOpen,
            sidebarOpen,
            sidebarWidth,
            cardBack,
            pocketGridSize,
            drawerState,
            drawerValue,
            drawerPocket,
            routeHistory,

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
