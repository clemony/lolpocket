/* eslint-disable */
export async function updateItemDatabaseData(updatedData) {
const ds = useDataStore()
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
 /*  else {
    const userId = user.id
    const patch = useDataStore().currentPatch.toString()
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
  } */
}


export async function integrateDataDragon(wikiData) {
  const a = await import('data/item')
  const ds = useDataStore()

  const data = a.items.data
  if (!data)
    return console.log('no item json data, returning!')

  const cleanerData = wikiData.map((item) => {

    const match = data[item.id]

    return match ? { ...item, gold: match.gold, tags: match.tags, from: match.from, into: match.into } : item
  })

  return cleanerData
}

