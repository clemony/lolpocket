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
<<<<<<< HEAD
>>>>>>> 83f9266d (update 42 files and delete 17 files)
=======
>>>>>>> 621837bd (update 42 files and delete 17 files)
>>>>>>> c5d8fff8 (update 84 files and delete 4 files)

import { pocket, drawer, Champion, Item, ItemSet } from 'types'

========
import { pocket, drawer, Champion, Item, ItemSet } from 'types'

<<<<<<< HEAD
>>>>>>>> 404a531d (update 84 files and delete 4 files):src/stores/accountStore.ts
>>>>>>> 404a531d (update 84 files and delete 4 files)
=======
>>>>>>>> c29d3eca (update 84 files and delete 4 files):src/stores/accountStore.ts
>>>>>>> c29d3eca (update 84 files and delete 4 files)
>>>>>>> c5d8fff8 (update 84 files and delete 4 files)
export const useAccountStore = defineStore(
    'accountStore',
    () => {
        const theme = ref('light')
        const accents = ref('light')
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> c5d8fff8 (update 84 files and delete 4 files)
=======
>>>>>>> 3a4d0ed0 (update 38 files and delete 54 files)
<<<<<<< HEAD:src/stores/accountStore.ts
=======
<<<<<<<< HEAD:src/stores/generalStore.ts
<<<<<<< HEAD:src/stores/accountStore.ts
========
<<<<<<< HEAD
>>>>>>>> 404a531d (update 84 files and delete 4 files):src/stores/accountStore.ts
>>>>>>> 404a531d (update 84 files and delete 4 files)
=======
<<<<<<< HEAD:src/stores/accountStore.ts
>>>>>>> 58212a1a (update 38 files and delete 54 files)
=======
>>>>>>> 9bb9b9a6 (update src/client/assets/css/index.css)
=======
<<<<<<< HEAD:src/stores/accountStore.ts
>>>>>>> 2c930845 (update 38 files and delete 54 files)
=======
>>>>>>>> c29d3eca (update 84 files and delete 4 files):src/stores/accountStore.ts
>>>>>>> c29d3eca (update 84 files and delete 4 files)
<<<<<<< HEAD
>>>>>>> c5d8fff8 (update 84 files and delete 4 files)
=======
=======
<<<<<<< HEAD:src/stores/accountStore.ts
>>>>>>> 44bf1088 (update 38 files and delete 54 files)
>>>>>>> 3a4d0ed0 (update 38 files and delete 54 files)
        watch(theme, (newValue) => {
            document.documentElement.setAttribute('data-theme', newValue)
        })

        watch(accents, (newValue) => {
            document.documentElement.setAttribute('data-accents', newValue)
        })
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> 9bb9b9a6 (update src/client/assets/css/index.css)
=======
=======
>>>>>>> fcc65b9c (update 38 files and delete 54 files):src/client/stores/generalStore.ts
>>>>>>> 2c930845 (update 38 files and delete 54 files)
=======
=======
>>>>>>> 3a4d0ed0 (update 38 files and delete 54 files)
=======
>>>>>>> fcc65b9c (update 38 files and delete 54 files):src/client/stores/generalStore.ts
=======
<<<<<<<< HEAD:src/stores/generalStore.ts
=======
>>>>>>> fcc65b9c (update 38 files and delete 54 files):src/client/stores/generalStore.ts
========
>>>>>>>> c29d3eca (update 84 files and delete 4 files):src/stores/accountStore.ts
>>>>>>> c29d3eca (update 84 files and delete 4 files)
<<<<<<< HEAD
>>>>>>> c5d8fff8 (update 84 files and delete 4 files)
=======
=======
=======
>>>>>>> fcc65b9c (update 38 files and delete 54 files):src/client/stores/generalStore.ts
>>>>>>> 44bf1088 (update 38 files and delete 54 files)
>>>>>>> 3a4d0ed0 (update 38 files and delete 54 files)

        const reducedMotion = ref(false)
        const colorBlindMode = ref(false)

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> 2c930845 (update 38 files and delete 54 files)
=======
=======
<<<<<<<< HEAD:src/stores/generalStore.ts
>>>>>>> c29d3eca (update 84 files and delete 4 files)
>>>>>>> c5d8fff8 (update 84 files and delete 4 files)
=======
=======
<<<<<<<< HEAD:src/stores/generalStore.ts
>>>>>>> c29d3eca (update 84 files and delete 4 files)
=======
>>>>>>> 44bf1088 (update 38 files and delete 54 files)
>>>>>>> 3a4d0ed0 (update 38 files and delete 54 files)
<<<<<<< HEAD:src/stores/accountStore.ts
=======
        const app = ref()
>>>>>>> fcc65b9c (update 38 files and delete 54 files):src/client/stores/generalStore.ts
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 58212a1a (update 38 files and delete 54 files)
=======
>>>>>>> 9bb9b9a6 (update src/client/assets/css/index.css)
=======
>>>>>>> 2c930845 (update 38 files and delete 54 files)
=======
=======
>>>>>>> 3a4d0ed0 (update 38 files and delete 54 files)
=======
========
>>>>>>>> c29d3eca (update 84 files and delete 4 files):src/stores/accountStore.ts
>>>>>>> c29d3eca (update 84 files and delete 4 files)
<<<<<<< HEAD
>>>>>>> c5d8fff8 (update 84 files and delete 4 files)
=======
=======
>>>>>>> 44bf1088 (update 38 files and delete 54 files)
>>>>>>> 3a4d0ed0 (update 38 files and delete 54 files)
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<<< HEAD:src/stores/generalStore.ts
>>>>>>> 404a531d (update 84 files and delete 4 files)
=======
>>>>>>> 58212a1a (update 38 files and delete 54 files)
=======
=======
<<<<<<<< HEAD:src/stores/generalStore.ts
>>>>>>> c29d3eca (update 84 files and delete 4 files)
>>>>>>> c5d8fff8 (update 84 files and delete 4 files)
=======
=======
<<<<<<<< HEAD:src/stores/generalStore.ts
>>>>>>> c29d3eca (update 84 files and delete 4 files)
=======
>>>>>>> 44bf1088 (update 38 files and delete 54 files)
>>>>>>> 3a4d0ed0 (update 38 files and delete 54 files)
<<<<<<< HEAD:src/stores/accountStore.ts
=======
>>>>>>> 9bb9b9a6 (update src/client/assets/css/index.css)
=======
<<<<<<< HEAD:src/stores/accountStore.ts
>>>>>>> 2c930845 (update 38 files and delete 54 files)
        const favoriteChamps = ref<Champion[]>([])

        //items
        const favoriteItems = ref<Item[]>([])
        const itemSets = ref<ItemSet[]>([])
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 2c930845 (update 38 files and delete 54 files)
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 58212a1a (update 38 files and delete 54 files)
=======
>>>>>>> 9bb9b9a6 (update src/client/assets/css/index.css)
=======
>>>>>>> fcc65b9c (update 38 files and delete 54 files):src/client/stores/generalStore.ts
>>>>>>> 2c930845 (update 38 files and delete 54 files)
=======
=======
>>>>>>> 3a4d0ed0 (update 38 files and delete 54 files)
<<<<<<< HEAD
=======
========
        const favoriteChamps = ref<Champion[]>([])

        //items
        const favoriteItems = ref<Item[]>([])
        const itemSets = ref<ItemSet[]>([])
>>>>>>>> c29d3eca (update 84 files and delete 4 files):src/stores/accountStore.ts
>>>>>>> c29d3eca (update 84 files and delete 4 files)
<<<<<<< HEAD
>>>>>>> c5d8fff8 (update 84 files and delete 4 files)
=======
=======
>>>>>>> 44bf1088 (update 38 files and delete 54 files)
>>>>>>> 3a4d0ed0 (update 38 files and delete 54 files)

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
