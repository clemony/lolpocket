import { createDataObjects } from './createDataObjects'

export async function patchData() {
  const supabase = useSupabaseClient()

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser()

  if (userError) {
    console.error('Error fetching user:', userError)
  }
  else {
    const userId = computed(() => {
      user ? user.id : ''
    })

    const patch = useDataStore().currentPatch.toString()

    const cleanedItemData = await createDataObjects('https://wiki.leagueoflegends.com/en-us/api.php?', '\{{:Module:ItemData/data}}', 'item')

    console.log('💠 - patchNewData - cleanedItemData:', cleanedItemData)
    const cleanedChampionData = await createDataObjects('https://wiki.leagueoflegends.com/en-us/api.php?', '\{{:Module:ChampionData/data}}', 'champion')

    console.log('💠 - patchNewData - cleanedChampionData:', cleanedChampionData)

    /*     const { data, error } = await supabase.from('league_data').insert([
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
