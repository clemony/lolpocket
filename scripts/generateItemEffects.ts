// node scripts/generate-item-effects.cjs
import { parse } from 'node-html-parser'


 import fs from  'node:fs'
import path from 'node:path'
import { expandWikitext, cleanWikitextHtml } from './utils/cleanWikiText'

const inputPath = path.resolve(__dirname, '../public/api/items.json')
const outputPath = path.resolve(__dirname, '../public/api/lists/item-effects.json')

const raw = fs.readFileSync(inputPath, 'utf-8')
const fullData = JSON.parse(raw)


async function buildDetails() {
  const details = {}

   for (const id in fullData) {
    const item = fullData[id]
    const actives = item.actives || []
    const passives = item.passives || []

    const expandedActives = await Promise.all(
      actives.map(async (a) => cleanWikitextHtml(await expandWikitext(a.effects)))
    )

    const expandedPassives = await Promise.all(
      passives.map(async (p) => cleanWikitextHtml(await expandWikitext(p.effects)))
    )

    details[id] = {
      id: item.id,
      name: item.name,
      actives: expandedActives,
      passives: expandedPassives,
    }

    console.log(`✅ Expanded ${item.name}`)
  }

  fs.writeFileSync(outputPath, JSON.stringify(details, null, 2))
  console.log(`📝 items-details.json written to ${outputPath}`)
}

buildDetails()