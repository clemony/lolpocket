import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
<<<<<<< HEAD

import { pocket, drawer, Champion, Item, ItemSet } from 'types'

=======
<<<<<<< HEAD
=======

<<<<<<<< HEAD:src/stores/generalStore.ts
import { pocket, drawer } from 'types'
>>>>>>> 83f9266d (update 42 files and delete 17 files)

import { pocket, drawer, Champion, Item, ItemSet } from 'types'

========
import { pocket, drawer, Champion, Item, ItemSet } from 'types'

>>>>>>>> 404a531d (update 84 files and delete 4 files):src/stores/accountStore.ts
>>>>>>> 404a531d (update 84 files and delete 4 files)
export const useAccountStore = defineStore(
    'accountStore',
    () => {
        const theme = ref('light')
        const accents = ref('light')
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:src/stores/accountStore.ts
=======
<<<<<<<< HEAD:src/stores/generalStore.ts
<<<<<<< HEAD:src/stores/accountStore.ts
========
>>>>>>>> 404a531d (update 84 files and delete 4 files):src/stores/accountStore.ts
>>>>>>> 404a531d (update 84 files and delete 4 files)
=======
<<<<<<< HEAD:src/stores/accountStore.ts
>>>>>>> 58212a1a (update 38 files and delete 54 files)
        watch(theme, (newValue) => {
            document.documentElement.setAttribute('data-theme', newValue)
        })

        watch(accents, (newValue) => {
            document.documentElement.setAttribute('data-accents', newValue)
        })
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 12d6db59 (update 38 files and delete 54 files):src/client/stores/generalStore.ts
=======
<<<<<<<< HEAD:src/stores/generalStore.ts
=======
>>>>>>> 12d6db59 (update 38 files and delete 54 files):src/client/stores/generalStore.ts
========
>>>>>>>> 404a531d (update 84 files and delete 4 files):src/stores/accountStore.ts
>>>>>>> 404a531d (update 84 files and delete 4 files)
=======
=======
>>>>>>> fcc65b9c (update 38 files and delete 54 files):src/client/stores/generalStore.ts
>>>>>>> 58212a1a (update 38 files and delete 54 files)

        const reducedMotion = ref(false)
        const colorBlindMode = ref(false)

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<<< HEAD:src/stores/generalStore.ts
>>>>>>> 404a531d (update 84 files and delete 4 files)
<<<<<<< HEAD:src/stores/accountStore.ts
=======
        const app = ref()
>>>>>>> 12d6db59 (update 38 files and delete 54 files):src/client/stores/generalStore.ts
<<<<<<< HEAD
=======
========
>>>>>>>> 404a531d (update 84 files and delete 4 files):src/stores/accountStore.ts
>>>>>>> 404a531d (update 84 files and delete 4 files)
=======
<<<<<<< HEAD:src/stores/accountStore.ts
=======
        const app = ref()
>>>>>>> fcc65b9c (update 38 files and delete 54 files):src/client/stores/generalStore.ts
>>>>>>> 58212a1a (update 38 files and delete 54 files)
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

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<<< HEAD:src/stores/generalStore.ts
>>>>>>> 404a531d (update 84 files and delete 4 files)
=======
>>>>>>> 58212a1a (update 38 files and delete 54 files)
<<<<<<< HEAD:src/stores/accountStore.ts
        const favoriteChamps = ref<Champion[]>([])

        //items
        const favoriteItems = ref<Item[]>([])
        const itemSets = ref<ItemSet[]>([])
=======
        watch(theme, (newValue) => {
            document.documentElement.setAttribute('data-theme', newValue)
        })

        // Watch for mode changes
        watch(accents, (newMode) => {
            document.documentElement.setAttribute('data-mode', newMode)
            //console.log(`Mode changed to: ${newMode}`);
        })
<<<<<<< HEAD
>>>>>>> 12d6db59 (update 38 files and delete 54 files):src/client/stores/generalStore.ts
<<<<<<< HEAD
=======
========
        const favoriteChamps = ref<Champion[]>([])

        //items
        const favoriteItems = ref<Item[]>([])
        const itemSets = ref<ItemSet[]>([])
>>>>>>>> 404a531d (update 84 files and delete 4 files):src/stores/accountStore.ts
>>>>>>> 404a531d (update 84 files and delete 4 files)
=======
>>>>>>> fcc65b9c (update 38 files and delete 54 files):src/client/stores/generalStore.ts
>>>>>>> 58212a1a (update 38 files and delete 54 files)

        return {
            //settings
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
