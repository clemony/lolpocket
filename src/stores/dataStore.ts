import { getChampsFromDatabase } from '@/components/champions/data/getChampsFromDatabase'
import { getItemsFromDatabase } from '@/components/items/data/client/getItemsFromDatabase'
import { Champion, Item, Items, Path } from '@/types/dataTypes'
import { getRuneData } from '@data/getData'
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

        const loadData = () => {
            !SRitems ? getItemsFromDatabase() : ''
            !champions ? getChampsFromDatabase() : ''
            !paths ? getRuneData() : ''
            console.log('💠 - useDataStore - SRitems:', SRitems)
            console.log('💠 - champions:', champions)
            console.log('💠 - paths:', paths)
        }
        return {
            loadData,
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
