import fs from "node:fs"
import path from "node:path"
import { resolvePath } from "../resolvePath"
import { markUpdate } from "../utils"
import { Rune, type PathSlot } from "./../../../shared/types/types.rune"

const dataPath = resolvePath("./runes/raw/runes.json")
const raw = JSON.parse(fs.readFileSync(dataPath, "utf-8"))
const runeOutputDir = path.resolve("./shared/records/runes")
const outputTier = path.resolve("./shared/constants/runes/rune-to-tier.ts")

const outputIndex: Record<string, any> = {}

fs.rmSync(runeOutputDir, { force: true, recursive: true }) // clean old runes
fs.mkdirSync(runeOutputDir, { recursive: true })
const p: any[] = Object.values(raw)

const runeToTier: Record<number, number> = {}

for (const runePath of p) {
  console.log("🥸 - runePath:", runePath)
  const pathName = runePath.name
  fs.mkdirSync(runeOutputDir, { recursive: true })

  const slots = runePath.slots.map((slot: any) =>
    slot.runes.map((rune: any, tierSlot: number) => {
      const enriched = {
        ...rune,
        description: rune.description.replace(/\|\|/g, "/"),
        path: runePath.name,
        pathId: runePath.id,
        tier: slot.tier,
        tierLabel: slot.label,
        tierSlot,
      }

      const filePath = path.join(runeOutputDir, `${rune.id}.ts`)
      fs.writeFileSync(
        filePath,
        `// ${markUpdate()}

const rune: Rune = ${JSON.stringify(enriched, null, 2)}

export default rune`
      )

      runeToTier[enriched.id] = enriched.tier

      return enriched
    })
  )

  outputIndex[pathName] = slots

  const tierOutput = `// ${markUpdate()}

export const runeToTier: Record<number, number> = ${JSON.stringify(runeToTier, null, 2)}`
  fs.writeFileSync(outputTier, tierOutput)
}

console.log("✅ Split rune files generated per rune")
