import { writeFileSync } from 'node:fs'
import { $fetch } from 'ofetch'

async function run() {
  try {
    const urlMA
      = 'https://cdn.merakianalytics.com/riot/lol/resources/latest/en-US/items.json'
    const urlDD
      = 'https://ddragon.leagueoflegends.com/cdn/15.10.1/data/en_US/item.json'

    const [maItems, ddData] = await Promise.all([
      $fetch(urlMA),
      $fetch(urlDD),
    ])

    const ddItems = ddData.data // keyed by item ID: "1001", "1004", etc

    const merged: Record<string, any> = {}

    for (const key in maItems) {
      const maItem = maItems[key]
      const ddItem = ddItems[key]

      merged[key] = {
        ...maItem,
        ...(ddItem?.maps ? { maps: ddItem.maps } : {}),
      }
    }

    writeFileSync(
      './public/api/items.json',
      JSON.stringify(merged, null, 2),
    )
    console.log(`✅ Merged ${Object.keys(merged).length} items to ./public/api/items.json`)
  }
  catch (error) {
    console.error('❌ Fetch or merge failed:', error)
  }
}

run()