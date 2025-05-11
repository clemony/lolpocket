 import fs from  'node:fs'
import path from 'node:path'

const championsPath = path.resolve('./public/api/champions.json')
const outputPath = path.resolve('./public/api/lists/champion-skins.json')

const championsRaw = fs.readFileSync(championsPath, 'utf-8')
const champions = JSON.parse(championsRaw)

const result = {}

for (const key in champions) {
  const champ = champions[key]
  const { id, name, skins } = champ

const filteredSkins = (skins || [])
  .filter((skin) => !!skin.tilePath) // ✅ only include skins with a splashPath
  .map((skin) => ({
    name: skin.name,
    splashPath: skin.tilePath,
  }))

  result[id] = {
    id,
    name,
    skins: filteredSkins,
  }
}

fs.writeFileSync(outputPath, JSON.stringify(result, null, 2))
console.log(`✅ champion-skins.json written to ${outputPath}`)