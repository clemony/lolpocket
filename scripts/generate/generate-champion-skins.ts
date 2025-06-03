import fs from "node:fs"
import path from "node:path"

const championsPath = path.resolve("./data/raw/champions-raw-ma.json")

const championsRaw = fs.readFileSync(championsPath, "utf-8")
const champions = JSON.parse(championsRaw)
console.log("💠 - champions:", champions)

const fullSkins: FullSkinRecord = {}

const primarySkins: SkinRecord = {}

for (const key in champions) {
  const champ = champions[key]
  const skins = champ.skins || []
  const rgx = /.*\/skins\/base\/i?m?a?g?e?s?\/?(.*)\.jpg/gi
  const baseSkins = skins
    .filter(
      (skin) =>
        skin.tilePath &&
        skin.uncenteredSplashPath &&
        skin.splashPath &&
        skin.loadScreenPath
    )
    .map((skin) => ({
      tilePath: skin.tilePath.replace(rgx, "$1"),
      centeredPath: skin.splashPath.replace(rgx, "$1"),
      loadPath: skin.loadScreenPath.replace(rgx, "$1"),
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

const fullSkinsTs = `export const skins: FullSkinRecord = ${JSON.stringify(fullSkins, null, 2)}`
const primarySkinsTs = `export const baseSkin: SkinRecord = ${JSON.stringify(primarySkins, null, 2)}`

fs.writeFileSync("./app/data/index/skins-full.ts", fullSkinsTs)
fs.writeFileSync("./app/data/index/skins-base.ts", primarySkinsTs)

console.log(`✅ skins-full.ts and skins-base.ts written as modules`)
// splashPath: skin.uncenteredSplashPath.replace('https://raw.communitydragon.org/pbe/plugins/rcp-be-lol-game-data/global/default/assets/characters', ''),
// splashPath: skin.uncenteredSplashPath.replace('https://raw.communitydragon.org/pbe/plugins/rcp-be-lol-game-data/global/default/assets/characters', ''),
// centeredPath: skin.splashPath.replace('https://raw.communitydragon.org/pbe/plugins/rcp-be-lol-game-data/global/default/assets/characters', ''),
// loadPath: skin.loadScreenPath.replace('https://raw.communitydragon.org/pbe/plugins/rcp-be-lol-game-data/global/default/assets/characters', ''),
