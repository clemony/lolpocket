import { createDataObjects } from './createDataObjects'

export async function patchData() {
  const supabase = useSupabaseClient()


  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser()

  if (userError) {
    console.error('Error fetching user:', userError)
    return
  } else{
const userId = user.id
    const patch = useDataStore().currentPatch.toString()

   let cleanedItemData = await createDataObjects('https://wiki.leagueoflegends.com/en-us/api.php?', '\{{:Module:ItemData/data}}', 'item')

/*    console.log("💠 - patchData - cleanedItemData:", cleanedItemData)
cleanedItemData = cleanJsonString(cleanedItemData.toString())

 if (cleanedItemData) {
    console.log('Parsed JSON:', JSON.stringify(cleanedItemData, null, 2));
} else {
    console.log('Failed to parse JSON.');
}
 */

/*     let cleanedChampionData = await createDataObjects('https://wiki.leagueoflegends.com/en-us/api.php?', '\{{:Module:ChampionData/data}}', 'champion')
cleanedChampionData = JSON.parse(cleanedChampionData)
    console.log("💠 - patchData - cleanedChampionData:", cleanedChampionData)
  if (cleanedChampionData) {
    console.log('Parsed JSON:', JSON.stringify(cleanedChampionData, null, 2));
} else {
    console.log('Failed to parse JSON.');
}


  const { data, error } = await supabase.from('league_data').insert([
      {
        item_data: cleanedItemData,
        champion_data: cleanedChampionData,
        user_id: userId,
        patch,
      },
    ])

    if (error) {
      console.error('Error inserting data:', error)
    }
    else {
      console.log('Data inserted successfully:', data)
    } */
  }
}
