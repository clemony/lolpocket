/* eslint-disable antfu/no-top-level-await */
import fs from "node:fs"
import { $fetch } from "ofetch"
import type { MapIndex } from "../.."
import { markUpdate } from "../utils"

// FIXME maps and queue together thingy? where they're merged remember that ok
const url =
  "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/maps.json"

const rawMapData = await $fetch<any[]>(url)

const cleanedMapData: MapIndex[] = rawMapData
  .filter((map) => map.id !== 0) // skip the "Common" map
  .map(({ id, name, mapStringId }) => ({ id, name, mapStringId }))

fs.writeFileSync(
  "./shared/constants/misc/map-index.ts",
  `// ${markUpdate()}

export const mapIndex: MapIndex[] = ${JSON.stringify(cleanedMapData, null, 2)}`
)

console.log("✅ Cleaned map data written.")
