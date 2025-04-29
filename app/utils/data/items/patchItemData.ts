/* eslint-disable */
export async function patchItemDatabaseData() {
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
    const userId = user.id
    const patch = useDataStore().currentPatch.toString()
    console.log('💠 - updateItemDatabaseData - patch:', patch)

  let cleanedItemData = await createDataObjects('https://wiki.leagueoflegends.com/en-us/api.php?', '\{{:Module:ItemData/data}}', 'item')

  cleanedItemData = cleanJsonString(cleanedItemData.toString())
cleanedItemData = integrateDataDragon(cleanedItemData)
  if (cleanedItemData) {
    console.log('Parsed JSON:', JSON.stringify(cleanedItemData, null, 2))
  }
  else {
    console.log('Failed to parse JSON.')
  }

 /*    const { data, error } = await supabase
    .from('league_data')
    .insert([
      { 'item_data': cleanedItemData, 'patch': patch, 'user_id': userId }])
    .select()


    if (error) {
      console.error('Error updating data:', error)
    }
    else {
      console.log('Data updated successfully:', data)
    } */
  
  return cleanedItemData
  }
}


