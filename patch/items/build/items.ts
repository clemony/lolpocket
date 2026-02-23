import type { Index, Item, ItemLite } from "#shared/types"
import fs from "node:fs"
import { resolve } from "node:path"
import stripTags from "striptags"
import { markUpdate } from "../../misc/markUpdate"
import {
  formatStats,
  handleWikiText,
  ludensPreProcess,
  normalizeItemData,
  stripEmpty,
} from "../../utils"

// server
const itemLiteOutput = resolve(`./patch/items/raw/items-lite.json`)
const tagsOutput = resolve(`./patch/items/raw/unique-tags.json`)
const ranksOutput = resolve(`./patch/items/raw/unique-ranks.json`)

// shared
const outputIndex = resolve("./shared/constants/items/itemIndex.ts")
const outputLitePath = resolve("./public/cdn/itemLite.json")
const itemOutputDir = resolve("./public/cdn/items/")
const outputMergedPath = resolve("./patch/items/raw/items-merged.json")

// input
const maPath = resolve(`./patch/items/raw/items.json`)
const ddPath = resolve(`./patch/items/raw/dd-items.json`)
const ddItems = JSON.parse(fs.readFileSync(ddPath, "utf-8"))
const maItems = JSON.parse(fs.readFileSync(maPath, "utf-8"))
const fullData = mergeItems(maItems, ddItems)

const index: Record<string, Index> = {}
const cleanItems: Record<string, Item> = {}
const uniqueTags = new Set<string>()
const uniqueRanks = new Set<string>()
const simplified: Record<string, ItemLite> = {}

fs.mkdirSync(itemOutputDir, { recursive: true })

function mergeItems(
  maItems: Record<string, any>,
  ddItems: Record<string, any>
) {
  const merged: Record<string, any> = {}

  const expandIds = (ids?: number[]) => {
    if (!ids) return undefined
    return ids
      .map((id) => {
        const dd = ddItems[id.toString()]
        if (!dd) return null
        return {
          id,
          name: dd.name,
          gold: dd.gold?.total ?? null,
        }
      })
      .filter(Boolean)
  }

  for (const key in ddItems) {
    const ddItem = ddItems[key]
    const maItem = maItems[key] // may be undefined — that’s fine

    merged[key] = {
      // MA enrichment first (lowest priority)
      ...(maItem ?? {}),

      // DD identity ALWAYS wins
      id: Number(key),
      name: ddItem.name,
      description: ddItem.description,

      gold: ddItem.gold ?? null,
      // DD structural truth
      maps: ddItem.maps ?? maItem?.maps,

      // Recipes only if MA knows them
      buildsFrom: expandIds(maItem?.buildsFrom),
      buildsInto: expandIds(maItem?.buildsInto),
    }
  }

  return merged
}

async function buildItems() {
  for (const id in fullData) {
    const item = fullData[id] // as MergedItem
    if (!item?.name) {
      console.warn(`⚠️ skipping item ${id} — missing name`)
      continue
    }
    // if (item.id === 2146) continue

    const sharedVars = new Map<string, string>()

    const stats = item.stats ? formatStats(item.stats) : undefined
    const { maps, rank, tags } = normalizeItemData(item)

    // Collect unique metadata
    tags.forEach((t) => uniqueTags.add(t))
    rank.forEach((r) => uniqueRanks.add(r))

    index[id] = {
      id: item.id,
      key: "item",
      name: item.name,
    }

    // Enrich the "lite" output
    simplified[id] = stripEmpty({
      id: item.id,
      key: "item",
      name: item.name,
      aka: item?.nicknames,
      gold: item.gold,
      maps,
      rank: rank?.[0] ?? "",
      recipe: item.buildsFrom?.length
        ? item.buildsFrom?.flatMap((i: { id: number }) => i.id)
        : item.specialRecipe
          ? [item.specialRecipe]
          : null,
      stats,
      tags,
    })

    // Handle shop override
    if (item.id === 2141 && item.gold) {
      item.gold.purchasable = false
    }

    const expandedActive = await Promise.all(
      (item.active ?? []).map(async (a: any) => {
        const { stats, ...rest } = a

        return {
          ...rest,
          effects: await handleWikiText(a.effects, sharedVars),
        }
      })
    )

    const expandedPassives = await Promise.all(
      (item.passives ?? []).map(async (p: any) => {
        const { stats, ...rest } = p

        const text =
          item.id === 6655 && p.effects?.includes("Shot Charges")
            ? ludensPreProcess(p.effects)
            : p.effects

        return {
          ...rest,
          effects: await handleWikiText(text, sharedVars),
        }
      })
    )

    const {
      icon,
      iconOverlay,
      mythic,
      shop,
      simpleDescription,
      tier,
      ...rest
    } = item

    const description = stripTags(stripTags(item.description, "<br>"), "", "\n")
      .replace(/^\n\n/, "")
      .replace(/\n\n\n\n/g, "\n\n")

    const preclean = stripEmpty({
      ...rest,
      active: expandedActive,
      description,
      maps,
      passives: expandedPassives,
      rank: rank?.[0],
      stats: stats ?? [],
    })

    const cleanedItem = {
      ...preclean,
      gold: item.gold,
    }
    cleanItems[id] = cleanedItem

    fs.writeFileSync(
      resolve(itemOutputDir, `${item.id}.json`),
      JSON.stringify(cleanedItem, null, 2)
    )
  }

  // Write outputs
  fs.writeFileSync(
    outputIndex,
    `// ${markUpdate()}
import type { Index } from "#shared/types"

export const itemIndex: Index[] = ${JSON.stringify(Object.values(index), null, 2)}`
  )

  fs.writeFileSync(outputLitePath, JSON.stringify(simplified, null, 2))

  fs.writeFileSync(itemLiteOutput, JSON.stringify(simplified, null, 2))

  fs.writeFileSync(tagsOutput, JSON.stringify([...uniqueTags].sort(), null, 2))

  fs.writeFileSync(
    ranksOutput,
    JSON.stringify([...uniqueRanks].sort(), null, 2)
  )
  fs.writeFileSync(
    outputMergedPath,
    JSON.stringify(Object.values(simplified), null, 2)
  )
}

buildItems()

console.log("✅ items-lite.json written")
console.log("📁 individual item files written to ./server/data/items/")
console.log("🔖 unique-tags.json and unique-ranks.json written")
