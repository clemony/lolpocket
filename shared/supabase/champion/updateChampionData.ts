import { getWikiData } from '../getWikiData'

export async function patchChampionDatabase() {
  const supabase = useSupabaseClient()

  const ownerId = import.meta.env.VITE_SUPABASE_OWNER_ID

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser()

  if (userError) {
    console.error('Error fetching user:', userError)
    return
  }

  if (!user) {
    console.error('No user is authenticated.')
    return
  }

  const cleanedData = await getWikiData('https://wiki.leagueoflegends.com/en-us/api.php?', '\{{:Module:ChampionData/data}}', 'champion')

  let jsonData

  try {
    jsonData = typeof cleanedData === 'string' ? JSON.parse(cleanedData) : cleanedData
  }
  catch (error) {
    console.error('Error parsing cleanedData:', error)
    return
  }

  console.log('💠 - patchChampionDatabase - jsonData:', jsonData)

  const patch = useDataStore().currentPatch.toString()
  console.log('💠 - updateWikiData - patch:', patch)

  const { data, error } = await supabase.from('league-data').update({ 'champion-data': jsonData, 'patch': patch }).eq('id', 1).eq('user_id', ownerId)

  if (error) {
    console.error('Error updating data:', error)
  }
  else {
    console.log('Data updated successfully:', data)
  }
}
