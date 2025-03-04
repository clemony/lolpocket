export async function getPatch() {
  const request = new Request('https://ddragon.leagueoflegends.com/api/versions.json', {
    method: 'GET',
    cache: 'no-cache',
  })

  try {
    const response = await fetch(request)
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }
    const json = await response.json()

    const patch = json[0]
    console.log('💠 - getPatch - patch:', patch)
    useDataStore().currentPatch = null
    useDataStore().currentPatch = patch
  }
  catch (error: any) {
    console.error(error.message)
  }
}