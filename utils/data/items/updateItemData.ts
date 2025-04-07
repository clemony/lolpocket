/* eslint-disable */
export async function updateItemDatabaseData(updatedData) {
console.log("💠 - updateItemDatabaseData - updatedData:", updatedData)
const ds = useDataStore()
console.log('click')
  const ownerId = import.meta.env.VITE_SUPABASE_OWNER_ID

  const supabase = useSupabaseClient()
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser()

  if (userError) {
    console.error('Error fetching user:', userError)
    return
  }
  else {
    console.log('click2')
    const userId = user.id
    const patch = useDataStore().currentPatch.toString()
    console.log("💠 - updateItemDatabaseData - patch:", patch)


console.log('click2')
    const { data, error } = await supabase
    .from('league_data')
    .update([
      { 'item_data': ds.items,}])
  .eq('patch', patch )
    .select()

          

    if (error) {
      console.error('Error updating data:', error)
    }
    else {
      console.log('Data updated successfully:', data)
    }
  
  return updatedData
  }
}


export async function integrateDataDragon(wikiData) {
  const a = await import('data/item')
  const ds = useDataStore()

  const data = a.items.data
  if (!data)
    return console.log('no item json data, returning!')

  const cleanerData = wikiData.map((item) => {

    // Convert the item ID to a string to match keys in the data object
    const match = data[item.id]

    return match ? { ...item, gold: match.gold, tags: match.tags, from: match.from, into: match.into } : item
  })

  return cleanerData
}

