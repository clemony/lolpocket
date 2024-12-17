import { defineStore } from 'pinia'
import { useDataStore } from './dataStore'
import { useAccountStore } from '@stores/accountStore'
import { ItemSet } from 'types'

export const useTempStore = defineStore(
    'tempStore',
    () => {
        const ds = useDataStore()
        const as = useAccountStore()

        const isPocketCarouselLocked = ref(false)
        const togglePocketLock = useToggle(isPocketCarouselLocked)

        //champs
        const selectedChampion = ref('')
        const champSearch = ref('')
        const champClassFilters = ref([])
        const sortChampsAZ = ref()
        const viewFavoriteChamps = ref()

        //items
        const selectedItem = ref()

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
        const selectedRune = ref['']
        const selectedRuneSetIndex = ref(0)

        //spells
        const selectedSpell = ref()

        return {
            isPocketCarouselLocked,
            togglePocketLock,

            //champions
            selectedChampion,
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
            selectedItem,
            resetItemsArray,
            selectedItemSet,

            //runes
            selectedRuneSetIndex,
            selectedRune,

            //spells
            selectedSpell,
        }
    },
    {
        persist: {
            storage: sessionStorage,
            key: 'tempStore',
        },
    }
)
