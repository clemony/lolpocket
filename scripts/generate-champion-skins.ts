import fs from 'node:fs'
import path from 'node:path'

const championsPath = path.resolve('./data/raw/champions-raw.json')
const fullOutputPath = path.resolve('./data/index/skinsdex.json')
const primaryOutputPath = path.resolve('./data/index/skindex.json')

const championsRaw = fs.readFileSync(championsPath, 'utf-8')
const champions = JSON.parse(championsRaw)

const fullSkins: Record<string, {
  name: string, centeredPath: string, tilePath: string, loadPath: string
}[]> = {}

const primarySkins: Record<string, {
centeredPath: string, tilePath: string, loadPath: string
}> = {}

for (const key in champions) {
  const champ = champions[key]
  const skins = champ.skins || []

  const cleanedSkins = skins
    .filter(skin => skin.tilePath && skin.uncenteredSplashPath && skin.splashPath && skin.loadScreenPath)
    .map(skin => ({
      name: skin.name,
      tilePath: skin.tilePath.replace('https://raw.communitydragon.org/pbe/plugins/rcp-be-lol-game-data/global/default/assets/characters', ''),
      splashPath: skin.uncenteredSplashPath.replace('https://raw.communitydragon.org/pbe/plugins/rcp-be-lol-game-data/global/default/assets/characters', ''),
      centeredPath: skin.splashPath.replace('https://raw.communitydragon.org/pbe/plugins/rcp-be-lol-game-data/global/default/assets/characters', ''),
      loadPath: skin.loadScreenPath.replace('https://raw.communitydragon.org/pbe/plugins/rcp-be-lol-game-data/global/default/assets/characters', ''),
    }))

    if (cleanedSkins.length > 0) {
      fullSkins[key] = cleanedSkins
    
      // Destructure to exclude 'name' from primarySkins
      const { name, ...rest } = cleanedSkins[0]
      primarySkins[key] = rest
    }
}

fs.writeFileSync(fullOutputPath, JSON.stringify(fullSkins, null, 2))
fs.writeFileSync(primaryOutputPath, JSON.stringify(primarySkins, null, 2))

console.log(`✅ skins-full.json written to ${fullOutputPath}`)
console.log(`✅ skins-primary.json written to ${primaryOutputPath}`)