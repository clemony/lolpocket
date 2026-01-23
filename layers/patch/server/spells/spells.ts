import fs from "node:fs"
/* import { resolvePath } from "~~/server/patch/resolvePath"

export default defineEventHandler(async (event) => {
  const rawSpells = await $fetch(
    "https://ddragon.leagueoflegends.com/cdn/15.22.1/data/en_US/summoner.json"
  )
  const patch = resolvePath("./misc/raw/patch-index.json")
  const outputPath = resolvePath("./spells/raw/spells-raw.json")
  const updatedPath = resolvePath("./spells/raw/spells-updated.ts")

  fs.writeFileSync(outputPath, JSON.stringify(rawSpells, null, 2))
  fs.writeFileSync(
    updatedPath,
    `// ${markUpdate()}

export const spellsUpdated: number = ${JSON.stringify(patch[0], null, 2)}`
  )
  console.log("File written to ./server/data/summoner-spells.json")

  return "Hello Nitro"
})
 */
