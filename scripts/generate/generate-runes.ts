import fs from "node:fs"
import path from "node:path"
import { markUpdate } from "../utils/mark-update"

const raw = JSON.parse(fs.readFileSync("./data/raw/runes-raw.json", "utf-8"))
const outputDir = path.resolve("./app/data/runes.ts")

const output = {}

for (const tree of raw) {
  const lite = {}
  const formatted = {}

  // Add each slot (number keys)
  tree.slots.forEach((slot, slotIndex) => {
    // Add runeIndex to each rune
    const updatedSlot = slot.map((rune, runeIndex) => ({
      ...rune,
      path: tree.key,
      runeIndex,
    }))

    formatted[slotIndex] = updatedSlot
  })

  output[tree.key] = Object.values(formatted)
}

fs.writeFileSync(
  outputDir,
  `// ${markUpdate()}

export const runePaths: PathRecord = ${JSON.stringify(output, null, 2)}`
)
console.log("✅ runes.json updated with runeIndex")
