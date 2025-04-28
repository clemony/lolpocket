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
    const userId = user.id
    const patch = useDataStore().currentPatch.toString()

    const cleanItemData = await patchItemDatabaseData()
    const cleanChampionData = await updateChampionDatabaseData('initial')

/*     const { data, error } = await supabase.from('league_data').insert([
      {
        item_data: cleanItemData,
        champion_data: cleanChampionData,
        user_id: userId,
        patch,
      },
    ])

    if (error) {
      console.error('Error inserting data:', error)
    }
    else {
      console.log('Data inserted successfully:', data)
    }*/
  }
}
