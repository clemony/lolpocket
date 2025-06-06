import fs from "node:fs"
import path from "node:path"
import { cleanImageLink } from "../utils/cleanImageLink"
import { markUpdate } from "../utils/mark-update"

const championsPath = path.resolve("./data/raw/champions-raw-ma.json")

const championsRaw = fs.readFileSync(championsPath, "utf-8")
const champions = JSON.parse(championsRaw)
console.log("💠 - champions:", champions)

const fullSkins: FullSkinRecord = {}

const primarySkins: SkinRecord = {}

for (const key in champions) {
  const champ = champions[key]
  const skins = champ.skins || []

  const baseSkins = skins
    .filter(
      (skin) =>
        skin.tilePath &&
        skin.uncenteredSplashPath &&
        skin.splashPath &&
        skin.loadScreenPath
    )
    .map((skin) => ({
      tilePath: cleanImageLink(skin.tilePath),
      centeredPath: cleanImageLink(skin.splashPath),
      loadPath: cleanImageLink(skin.loadScreenPath),
    }))

  if (baseSkins.length > 0) {
    primarySkins[key] = baseSkins[0]
  }

  const allSkins = skins
    .filter(
      (skin) =>
        skin.tilePath &&
        skin.uncenteredSplashPath &&
        skin.splashPath &&
        skin.loadScreenPath
    )
    .map((skin) => ({
      name: skin.name,
      tilePath: skin.tilePath.replace(
        "https://raw.communitydragon.org/pbe/plugins/rcp-be-lol-game-data/global/default/assets/characters",
        ""
      ),
    }))

  if (allSkins.length > 0) {
    fullSkins[key] = allSkins
    console.log("💠 - cleanedSkins:", allSkins)
  }
}

const fullSkinsTs = `// ${markUpdate()}

export const skins: FullSkinRecord = ${JSON.stringify(fullSkins, null, 2)}`
const primarySkinsTs = `// ${markUpdate()}

export const baseSkin: SkinRecord = ${JSON.stringify(primarySkins, null, 2)}`

fs.writeFileSync("./app/data/index/skins-full.ts", fullSkinsTs)
fs.writeFileSync("./app/data/index/skins-base.ts", primarySkinsTs)

console.log(`✅ skins-full.ts and skins-base.ts written as modules`)
