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

        const sortAZ = ref('')
        const sortPrice = ref('')
        const searchFilter = ref('')
        const catFilters = ref<string[]>([])
        const statFilters = ref<string[]>([])
        const viewLoved = ref(false)
        const lovedItems = ref<Item[]>([])
        const itemSets = ref<ItemSet[]>([])
        const starred = ref<ItemSet | null>(null)

        watch(
            () => lovedItems.value,
            (newVal) => {
                if (!newVal.length) {
                    viewLoved.value = false
                }
            },
            { immediate: true }
        )

        function handleLike(thisItem) {
            if (lovedItems.value.some((item) => item.name === thisItem.name)) {
                const index = lovedItems.value.findIndex(
                    (item) => item.name === thisItem.name
                )
                if (index !== -1) {
                    lovedItems.value.splice(index, 1)
                }
            } else {
                lovedItems.value.push(thisItem)
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
            const thisPocket = ps.getPocket(pocket)
            const set = thisPocket?.items[0].itemSets.find(
                (set) => set.key === itemSet
            )

            if (set && Array.isArray(set.items)) {
                set.items.push(item)
            }
        }

        function removeFromSet(pocket, itemSet, itemx) {
            const ps = usePocketStore()
            const thisPocket = ps.getPocket(pocket)
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
            viewLoved,
            lovedItems,
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
