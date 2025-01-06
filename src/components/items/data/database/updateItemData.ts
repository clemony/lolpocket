import { supabase } from '@lib/supabase'
import { useDataStore } from '@stores/dataStore'
import { getWikiData } from '../../../../lib/getWikiData'

export const patchItemDatabase = async () => {
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

    const ds = useDataStore()

    const cleanedData = await getWikiData(
        'https://wiki.leagueoflegends.com/en-us/api.php?',
        '\{{:Module:ItemData/data}}',
        'item'
    )

    let jsonData

    try {
        jsonData =
            typeof cleanedData === 'string' ?
                JSON.parse(cleanedData)
            :   cleanedData
    } catch (error) {
        console.error('Error parsing cleanedData:', error)
        return
    }

    const patch = ds.currentPatch.toString()
    console.log('💠 - updateWikiData - patch:', patch)

    const { data, error } = await supabase
        .from('league-data')
        .update({ 'item-data': jsonData, patch: patch })
        .eq('id', 1)
        .eq('user_id', ownerId)

    if (error) {
        console.error('Error updating data:', error)
    } else {
        console.log('Data updated successfully:', data)
    }
}
