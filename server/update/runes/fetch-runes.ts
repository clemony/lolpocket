import fs from 'node:fs'
import { $fetch } from 'ofetch'
import { colorDict, markUpdate } from '../../../scripts'
import { resolvePath } from '../resolvePath'

const rawRunes = await $fetch(
  'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perks.json'
)

const rawPaths = await $fetch(
  'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perkstyles.json'
)

const outputRawRunes = resolvePath('./runes/raw/runes-raw.json')
const outputRawPaths = resolvePath('./runes/raw/paths-raw.json')
const outputRunes = resolvePath('./runes/raw/runes.json')
const runesTSOutput = resolvePath('../../shared/appdata/records/runes.ts')
const rawShards = resolvePath('./runes/raw/shards-raw.json')
const shardOutput = resolvePath('../../shared/appdata/records/shards.ts')

function transformDescription(desc: string) {
  return desc
    .replaceAll(
      /<truedamage>(.*?)<\/truedamage>/g,
      '<span class="truedamage">$1</span>'
    )
    .replaceAll(/<gold>(.*?)<\/gold>/g, '<span class="gold">$1</span>')
    .replaceAll(
      /<scaleLevel>(.*?)<\/scaleLevel>/g,
      '<span class="scale-level">$1</span>'
    )
}

function transformShardDescription(desc: string) {
  return desc
    .replaceAll(
      /<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'>(.*?)<\/lol-uikit-tooltipped-keyword>/g,
      '$1'
    )
    .replaceAll(
      /<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_CDR'>(.*?)<\/lol-uikit-tooltipped-keyword>/g,
      '$1'
    )
    .replaceAll(
      /<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_MS'>(.*?)<\/lol-uikit-tooltipped-keyword>/g,
      '$1'
    )
    .replaceAll(/<font color='#48C4B7'>(.*?)<\/font>/g, '$1')
}
// Create a lookup map for runes by ID for quick access
const runesById = Object.fromEntries(
  rawRunes.map((rune: any) => [rune.id, rune])
)

// container for slots >= 4
const extraSlots: any[] = []
// create object for pathName -> perk IDs
const pathIdMap: Record<string, number[]> = {}

const transformedPaths = rawPaths.styles.map((path: any, pathIndex: number) => {
  const mappedSlots = path.slots
    .map((slot: any, index: number) => {
      if (index >= 4) {
        if (pathIndex === 0) {
          extraSlots.push({
            label: slot.slotLabel || `Slot ${index}`,
            shards: slot.perks
              .map((perkId: number) => {
                const rune = runesById[perkId]
                if (!rune)
                  return null
                return {
                  id: rune.id,
                  name: rune.name,
                  color: colorDict[rune.id],
                  description: transformShardDescription(rune.longDesc),
                }
              })
              .filter(Boolean),
            tier: index - 4,
          })
        }
        return null
      }

      rawPaths.styles.forEach((path: any) => {
        // flatten all perks from main slots (slots 0-3)
        const allPerkIds = path.slots
          .slice(0, 4)
          .flatMap((slot: any) => slot.perks)
        pathIdMap[path.name] = allPerkIds
      })

      return {
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
        tier: index,
      }
    })
    .filter(Boolean)

  return {
    id: path.id,
    name: path.name,
    slots: mappedSlots,
    tooltip: path.tooltip,
  }
})

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

export const runePaths: RunePath[] = ${JSON.stringify(strippedPaths, null, 2)}`
)

// write it as a TS file
const pathIdsTSOutput = resolvePath('./runes/raw/pathIds.ts')
fs.writeFileSync(
  pathIdsTSOutput,
  `// ${markUpdate()}

export const pathIds: Record<string, number[]> = ${JSON.stringify(pathIdMap, null, 2)}`
)

// Write extra slots separately
fs.writeFileSync(rawShards, JSON.stringify(extraSlots, null, 2))

const shardTSOutput = `// ${markUpdate()}

export const shardObject: ShardObject[] = ${JSON.stringify(extraSlots, null, 2)}`
fs.writeFileSync(shardOutput, shardTSOutput)

console.log(`✅ shard-index.ts created with ${extraSlots.length} shards`)

fs.writeFileSync(outputRunes, JSON.stringify(transformedPaths, null, 2))
fs.writeFileSync(outputRawRunes, JSON.stringify(rawRunes, null, 2))
fs.writeFileSync(outputRawPaths, JSON.stringify(rawPaths, null, 2))

console.log('✅ runes.json written!')
