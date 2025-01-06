import { Champion, Item, Items, Path } from '@/types/dataTypes'
import { defineStore } from 'pinia'

// Define types for the JSON data

export const useDataStore = defineStore(
    'dataStore',
    () => {
        const currentPatch = ref()
        const paths = ref<Path[]>([])
        const champions = ref<Champion[]>([])
        const items = ref<Item[] | null>(null)
        const SRitems = ref<Item[] | null>(null)
        console.log('💠 - useDataStore - SRitems:', SRitems)

        return {
            currentPatch,
            paths,
            SRitems,
            champions,
            items,
        }
    },
    {
        persist: {
            storage: localStorage,
            key: 'dataStore',
            afterHydrate: (ctx) => {
                const as = useDataStore()
                // ts.drawerState = false
            },
        },
    }
)
