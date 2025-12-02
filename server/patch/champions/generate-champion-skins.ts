import fs from "node:fs"
import path from "node:path"
import type { Skin } from "../../types/types.import"
import { resolvePath } from "../resolvePath"
import { cleanImageLink, cleanImageNum } from "../utils"
import { markUpdate } from "../utils/markUpdate"

/* const championsPath = resolvePath("./champions/raw/champions-raw-meraki.json") */
const outputFull = path.resolve("./shared/indexes/skin-index.ts")
const outputTile = path.resolve("./shared/constants/champions/champion-key-to-tile.ts")
const outputBase = path.resolve("./shared/indexes/skins-base.ts")

export interface RawSkin {
  name?: string
  loadScreenPath: string
  splashPath: string
  tilePath: string
  uncenteredSplashPath: string
}
const dataDirectoryM = resolvePath("./champions/raw/champions")

// ---------- Load raw Meraki data from directory ----------
const champions: Record<string, any> = {}
const filenames = fs
  .readdirSync(dataDirectoryM)
  .filter((f) => f.endsWith(".json"))

for (const filename of filenames) {
  const key = path.basename(filename, ".json")
  try {
    const raw = fs.readFileSync(path.join(dataDirectoryM, filename), "utf-8")
    const parsed: any = JSON.parse(raw)

    champions[key] = parsed
  } catch (err) {
    console.warn(`⚠️ Failed to parse Meraki file ${filename}`, err)
  }
}

const fullSkins: Record<string, Skin[]> = {}
const primarySkins: Record<string, Skin> = {}
const tileSkins: Record<string, string> = {}

for (const key in champions) {
  const champ = champions[key]
  const skins: RawSkin[] = champ.skins || []
  /*
  const baseSkins = (skins: RawSkin[]): Skin => {
    const s = skins.filter(skin =>
      skin.tilePath
      && skin.uncenteredSplashPath
      && skin.splashPath
      && skin.loadScreenPath
    )

    const mappedBase: Skin[] = s.map((skin) => {
      console.log('🧭 splashPath inside map:', skin.splashPath)
      const img = {
        centered: cleanImageLink(skin.splashPath),
        load: cleanImageLink(skin.loadScreenPath),
        tile: cleanImageLink(skin.tilePath),
        uncentered: cleanImageLink(skin.uncenteredSplashPath)
      }
      console.log('🌱 - baseSkins - img:', img)
      return img
    })
    console.log('🌱 - baseSkins - mappedBase:', mappedBase)

    return primarySkins[key] = mappedBase[0] as Skin
  }
 */
  const allSkins = skins
    .filter((skin) => skin.splashPath && skin.loadScreenPath)
    .map((skin) => {
      return {
        id: String(cleanImageNum(skin.tilePath)),
        key: String(cleanImageLink(skin.splashPath)),
        name: String(skin.name),
        load: String(cleanImageLink(skin.loadScreenPath)),
      }
    })

  const allTile = skins
    .filter((skin) => skin.tilePath)
    .map((skin) => String(cleanImageLink(skin.tilePath)))

  if (allSkins.length > 0) {
    fullSkins[key] = allSkins
  }
  if (allTile.length > 0) {
    tileSkins[key] = allTile[0]
  }
}

// 🟢 Write new files after comparison
const fullSkinsTs = `// ${markUpdate()}
 export const skinIndex: Record<string, Skin[]> = ${JSON.stringify(fullSkins, null, 2)}`

fs.writeFileSync(outputFull, fullSkinsTs)

const tileSkinsTs = `// ${markUpdate()}
 export const championKeyToTile: Record<string, string> = ${JSON.stringify(tileSkins, null, 2)}`

fs.writeFileSync(outputTile, tileSkinsTs)

//
const primarySkinsTs = `// ${markUpdate()}

export const baseSkin: Record<string, Skin> = ${JSON.stringify(primarySkins, null, 2)}`
// fs.writeFileSync(outputBase, primarySkinsTs)

console.log(`✅ skins-full.ts and skins-base.ts written as modules`)
