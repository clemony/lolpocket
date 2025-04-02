import axios from 'axios'
import qs from 'qs'

export async function getWikiChampionAbility(champions) {
  const ds = useDataStore()

  const baseURL = 'https://wiki.leagueoflegends.com/en-us/api.php'

  for (const champName in champions) {
    // eslint-disable-next-line no-prototype-builtins
    if (!champions.hasOwnProperty(champName))
      continue

    const champion = champions[champName]

    // Collect all ability names
    const abilityNames = [
      champion.passive?.name,
      ...champion.spells.map(spell => spell.name),
    ].filter(Boolean) // Remove undefined/null values

    for (const abilityName of abilityNames) {
      const templateName = `Data ${champName}/${abilityName}`
      const url = `${baseURL}?action=expandtemplates&format=json&text={{${templateName}}}`

      try {
        const response = await fetch(url)
        const data = await response.json()
        const expandedText = data.expandtemplates['*']

        // 🔹 Ensure championTemplates[champName] exists before assigning
        if (!ds.championTemplates[champName]) {
          ds.championTemplates[champName] = {}
        }

        // 🔹 Assign ability data
        ds.championTemplates[champName][abilityName] = expandedText

        console.log(`✅ Stored ${champName} - ${abilityName}`)
      }
      catch (error) {
        console.error(`❌ Failed to fetch ${champName} - ${abilityName}`, error)
      }
    }
  }
}
/*   const ds = useDataStore()
  const url = `https://wiki.leagueoflegends.com/en-us/api.php?action=parse&format=json&page=Mel&prop=text%7Cdisplaytitle%7Csections&section=1&disablelimitreport=1&disableeditsection=1&disablestylededuplication=1&disabletoc=1&formatversion=2`

  try {
    const response = await axios.get(url, {
      headers: { 'Content-Type': 'application/json' },
    })
    console.log('💠 - getWikiChampionAbility - response:', response.data.parse.text)

    const data = await formatChampionAbilities(response.data.parse.text)
  }
  catch (error) {
    console.error('Error in expandWikiTemplates:', error)
    return null
  } */

/*   try {
    const response = await axios.post(
      '/api/wiki',
      qs.stringify({
        action: 'parse',
        format: 'json',
        page: 'Mel',
        prop: 'text|displaytitle|sections',
        section: '1',
        disablelimitreport: 1,
        disableeditsection: 1,
        disablestylededuplication: 1,
        disabletoc: 1,
        formatversion: '2',
      }),
      {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, // Important!
      },
    )
    return response.data
  }
  catch (error) {
    console.error('Error in expandWikiTemplates:', error)
    return null
  } */