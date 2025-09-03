import fs from 'node:fs'
import process from 'node:process'
import { $fetch } from 'ofetch'
import { resolvePath } from '../resolvePath'

const rawRunes = await $fetch('https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perks.json')

const rawPaths = await $fetch('https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perkstyles.json')

const outputRawRunes = resolvePath('./runes/raw/runes-raw.json')
const outputRawPaths = resolvePath('./runes/raw/paths-raw.json')
const outputRunes = resolvePath('./runes/raw/runes.json')
// FIXME

// Create a lookup map for runes by ID for quick access
const runesById = Object.fromEntries(rawRunes.map((rune: any) => [rune.id, rune]))

const transformedPaths = rawPaths.styles.map((path: any) => ({
  id: path.id,
  name: path.name,
  tooltip: path.tooltip,
  slots: path.slots.map((slot: any) => ({
    label: slot.slotLabel || 'Keystone',
    runes: slot.perks.map((perkId: number) => {
      const rune = runesById[perkId]
      if (!rune)
        return null
      return {
        id: rune.id,
        name: rune.name,
        description: rune.longDesc,
      }
    }).filter(Boolean), // remove any nulls if perks not found
  })),
}))

fs.writeFileSync(
  outputRunes,
  JSON.stringify(transformedPaths, null, 2),
)
fs.writeFileSync(
  outputRawRunes,
  JSON.stringify(rawRunes, null, 2),
)
fs.writeFileSync(
  outputRawPaths,
  JSON.stringify(rawPaths, null, 2),
)

console.log('✅ runes.json written!')
