import fs from 'node:fs'
import { resolve } from 'node:path'
import { markUpdate } from '../misc/markUpdate'
import { checkUpdate, stripEmpty } from '../utils'

const dataPath = resolve('./layers/patch/server/spells/raw/summoner-spells.json')
const outputPath = resolve(
  './layers/patch/shared/constants/misc/spells.ts'
)

async function buildSpellIndex() {
  const needsUpdate = await checkUpdate('spell')
  if (!needsUpdate) {
    console.log('no update found locally; fetching...')
    // await fetchSpells() // call your handler
  }
  function n(num: string): number {
    return Number.parseFloat(num)
  }
  function i(num: string): number {
    return Number.parseInt(num)
  }
  const raw: any[] = JSON.parse(fs.readFileSync(dataPath, 'utf-8'))
  const spells: Record<number, Spell> = raw.reduce(
    (acc, spell) => {
      const charge = n(spell.maxAmmo) > 0
      acc[Number(spell.key)] = {
        id: Number(spell.key),
        name: spell.name,
        cd: charge ? null : spell.cooldown,
        charges: charge ? n(spell.maxAmmo) : null,
        description: spell.description,
        level: spell.summonerLevel,
        range: spell.range,
        recharge: charge ? spell.cooldown : null,
      }
      return stripEmpty(acc)
    },
    {} as Record<number, Spell>
  )

  fs.writeFileSync(
    outputPath,
    `// ${markUpdate()}
    import type { Spell } from "#shared/types"

    export const spells: Record<number, Spell> = ${JSON.stringify(
      spells,
      null,
      2
    )
      .replace(/"(\d+)"/g, '$1')
      .replace(/"(.+)":/g, '$1:')}`
  )
}

buildSpellIndex()
