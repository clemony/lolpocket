import axios from 'axios'

export function getRuneData() {
  axios({
    method: 'get',
    url: 'https://ddragon.leagueoflegends.com/cdn/14.24.1/data/en_US/runesReforged.json',
    responseType: 'json',
  }).then((response) => {
    const runeData = response.data
    const runesArray = Object.values(runeData) as Path[]
    const sortPaths = runesArray.sort((a, b) => a.id - b.id)

    if (sortPaths.length >= 5) {
      const temp = sortPaths[3]
      sortPaths[3] = sortPaths[4]
      sortPaths[4] = temp
    }
    useDataStore().paths = [...sortPaths]
    console.log('💠 - getRuneData -useDataStore().paths:', useDataStore().paths)
  })
}

/* export function getShardData() {
  axios({
    method: 'get',
    url: 'https://raw.communitydragon.org/latest/game/perks.cdtb.bin.json',
    responseType: 'json',
  }).then((response) => {
    const regex = /Perks\/StatMods.
    const a = [...response.data]
    console.log('💠 - getShardData - a:', a)
    const b = a.filter(item => item.match(regex))
    console.log('💠 - getShardData - b:', b)

  })
} */

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
    console.log('💠 - getPatch - json:', json)

    const patch = json[0]
    console.log('💠 - getPatch - patch:', patch)
    useDataStore().currentPatch = null
    useDataStore().currentPatch = patch
  }
  catch (error: any) {
    console.error(error.message)
  }
}
