import fs from "node:fs"
import path from "node:path"
import type { Spell } from "../../types/types.import"
import { resolvePath } from "../resolvePath"
import { checkUpdate, markUpdate, stripEmpty } from "../utils"

const dataPath = resolvePath("./spells/raw/summoner-spells.json")
const outputPath = path.resolve("./shared/records/spells.ts")

async function buildSpellIndex() {
  const needsUpdate = await checkUpdate("spell")
  if (!needsUpdate) {
    console.log("no update found locally; fetching...")
    // await fetchSpells() // call your handler
  }
  function n(num: string): number {
    return Number.parseFloat(num)
  }
  function i(num: string): number {
    return Number.parseInt(num)
  }
  const raw: any[] = JSON.parse(fs.readFileSync(dataPath, "utf-8"))
  const spells: Record<number, Spell> = raw.reduce(
    (acc, spell) => {
      const charge = n(spell.maxAmmo) > 0
      acc[Number(spell.key)] = {
        id: Number(spell.key),
        name: spell.name,
        description: spell.description,
        cd: charge ? null : spell.cooldown,
        range: spell.range,
        charges: charge ? n(spell.maxAmmo) : null,
        recharge: charge ? spell.cooldown : null,
        level: spell.summonerLevel,
      }
      return stripEmpty(acc)
    },
    {} as Record<number, Spell>
  )

  fs.writeFileSync(
    outputPath,
    `// ${markUpdate()}\n\nexport const spells: Record<number, Spell> = ${JSON.stringify(
      spells,
      null,
      2
    )
      .replace(/"(\d+)"/g, "$1")
      .replace(/"(.+)":/g, "$1:")}`
  )
}

buildSpellIndex()
