/* eslint-disable antfu/no-top-level-await */
import fs from "node:fs"
import path from "node:path"
import { r_DIR } from "../.."

import { markUpdate } from "../../utils"
import { colorDict } from "../../utils/colorDict"

const runesTSOutput = path.resolve("./layers/domain/constants/runes/runes.ts")
const shardOutput = path.resolve("./layers/domain/constants/runes/shards.ts")
const rawRunes = JSON.parse(
  fs.readFileSync(path.resolve(`${r_DIR}/runes-raw.json`), "utf-8")
)
const rawPaths = JSON.parse(
  fs.readFileSync(path.resolve(`${r_DIR}/paths-raw.json`), "utf-8")
)

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
      "$1"
    )
    .replaceAll(
      /<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_CDR'>(.*?)<\/lol-uikit-tooltipped-keyword>/g,
      "$1"
    )
    .replaceAll(
      /<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_MS'>(.*?)<\/lol-uikit-tooltipped-keyword>/g,
      "$1"
    )
    .replaceAll(/<font color='#48C4B7'>(.*?)<\/font>/g, "$1")
}
// Create a lookup map for runes by ID for quick access
const runesById = Object.fromEntries(
  rawRunes.map((rune: any) => [rune.id, rune])
)

// container for slots >= 4
const extraSlots: any[] = []
// create object for pathName -> perk IDs
const pathIdMap: Record<string, number[]> = {}

const transformedPaths = rawPaths.styles.reduce(
  (acc: any, path: any, pathIndex: number) => {
    const mappedSlots = path.slots
      .map((slot: any, index: number) => {
        if (index >= 4) {
          if (pathIndex === 0) {
            extraSlots.push({
              label: slot.slotLabel || `Slot ${index}`,
              shards: slot.perks
                .map((perkId: number) => {
                  const rune = runesById[perkId]
                  if (!rune) return null
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

        // Build pathIdMap only once per path, and only for main slots
        const allPerkIds = path.slots
          .slice(0, 4)
          .flatMap((slot: any) => slot.perks)
        pathIdMap[path.id] = allPerkIds

        return {
          label: slot.slotLabel || "Keystone",
          runes: slot.perks
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
        }
      })
      .filter(Boolean)

    acc[path.id] = {
      id: path.id,
      name: path.name,
      slots: mappedSlots,
      tooltip: path.tooltip,
    }

    return acc
  },
  {}
)

// Make a lightweight version for TS (no descriptions)
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

fs.writeFileSync(
  runesTSOutput,
  `// ${markUpdate()}

export const runePaths: RunePath[] = ${JSON.stringify(strippedPaths, null, 2)}`
)

const shardTSOutput = `// ${markUpdate()}

export const shardObject: ShardObject[] = ${JSON.stringify(extraSlots, null, 2)}`
fs.writeFileSync(shardOutput, shardTSOutput)

console.log(`✅ shard-index.ts created with ${extraSlots.length} shards`)

/* fs.writeFileSync(outputRunes, JSON.stringify(transformedPaths, null, 2)) */
