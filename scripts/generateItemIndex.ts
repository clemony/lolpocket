// node scripts/generateItemIndex.js

 import fs from  'node:fs'
import path from 'node:path'

const itemsDir = path.resolve('./public/api/items')
const outputFile = path.resolve('./public/api/index/item-index.json')

const files = fs.readdirSync(itemsDir).filter(file => file.endsWith('.json'))

const index = files.map((file) => {
  const filePath = path.join(itemsDir, file)
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
  return {
    id: Number.parseInt(path.basename(file, '.json')),
    name: data.name,
  }
})

fs.writeFileSync(outputFile, JSON.stringify(index, null, 2))
console.log(`✅ index.json created with ${index.length} items.`)