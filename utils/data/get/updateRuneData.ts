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
