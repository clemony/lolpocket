import fs from 'node:fs'
import process from 'node:process'
import { $fetch } from 'ofetch'
import { markUpdate } from '../..'
import { resolvePath } from '../resolvePath'

const rawRunes = await $fetch('https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perks.json')

const rawPaths = await $fetch('https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perkstyles.json')

const outputRawRunes = resolvePath('./runes/raw/runes-raw.json')
const outputRawPaths = resolvePath('./runes/raw/paths-raw.json')
const outputRunes = resolvePath('./runes/raw/runes.json')
const runesTSOutput = resolvePath('../../shared/appdata/records/runes.ts')

function transformDescription(desc: string) {
  return desc
    .replaceAll(/<truedamage>(.*?)<\/truedamage>/g, '<span class="truedamage">$1</span>')
    .replaceAll(/<gold>(.*?)<\/gold>/g, '<span class="gold">$1</span>')
    .replaceAll(/<scaleLevel>(.*?)<\/scaleLevel>/g, '<span class="scale-level">$1</span>')
}

// Create a lookup map for runes by ID for quick access
const runesById = Object.fromEntries(rawRunes.map((rune: any) => [rune.id, rune]))

const transformedPaths = rawPaths.styles.map((path: any) => ({
  id: path.id,
  name: path.name,
  tooltip: path.tooltip,
  slots: path.slots
    .map((slot: any, index: number) => {
      if (index >= 4)
        return null // skip anything index 3+
      return {
        tier: index,
        label: slot.slotLabel || 'Keystone',
        runes: slot.perks
          .map((perkId: number) => {
            const rune = runesById[perkId]
            if (!rune)
              return null
            return {
              id: rune.id,
              name: rune.name,
              description: transformDescription(rune.longDesc),
            }
          })
          .filter(Boolean),
      }
    })
    .filter(Boolean), // remove skipped nulls
}))

// Make a lightweight version for TS (no descriptions)
const strippedPaths = transformedPaths.map((path: any) => ({
  ...path,
  slots: path.slots.map((slot: any) => ({
    ...slot,
    runes: slot.runes.map((r: any) => ({
      id: r.id,
      name: r.name,
    })),
  })),
}))

fs.writeFileSync(
  runesTSOutput,
  `// ${markUpdate()}

export const runePaths: RunePath[] = ${JSON.stringify(strippedPaths, null, 2)}`,
)

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
