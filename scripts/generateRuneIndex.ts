import fs from 'node:fs'

// Load the raw rune data
const paths: Path[] = JSON.parse(fs.readFileSync('./public/api/runes.json', 'utf-8'))

// Extract id, name, and path
const index: { id: number, key: string, name: string, path: string }[] = []

for (const pathKey in paths) {
  const path = paths[pathKey]

  for (const slotKey in path) {
    if (!Number.isInteger(Number(slotKey)))
      continue // Skip non-slot keys like 'id', 'key', 'name'

    for (const rune of path[slotKey]) {
      index.push({
        id: rune.id,
        key: rune.key,
        name: rune.name,
        path: rune.path,
      })
    }
  }
}

// Write to rune-index.json
fs.writeFileSync('./public/api/index/rune-index.json', JSON.stringify(index, null, 2))
console.log('✅ rune-index.json written with id and name only')