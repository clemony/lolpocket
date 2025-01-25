import { getWikiData } from '../getWikiData'

export async function patchItemDatabase() {
  const supabase = useSupabaseClient()

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser()

  const userId = user.id
  if (userError) {
    console.error('Error fetching user:', userError)
    return
  }

  if (!user) {
    console.error('No user is authenticated.')
    return
  }

  const cleanedData = await getWikiData('https://wiki.leagueoflegends.com/en-us/api.php?', '\{{:Module:ItemData/data}}', 'item')

  let jsonData

  try {
    jsonData = typeof cleanedData === 'string' ? JSON.parse(cleanedData) : cleanedData
  }
  catch (error) {
    console.error('Error parsing cleanedData:', error)
    return
  }

  const patch = useDataStore().currentPatch.toString()

  const { data, error } = await supabase.from('league_data').update({ item_data: jsonData, patch }).eq('id', 1).eq('user_id', userId)

  if (error) {
    console.error('Error updating data:', error)
  }
  else {
    console.log('Data updated successfully:', data)
  }
}
