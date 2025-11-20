import fs from "node:fs"
import path from "node:path"

import type { Index, Spell } from "../../../types/types.import"
import { resolvePath } from "../resolvePath"
import { checkUpdate, markUpdate } from "../utils"
import { fetchSpells } from "./fetch-spells" // import your handler directly

const dataPath = resolvePath("./spells/raw/summoner-spells.json")
const outputPath = path.resolve("./shared/indexes/spellbook.ts")

async function buildSpellIndex() {
  const needsUpdate = await checkUpdate("spell")
  if (!needsUpdate) {
    console.log("no update found locally; fetching...")
    await fetchSpells() // call your handler
  }

  const raw: any[] = JSON.parse(fs.readFileSync(dataPath, "utf-8"))
  const index: Record<number, Index> = raw.reduce(
    (acc, spell) => {
      acc[Number(spell.key)] = {
        id: Number(spell.key),
        key: "spell",
        name: spell.name,
      }
      return acc
    },
    {} as Record<number, Index>
  )

  fs.writeFileSync(
    outputPath,
    `// ${markUpdate()}\n\nexport const spellbook: Record<number, Index> = ${JSON.stringify(
      index,
      null,
      2
    )
      .replace(/"(\d+)"/g, "$1")
      .replace(/"(.+)":/g, "$1:")}`
  )
}

buildSpellIndex()
