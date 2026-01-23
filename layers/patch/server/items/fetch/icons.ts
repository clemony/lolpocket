// look for missing item icons by comparing local ids to community dragon ids

import { Buffer } from "node:buffer"
import fs from "node:fs"
import path from "node:path"
import sharp from "sharp"
const iconsDir = path.resolve("./public/img/items")

// cdn path for latest item metadata

//1202.png
const CDN_BASE = "https://ddragon.leagueoflegends.com/cdn/16.1.1/img/item/"

const localIds = new Set(
  fs
    .readdirSync(iconsDir)
    .filter((f) => f.endsWith(".webp"))
    .map((f) => Number(f.split(".")[0]))
)
console.log("🥸 - localIds:", localIds)

export async function fetchMissingItemIcons() {
  const missing = itemIndex.filter((item) => !localIds.has(item.id))

  if (!missing.length) {
    console.log("🌟 all item icons present")
    return
  }

  console.log(`🔍 missing ${missing.length} icons...`)

  for (const item of missing) {
    const url = `${CDN_BASE}${item.id}.png`

    try {
      const r = await fetch(url)
      if (!r.ok) {
        console.warn(`⚠️ failed ${item.name} (${item.id})`)
        continue
      }

      const buf = Buffer.from(await r.arrayBuffer())
      const webpPath = path.join(iconsDir, `${item.id}.webp`)

      await sharp(buf).webp({ quality: 90 }).toFile(webpPath)

      console.log(`✨ processed ${item.name} (${item.id})`)
    } catch (err) {
      console.error(`❌ error on ${item.name} (${item.id})`, err)
    }
  }
}

fetchMissingItemIcons()
