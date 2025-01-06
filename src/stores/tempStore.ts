import { defineStore } from 'pinia'
import { useDataStore } from './dataStore'
import { useAccountStore } from '@stores/accountStore'
import { ItemSet } from '@/types/pocketTypes'
import { Item } from '@/types/dataTypes'
import type { drawer } from '@/types/utilityTypes'

export const useTempStore = defineStore(
    'tempStore',
    () => {
        // const ds = useDataStore()
        const as = useAccountStore()

        const userOS = ref()
        const clickType = computed(() => {
            return userOS.value == 'Mac' || 'Windows' ?
                    'right click'
                :   'force press'
        })

        // drawer
        const drawerState = ref(false)
        const drawerValue = shallowRef(null as drawer)

        // drawer selections
        const drawerPocket = ref(null)
        const selectedChampion = ref(null)
        const selectedItem = ref()
        const selectedRune = ref(null)

        //champs
        const champSearch = ref('')
        const champClassFilters = ref([])
        const sortChampsAZ = ref()
        const viewFavoriteChamps = ref()
        const browseChampionClass = ref([])
        const browseChampionTypes = ref(null)
        const browseChampSearch = ref(null)
        const sortBrowseChampsAZ = ref(null)
        const browseFavoriteChamps = ref(false)

        //items
        //const items = ref([...ds.items])
        const sortItemsAZ = ref(0)
        const sortPrice = ref(0)
        const itemSearchFilter = ref('')
        const catFilters = ref<string[]>([])
        const statFilters = ref<string[]>([])
        const viewFavoriteItems = ref(false)
        const selectedItemSet = ref<ItemSet | null>(null)
        const browseItemTypes = ref()
        const browseItemStats = ref([])
        const browseItemCats = ref([])
        const biSearchResult = ref()

        // Method to reset the items array
        const resetItemsArray = () => {
            //items.value = [...ds.items] // Reset to the original data from dataStore
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
            browseChampionClass,
            browseChampionTypes,
            browseChampSearch,
            browseFavoriteChamps,
            sortBrowseChampsAZ,
            //items
            // items,
            viewFavoriteItems,
            sortItemsAZ,
            sortPrice,
            catFilters,
            statFilters,
            itemSearchFilter,
            resetItemsArray,
            selectedItemSet,
            browseItemTypes,
            browseItemStats,
            browseItemCats,
            biSearchResult,

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
