// node scripts/generateChampionIndex.js

const fs = require('node:fs')
const path = require('node:path')

const championsDir = path.resolve(__dirname, '../public/api/champions')
const outputFile = path.resolve(__dirname, '../public/api/lists/champion-index.json')

const files = fs.readdirSync(championsDir).filter(file => file.endsWith('.json'))

const index = files.map((file) => {
  const filePath = path.join(championsDir, file)
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
  return {
    id: data.id ?? path.basename(file, '.json'),
    name: data.name,
  }
})

fs.writeFileSync(outputFile, JSON.stringify(index, null, 2))
console.log(`✅ champions/index.json created with ${index.length} champions.`)