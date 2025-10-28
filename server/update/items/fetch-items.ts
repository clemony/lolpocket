import fs, { writeFileSync } from 'node:fs'
import { $fetch } from 'ofetch'
import { resolvePath } from '../resolvePath'

const dataPath = resolvePath('./misc/raw/patch-index-raw.json')
const outputPath = resolvePath('./items/raw/items-raw.json')
const loadPatch = JSON.parse(fs.readFileSync(dataPath, 'utf-8'))

async function run() {
  try {
    const urlMA
      = 'https://cdn.merakianalytics.com/riot/lol/resources/latest/en-US/items.json'
    const urlDD = `https://ddragon.leagueoflegends.com/cdn/${loadPatch[0]}.1/data/en_US/item.json`

    const [maItems, ddData] = await Promise.all([$fetch(urlMA), $fetch(urlDD)])

    const ddItems = ddData.data // keyed by item ID: "1001", "1004", etc

    const merged: Record<string, any> = {}

    for (const key in maItems) {
      const maItem = maItems[key]
      const ddItem = ddItems[key]

      const expandIds = (ids?: number[]) => {
        if (!ids)
          return undefined
        return ids
          .map((id) => {
            const item = ddItems[id.toString()]
            if (!item)
              return null
            return {
              id,
              name: item.name,
              gold: item.gold?.total ?? null,
            }
          })
          .filter(Boolean) // removes nulls
      }

      merged[key] = {
        ...maItem,
        ...(ddItem?.maps ? { maps: ddItem.maps } : {}),
        ...(ddItem?.gold?.base != null
          ? {
              shop: {
                ...maItem.shop,
                prices: {
                  ...maItem.shop?.prices,
                  combined: ddItem.gold.base,
                },
              },
            }
          : {}),
        buildsFrom: expandIds(maItem.buildsFrom),
        buildsInto: expandIds(maItem.buildsInto),
      }
    }

    writeFileSync(outputPath, JSON.stringify(merged, null, 2))
    console.log(
      `✅ Merged ${Object.keys(merged).length} items to ./server/data/items.json`
    )
  }
  catch (error) {
    console.error('❌ Fetch or merge failed:', error)
  }
}

run()
