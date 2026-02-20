// look for missing champion icons by comparing local ids to community dragon ids

import { Buffer } from 'node:buffer'
import fs from 'node:fs'
import path from 'node:path'
import { championIndex } from '#layers/patch/shared/constants'
import sharp from 'sharp'

const iconsDir = path.resolve('./public/img/champions')

// cdn path for latest champion metadata

export async function fetchMissingChampionIcons() {
  // load local champion ids
  // local files are like: "266.webp" so drop ext and cast to number
  const localIds = new Set(
    fs
      .readdirSync(iconsDir)
      .filter(f => f.endsWith('.webp'))
      .map(f => Number(f.split('.')[0]))
  )

  const champs = championIndex
  // find champions missing from local set
  const missing = champs.filter(c => !localIds.has(c.id))

  if (missing.length === 0) {
    console.log('🌟 all champion icons present')
    return
  }

  console.log(`🔍 missing ${missing.length} icons...`)

  // fetch only missing ones
  for (const champ of missing) {
    const url = `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/${champ.id}.png`
    try {
      const r = await fetch(url)
      if (!r.ok) {
        console.warn(`⚠️ failed ${champ.name} (${champ.id})`)
        continue
      }

      const buf = Buffer.from(await r.arrayBuffer())
      const pngPath = path.join(iconsDir, `${champ.id}.png`)
      const webpPath = path.join(iconsDir, `${champ.id}.webp`)

      // write original png
      fs.writeFileSync(pngPath, buf)

      // crop + convert
      const img = sharp(buf)
      const { width, height } = await img.metadata()
      if (!width || !height) throw new Error('bad dimensions')

      const left = Math.floor((width - 100) / 2)
      const top = Math.floor((height - 100) / 2)

      await img
        .extract({ width: 100, height: 100, left, top }) // center 100x100
        .webp({ quality: 90 })
        .toFile(webpPath)

      console.log(`✨ processed ${champ.name} (${champ.id})`)

      // nuke the png
      fs.unlinkSync(pngPath)
    }
    catch (err) {
      console.error(`❌ error on ${champ.name} (${champ.id})`, err)
    }
  }
}

fetchMissingChampionIcons()
