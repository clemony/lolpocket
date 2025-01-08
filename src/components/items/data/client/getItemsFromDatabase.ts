import { supabase } from '@/lib/supabase'
import { toDictionary } from './toDictionary'
import { useDataStore } from '@stores/dataStore'
import { Items } from '@/types/dataTypes'
import { filterSR } from './filterSR'

export const getItemsFromDatabase = async () => {
    try {
        const { data, error } = await supabase
            .from('league-data')
            .select('item-data')

        if (error) {
            console.error('Error fetching JSONB object:', error)
            return null
        }
        const itemdata = Object.values(data[0])
        console.log('💠 - getItemsFromDatabase - itemdata:', itemdata)
        const itemsArray = toDictionary(itemdata[0])
        console.log('💠 - getStoredItemData - itemsArray:', itemsArray)

        if (!Array.isArray(itemsArray)) {
            console.error('itemsArray is not an array:', itemsArray)
            return
        }

        const ds = useDataStore()
        ds.items = itemsArray

        console.log('💠 - getStoredItemData - ds.items:', ds.items)

        // Filtering Summoner's Rift (SR) items
        const filteredItems = filterSR(itemsArray)
        if (!Array.isArray(filteredItems)) {
            console.error('Filtered items are not an array:', filteredItems)
            return
        }

        ds.SRitems = filteredItems

        console.log('💠 - getStoredItemData - ds.SRitems:', ds.SRitems)
    } catch (error) {
        console.error('Error processing data:', error)
    }
}
