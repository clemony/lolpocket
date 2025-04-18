export async function getChampsFromDatabase() {
/*   const supabase = useSupabaseClient()

  try {
    const { data, error } = await supabase.from('league_data').select('champion_data')

    if (error) {
      console.error('Error fetching JSONB object:', error)
      return null
    }
    const champdata = Object.values(data[data.length - 1])
    console.log('💠 - getChampsFromDatabase - champdata:', champdata)
 const b = manageObject(champdata[0])
    const c = b.sort((a, b) => a.name.localeCompare(b.name))
    const d = c.filter(champion => champion.name != 'Mega Gnar')
    const e = d.filter(champion => champion.name != 'Kled & Skaarl')
    useDataStore().champions = [...e]
    console.log('💠 - getChampsFromDatabase -useDataStore().champions:', useDataStore().champions)
  }
  catch (error) {
    console.error('Error processing data:', error)
  }
} */

}

export async function loadChampionData() {
  const ds = useDataStore()
  const json = ref(null)
  try {
    const module = await import('data/champion.json')
    json.value = module.default // Access the actual JSON data
    ds.champions = [...Object.values(json.value.data) as Champion[]]
    rewriteChampionTags()
    addChampionPositionProperty()
    console.log('💠 - loadChampionData - ds.champions :', ds.champions)
  }
  catch (error) {
    console.error('Error loading champion JSON:', error)
  }
}