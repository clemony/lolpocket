import fs from 'node:fs'
import { resolve } from 'node:path'
import { markUpdate } from '../../misc/markUpdate'
import { colorDict, transformDescription, transformShardDescription } from '../utils'

const rawRunes = resolve('./layers/patch/server/runes/raw/runes-raw.json')
const rawPaths = resolve('./layers/patch/server/runes/raw/paths-raw.json')

const pathData = JSON.parse(fs.readFileSync(rawPaths, 'utf-8'))
const runeData = JSON.parse(fs.readFileSync(rawRunes, 'utf-8'))

const outputRunes = resolve('./layers/patch/server/runes/raw/runes.json')
const runesTSOutput = resolve('./layers/patch/shared/constants/runes/pathRecord.ts')
const pathIdsTSOutput = resolve('./layers/patch/server/runes/raw/pathIds.ts')
const outputPathIndex = resolve(
  './layers/patch/shared/constants/runes/pathIndex.ts'
)
const outputRune = resolve(
  './layers/patch/shared/constants/runes/runeIndex.ts'
)
const outputKeystone = resolve(
  './layers/patch/shared/constants/runes/keystoneIndex.ts'
)
const runeIdToPathOutput = resolve(
  './layers/patch/shared/constants/runes/runeToPath.ts'
)
const outputRawShards = resolve('./layers/patch/server/runes/raw/shards-raw.json')
const shardOutput = resolve(
  './layers/patch/shared/constants/runes/shards.ts'
)
// Create a lookup map for runes by ID for quick access
const runesById = Object.fromEntries(
  runeData.map((rune: Rune) => [rune.id, rune])
)

// container for slots >= 4
const extraSlots: any[] = []
// create object for pathName -> perk IDs
const pathIdMap: Record<string, number[]> = {}
const shardColorMap: Record<number, string> = {}
const pathRegistry: { id: number, name: string, tooltip: string }[] = []
const runeIndex: { id: number, name: string, key: string }[] = []
const keystoneIndex: number[] = []

const transformedPaths = Object.fromEntries(
  pathData.styles.map((path: any, pathIndex: number) => {
    const { id, name, slots, tooltip } = path

    pathRegistry.push({ id, name, tooltip })

    const mainSlots = slots.slice(0, 4)
    const shardSlots = slots.slice(4)

    pathIdMap[id] = mainSlots.flatMap((s: any) => s.perks ?? [])

    keystoneIndex.push(...slots.slice(0, 1).flatMap((s: any) => s.perks ?? []))

    const mappedSlots = mainSlots.map((slot: any, index: number) => ({
      label: slot.slotLabel || (index === 0 ? 'Keystone' : ''),
      runes: (slot.perks ?? [])
        .map((perkId: number) => {
          const rune = runesById[perkId]
          if (!rune) return null
          return {
            id: rune.id,
            name: rune.name,
            description: transformDescription(rune.longDesc),
          }
        })
        .filter(Boolean),
      tier: index,
    }))
    for (const slot of mappedSlots) {
      for (const rune of slot.runes) {
        runeIndex.push({
          id: rune.id,
          key: 'rune',
          name: rune.name,
        })
      }
    }
    if (pathIndex === 0) {
      shardSlots.forEach((slot: any, index: number) => {
        extraSlots.push({
          label: slot.slotLabel || `Slot ${index + 4}`,
          shards: (slot.perks ?? [])
            .map((perkId: number) => {
              const rune = runesById[perkId]
              if (!rune) return null

              return {
                color: colorDict[rune.id],
                id: rune.id,
                name: rune.name,
                description: transformShardDescription(rune.longDesc),
              }
            })
            .filter(Boolean),
          tier: index,
        })
      })
    }

    return [
      id,
      {
        id,
        name,
        slots: mappedSlots,
        tooltip,
      },
    ]
  })
)

const strippedPaths = Object.fromEntries(
  Object.entries(transformedPaths).map(([id, path]: any) => [
    id,
    {
      ...path,
      slots: path.slots.map((slot: any) => ({
        ...slot,
        runes: slot.runes.map((r: any) => ({
          id: r.id,
          name: r.name,
        })),
      })),
    },
  ])
)

const runeIdToPath: Record<number, string> = {}
Object.entries(pathIdMap).forEach(([pathName, perkIds]) => {
  perkIds.forEach((id) => {
    runeIdToPath[id] = pathName
  })
})

fs.writeFileSync(
  runeIdToPathOutput,
  `// ${markUpdate()}

export const runeToPath: Record<number, string> = ${JSON.stringify(runeIdToPath, null, 2)}`
)

// path index
fs.writeFileSync(outputPathIndex, `// ${markUpdate()}
import type { Path } from '#shared/types'

export const pathIndex: Path[] = ${JSON.stringify(pathRegistry, null, 2)}`)

// path record
fs.writeFileSync(
  runesTSOutput,
  `// ${markUpdate()}
import type { Path } from "#shared/types"

export const pathRecord: Record<string, Path> = ${JSON.stringify(strippedPaths, null, 2)}`
)

// write it as a TS file
fs.writeFileSync(
  pathIdsTSOutput,
  `// ${markUpdate()}

export const pathIds: Record<string, number[]> = ${JSON.stringify(pathIdMap, null, 2)}`
)

// runes
fs.writeFileSync(outputRune, `// ${markUpdate()}
import type { Index } from "#shared/types"

export const runeIndex: Index[] = ${JSON.stringify(runeIndex, null, 2)}`)

// keystones
fs.writeFileSync(outputKeystone, `// ${markUpdate()}

export const keystoneIndex: number[] = ${JSON.stringify(keystoneIndex, null, 2)}`)

// Write shards
fs.writeFileSync(outputRawShards, JSON.stringify(extraSlots, null, 2))

fs.writeFileSync(shardOutput, `// ${markUpdate()}
import type { ShardRegistry } from "#shared/types"

export const shardRegistry: ShardRegistry[] = ${JSON.stringify(extraSlots, null, 2)}`)

fs.writeFileSync(outputRunes, JSON.stringify(transformedPaths, null, 2))

console.log(`✅ shard-index.ts created with ${extraSlots.length} shards`)