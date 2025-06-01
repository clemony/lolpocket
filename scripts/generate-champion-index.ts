import fs from 'node:fs'
import path from 'node:path'

const championsDir = path.resolve('./data/champions')
const outputFile = path.resolve('./data/index/champion-index.json')

const files = fs.readdirSync(championsDir).filter(file => file.endsWith('.json'))

const index = files.map((file) => {
  const filePath = path.join(championsDir, file)
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
  return {
    id: data.id ?? path.basename(file, '.json'),
    key: data.key,
    name: data.name,
  }
})

fs.writeFileSync(outputFile, JSON.stringify(index, null, 2))
console.log(`✅ champions/index.json created with ${index.length} champions.`)