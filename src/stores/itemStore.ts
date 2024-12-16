import { defineStore } from 'pinia'
import { reactive, ref, watch } from 'vue'
import { useDataStore } from './dataStore'
import { Item, ItemSet } from '../../types'

import { usePocketStore } from './pocketStore'
import { hexoid } from 'hexoid'

export const useItemStore = defineStore(
    'itemStore',
    () => {
        const ds = useDataStore()

        const selectedItem = ref()

        const items = ref([...ds.items])

        const sortAZ = ref(0)
        const sortPrice = ref(0)
        const searchFilter = ref('')
        const catFilters = ref<string[]>([])
        const statFilters = ref<string[]>([])
        const viewFavorite = ref(false)
        const favoriteItems = ref<Item[]>([])
        const itemSets = ref<ItemSet[]>([])
        const selectedSet = ref<ItemSet | null>(null)
        const starred = ref<ItemSet | null>(null)

        watch(
            () => favoriteItems.value,
            (newVal) => {
                if (!newVal.length) {
                    viewFavorite.value = false
                }
            },
            { immediate: true }
        )

        function handleLike(thisItem) {
            if (
                favoriteItems.value.some((item) => item.name === thisItem.name)
            ) {
                const index = favoriteItems.value.findIndex(
                    (item) => item.name === thisItem.name
                )
                if (index !== -1) {
                    favoriteItems.value.splice(index, 1)
                }
            } else {
                favoriteItems.value.push(thisItem)
            }
        }

        /* -------------------------------- ITEMS -------------------------------- */

        // Wrap the arrays in `ref` to make them reactive

        function resetItems(key: string) {
            const set = itemSets.value.find((set) => set.key === key)

            if (set && Array.isArray(set.items)) {
                set.items.splice(0, set.items.length) // Reset the array
            }
        }

        function addToSet(pocket, itemSet, item) {
            const ps = usePocketStore()
            const thisPocket = getPocket(pocket)
            const set = thisPocket?.items[0].itemSets.find(
                (set) => set.key === itemSet
            )

            if (set && Array.isArray(set.items)) {
                set.items.push(item)
            }
        }

        function removeFromSet(pocket, itemSet, itemx) {
            const ps = usePocketStore()
            const thisPocket = getPocket(pocket)
            const set = thisPocket?.items[0].itemSets.find(
                (set) => set.key === itemSet
            )

            if (set) {
                const index = set.items.findIndex((item) => item === itemx)
                if (set && Array.isArray(set.items)) {
                    set.items.splice(index)
                }
            }
        }

        // Method to reset the items array
        const resetItemsArray = () => {
            items.value = [...ds.items] // Reset to the original data from dataStore
        }

        /* -------------------------------- RUNES  ------------------------------- */

        return {
            items,
            itemSets,
            resetItems,
            sortAZ,
            sortPrice,
            catFilters,
            statFilters,
            searchFilter,
            selectedItem,
            addToSet,
            removeFromSet,
            selectedSet,
            viewFavorite,
            favoriteItems,
            handleLike,
            resetItemsArray,
            starred,
        }
    },

    {
        persist: {
            storage: localStorage,
            key: 'itemStore',
        },
    }
)
