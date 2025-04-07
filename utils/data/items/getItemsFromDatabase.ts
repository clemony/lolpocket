

export async function getItemsFromDatabase() {
  const supabase = useSupabaseClient()
  const ds = useDataStore()
  try {
    const { data, error } = await supabase.from('league_data').select('item_data')

    if (error) {
      console.error('Error fetching JSONB object:', error)
      return null
    }

    const itemData = data[data.length - 1].item_data // Get the last record

    const transformedItems = Object.entries(itemData).map(([name, properties]) => ({
      name,
      ...(typeof properties === 'object' && properties !== null ? properties : { value: properties }),
    }))

    const filteredItems = filterSR(Object.values(transformedItems))
    if (!Array.isArray(filteredItems)) {
      console.error('Filtered items are not an array:', filteredItems)
      return
    }

    ds.items = filteredItems
  }
  catch (error) {
    console.error('Unexpected error:', error)
  }
}
