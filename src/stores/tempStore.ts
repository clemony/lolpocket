import { defineStore } from 'pinia'
import { useDataStore } from './oldDataStore'
import { useAccountStore } from '@stores/accountStore'
import { drawer, ItemSet } from '@/types/pocketTypes'

export const useTempStore = defineStore(
    'tempStore',
    () => {
        const ds = useDataStore()
        const as = useAccountStore()

        const currentPatch = '14.24.1'
        const userOS = ref()
        const clickType = computed(() => {
            return userOS.value == 'Mac' || 'Windows' ?
                    'right click'
                :   'force press'
        })

        // drawerhttps://github.com/saadeghi/daisyui/blob/v5/packages/daisyui/functions/themePlugin.js
        const drawerState = ref(false)
        const drawerValue = shallowRef(null as drawer)

        // drawer selections
        const drawerPocket = ref(null)
        const selectedChampion = ref(null)
        const selectedItem = ref(null)
        const selectedRune = ref(null)

        //champs
        const champSearch = ref('')
        const champClassFilters = ref([])
        const sortChampsAZ = ref()
        const viewFavoriteChamps = ref()

        //items
        const items = ref([...ds.items])
        const sortItemsAZ = ref(0)
        const sortPrice = ref(0)
        const itemSearchFilter = ref('')
        const catFilters = ref<string[]>([])
        const statFilters = ref<string[]>([])
        const viewFavoriteItems = ref(false)
        const selectedItemSet = ref<ItemSet | null>(null)

        // Method to reset the items array
        const resetItemsArray = () => {
            items.value = [...ds.items] // Reset to the original data from dataStore
        }

        watch(
            () => as.favoriteItems,
            (newVal) => {
                if (!newVal.length) {
                    viewFavoriteItems.value = false
                }
            },
            { immediate: true }
        )

        //runes
        const selectedRuneSetIndex = ref(0)

        //spells
        const selectedSpell = ref()

        return {
            currentPatch,
            userOS,
            clickType,

            //drawer

            drawerState,
            drawerValue,

            //drawer selections
            drawerPocket,
            selectedItem,
            selectedChampion,
            selectedRune,

            //champions
            viewFavoriteChamps,
            sortChampsAZ,
            champClassFilters,
            champSearch,

            //items
            items,
            viewFavoriteItems,
            sortItemsAZ,
            sortPrice,
            catFilters,
            statFilters,
            itemSearchFilter,
            resetItemsArray,
            selectedItemSet,

            //runes
            selectedRuneSetIndex,

            //spells
            selectedSpell,
        }
    },
    {
        persist: {
            storage: sessionStorage,
            key: 'tempStore',
            afterHydrate: (ctx) => {
                const ts = useTempStore()
                ts.drawerState = false
            },
        },
    }
)
