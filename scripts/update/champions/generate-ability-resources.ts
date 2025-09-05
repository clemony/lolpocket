import fs from 'node:fs'
import path from 'node:path'
import { normalize } from '../..'
import type { Champion } from '../../../shared/types/types.champion'

const inputPath = path.resolve('./champions/raw/champions-raw.json')
const outputPath = path.resolve('./champions/raw/unique-ability-resources.json')

const championsRaw = fs.readFileSync(inputPath, 'utf-8')
const champions = JSON.parse(championsRaw) as Champion[]

const uniqueResources = new Set<string>()

for (const champ of Object.values(champions)) {
  if (!champ?.abilities || typeof champ.abilities !== 'object')
    continue

  for (const slot of Object.values(champ.abilities)) {
    if (!Array.isArray(slot))
      continue

    for (const ability of slot) {
      const resource = normalize(ability?.resource)
      if (resource) {
        uniqueResources.add(resource)
      }
    }
  }
}

// Sort alphabetically for readability
const sortedResources = [...uniqueResources].sort()

fs.mkdirSync(path.dirname(outputPath), { recursive: true })
fs.writeFileSync(outputPath, JSON.stringify(sortedResources, null, 2))

console.log(`✅ Wrote unique ability resources to ${outputPath}`)