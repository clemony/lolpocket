import fs from "node:fs"
import { join, resolve } from "node:path"
import { markUpdate } from "../../misc/markUpdate"

const dataPath = resolve("./patch/runes/raw/runes.json")
const raw = JSON.parse(fs.readFileSync(dataPath, "utf-8"))

const runeOutputDir = resolve("./public/cdn/runes")
const outputTier = resolve("./shared/constants/runes/runeToTier.ts")

const outputIndex: Record<string, any> = {}

fs.rmSync(runeOutputDir, { force: true, recursive: true }) // clean old runes
fs.mkdirSync(runeOutputDir, { recursive: true })

const p: any[] = Object.values(raw)

const runeToTier: Record<number, number> = {}

for (const runePath of p) {
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

      const filePath = join(runeOutputDir, `${rune.id}.ts`)
      fs.writeFileSync(
        filePath,
        `// ${markUpdate()}
import type { Rune } from '#shared/types'

const rune: Rune = ${JSON.stringify(enriched, null, 2)}

export default rune`
      )

      runeToTier[enriched.id] = enriched.tier

      return enriched
    })
  )
  console.log("🥸 - slots:", slots)

  outputIndex[pathName] = slots

  const tierOutput = `// ${markUpdate()}

export const runeToTier: Record<number, number> = ${JSON.stringify(runeToTier, null, 2)}`
  fs.writeFileSync(outputTier, tierOutput)
}

console.log("✅ Split rune files generated per rune")
