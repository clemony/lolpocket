import fs from 'node:fs'
import { $fetch } from 'ofetch'
import { markUpdate } from '../utils/mark-update'

const url
  = 'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/maps.json'

const rawMapData = await $fetch<any[]>(url)

const cleanedMapData: MapIndex[] = rawMapData
  .filter(map => map.id !== 0) // skip the "Common" map
  .map(({ id, name, mapStringId }) => ({ id, name, mapStringId }))

fs.writeFileSync(
  './app/data/index/map-index.ts',
  `// ${markUpdate()}

export const mapIndex: MapIndex[] = ${JSON.stringify(cleanedMapData, null, 2)}`,
)

console.log('✅ Cleaned map data written.')
