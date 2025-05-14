import fs from 'node:fs'

const raw = JSON.parse(fs.readFileSync('./public/api/runes-raw.json', 'utf-8'))

const output = {}

for (const tree of raw) {
  const formatted = {
    id: tree.id,
    key: tree.key,
    name: tree.name,
  }

  // Add each slot (number keys)
  tree.slots.forEach((slot, slotIndex) => {
    // Add runeIndex to each rune
    const updatedSlot = slot.map((rune, runeIndex) => ({
      ...rune,
      runeIndex,
    }))

    formatted[slotIndex] = updatedSlot
  })

  output[tree.key] = formatted
}

fs.writeFileSync('./public/api/runes.json', JSON.stringify(output, null, 2))
console.log('✅ runes.json updated with runeIndex')