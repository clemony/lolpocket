import { getWikiData } from './getWikiData'

export async function patchNewData() {
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

    const cleanedItemData = await getWikiData('https://wiki.leagueoflegends.com/en-us/api.php?', '\{{:Module:ItemData/data}}', 'item')

    const cleanedChampionData = await getWikiData('https://wiki.leagueoflegends.com/en-us/api.php?', '\{{:Module:ChampionData/data}}', 'champion')

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
    }
  }
}
