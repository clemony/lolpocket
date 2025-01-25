import { filterSR } from './filterSR'
import { toDictionary } from './toDictionary'

export async function getItemsFromDatabase() {
  const supabase = useSupabaseClient()

  try {
    const { data, error } = await supabase.from('league_data').select('item_data')

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

    useDataStore().items = itemsArray

    console.log('💠 - getStoredItemData -useDataStore().items:', useDataStore().items)

    // Filtering Summoner's Rift (SR) items
    const filteredItems = filterSR(itemsArray)
    if (!Array.isArray(filteredItems)) {
      console.error('Filtered items are not an array:', filteredItems)
      return
    }

    useDataStore().SRitems = filteredItems

    console.log('💠 - getStoredItemData -useDataStore().SRitems:', useDataStore().SRitems)
  }
  catch (error) {
    console.error('Error processing data:', error)
  }
}
