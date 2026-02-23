import fs from "node:fs"
import { resolve } from "node:path"
import { markUpdate } from "../misc/markUpdate"

export async function fetchSpells() {
  const response = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/15.22.1/data/en_US/summoner.json"
  )
  if (!response.ok)
    throw new Error(`Failed to fetch spells: ${response.status}`)
  const rawSpells = await response.json()

  const patch = await import(resolve("./patch/misc/raw/patch-index.json"))
  const outputPath = resolve("./patch/spells/raw/spells-raw.json")
  const updatedPath = resolve("./patch/spells/raw/spells-updated.ts")

  fs.writeFileSync(outputPath, JSON.stringify(rawSpells, null, 2))
  fs.writeFileSync(
    updatedPath,
    `// ${markUpdate()}

export const spellsUpdated: number = ${JSON.stringify(patch.default[0], null, 2)}`
  )
  console.log("File written to ./server/data/summoner-spells.json")
}
