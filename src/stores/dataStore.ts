import { Champion, Item, Path } from '@/types/dataTypes'
import { defineStore } from 'pinia'

// Define types for the JSON data

export const useDataStore = defineStore(
    'dataStore',
    () => {
        const paths = ref<Path[]>([])
        const champions = ref<Champion[]>([])
        const items = ref<Item[]>([])

        return {
            paths,
            champions,
            items,
        }
    },

    {
        persist: {
            storage: localStorage,
            key: 'dataStore',
        },
    }
)
