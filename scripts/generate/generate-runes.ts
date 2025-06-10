import fs from "node:fs"
import path from "node:path"
import { markUpdate } from "../utils/mark-update"

const raw = JSON.parse(fs.readFileSync("./data/raw/runes-raw.json", "utf-8"))
const outputIndex: Record<string, any> = {}

const runeOutputDir = path.resolve("./app/data/records/runes")
fs.rmSync(runeOutputDir, { recursive: true, force: true }) // clean old runes
fs.mkdirSync(runeOutputDir, { recursive: true })

for (const tree of raw) {
  const treeName = tree.key
  const treeDir = path.join(runeOutputDir, treeName)
  fs.mkdirSync(treeDir, { recursive: true })

  const slots = tree.slots.map((slot, slotIndex) =>
    slot.map((rune, runeIndex) => {
      const enriched = {
        ...rune,
        path: treeName,
        runeIndex,
      }

      // Write individual rune file
      const filePath = path.join(treeDir, `${rune.key}.ts`)

      fs.writeFileSync(
        filePath,
        `// ${markUpdate()}

const rune: Rune =
        ${JSON.stringify(enriched, null, 2)}
        export default rune`
      )

      return enriched
    })
  )

  outputIndex[treeName] = slots
}

// Optional: Write master JSON for quick indexing or search
fs.writeFileSync("./data/runes.json", JSON.stringify(outputIndex, null, 2))

// Optional: Write TypeScript file for static import support
fs.writeFileSync(
  "./app/data/runes.ts",
  `// ${markUpdate()}

export const runePaths: PathRecord = ${JSON.stringify(outputIndex, null, 2)}`
)

console.log("✅ Split rune files generated per rune")
