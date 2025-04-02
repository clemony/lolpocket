import axios from 'axios'
import qs from 'qs'

export async function updateChampionDatabaseData(flag?) {
}

/*   cleanedChampionData = JSON.parse(cleanedChampionData)

  if (cleanedChampionData) {
    console.log('Parsed JSON:', JSON.stringify(cleanedChampionData, null, 2))
  }
  else {
    console.log('Failed to parse JSON.')
  } */
/*
  if (!flag) {
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

      const { data, error } = await supabase.from('league-data').update({ 'champion-data': cleanedChampionData, 'patch': patch }).eq('id', 1).eq('user_id', ownerId)

      if (error) {
        console.error('Error updating data:', error)
      }
      else {
        console.log('Data updated successfully:', data)
      }
    }  }

  return cleanedChampionData
} */

/*   let cleanedChampionData = await createDataObjects('https://wiki.leagueoflegends.com/en-us/api.php?', '\{{:Module:ChampionData/data}}', 'champion') */ //
