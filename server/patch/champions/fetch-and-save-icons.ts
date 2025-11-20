import { Buffer } from 'node:buffer'
import fs from 'node:fs'
import path from 'node:path'
import { $fetch } from 'ofetch'
import type { Champion, Skin, SkinRecord } from '../../types/types.import'
import { resolvePath } from '../resolvePath'
import { cleanImageLink, cleanImageNum } from '../utils'
import { markUpdate } from '../utils/markUpdate'

const iconsDir = path.resolve('./public/img/champions')

export async function fetchChampionIcons(changedChamps: Champion[]) {
  // 🟢 Download updated icons if champions changed
  for (const champ of changedChamps) {
    const url = `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/${champ.id}.png`
    try {
      const res = await fetch(url)
      if (!res.ok) {
        console.warn(`⚠️ Failed to fetch icon for ${champ.name} (${champ.id})`)
        continue
      }

      const buf = Buffer.from(await res.arrayBuffer())
      const pngPath = path.join(iconsDir, `${champ.id}.png`)
      const webpPath = path.join(iconsDir, `${champ.id}.webp`)

      // Save original PNG
      fs.writeFileSync(pngPath, buf)
      console.log(`⬇️  Updated PNG for ${champ.name} (${champ.id})`)

      // Convert to WebP and crop 100x100 centered
      const image = sharp(buf)
      const { width, height } = await image.metadata()

      if (!width || !height) {
        throw new Error(
          `❌ Invalid dimensions for ${champ.name} (${champ.id})`,
        )
      }

      const left = Math.floor((width - 100) / 2) // (128 - 100) / 2 = 14
      const top = Math.floor((height - 100) / 2) // (128 - 100) / 2 = 14

      await image
        .extract({ width: 100, height: 100, left, top })
        .webp({ quality: 90 })
        .toFile(webpPath)

      console.log(
        `✨ Cropped & converted to WebP for ${champ.name} (${champ.id})`,
      )

      // 🧼 remove PNG
      fs.unlinkSync(pngPath)
    }
    catch (err) {
      console.error(
        `❌ Error updating icon for ${champ.name} (${champ.id}):`,
        err,
      )
    }
  }
}
