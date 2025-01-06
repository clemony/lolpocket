import { supabase } from '@lib/supabase'
import { useDataStore } from '@stores/dataStore'

export const storeItemData = async (cleanedData) => {
    const {
        data: { user },
        error: userError,
    } = await supabase.auth.getUser()
    if (userError) {
        console.error('Error fetching user:', userError)
    } else {
        const ownerId = user.id

        const ds = useDataStore()
        const patch = ds.currentPatch.toString()
        const { data, error } = await supabase
            .from('itemData') // The table where the data will be stored
            .insert([
                {
                    data: cleanedData,
                    owner_id: ownerId,
                    patch: patch,
                },
            ])

        if (error) {
            console.error('Error inserting data:', error)
        } else {
            console.log('Data inserted successfully:', data)
        }
    }
}
