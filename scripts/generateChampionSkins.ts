import fs from 'node:fs'
import path from 'node:path'

const championsPath = path.resolve('./data/raw/champions=raw.json')
const outputPath = path.resolve('./data/index/skindex.json')

const championsRaw = fs.readFileSync(championsPath, 'utf-8')
const champions = JSON.parse(championsRaw)

const result: Record<string, { name: string, splashPath: string }[]> = {}

for (const key in champions) {
  const champ = champions[key]
  const { skins } = champ

  const filteredSkins = (skins || [])
    .filter(skin => !!skin.tilePath)
    .map(skin => ({
      name: skin.name,
      tilePath: skin.tilePath.replace('https://raw.communitydragon.org/pbe/plugins/rcp-be-lol-game-data/global/default/assets/characters', ''),
      splashPath: skin.splashPath.replace('https://raw.communitydragon.org/pbe/plugins/rcp-be-lol-game-data/global/default/assets/characters', ''),
    }))

  result[key] = filteredSkins
}

fs.writeFileSync(outputPath, JSON.stringify(result, null, 2))
console.log(`✅ champion-skins.json written to ${outputPath}`)
