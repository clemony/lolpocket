import fetch from 'node-fetch'
import { Buffer } from 'node:buffer'
import fs from 'node:fs'
import path from 'node:path'
import { cleanImageLink, cleanImageNum, markUpdate } from '../..'
import type { FullSkinRecord, SkinRecord } from '../../../shared/types/types.champion'
import { resolvePath } from '../resolvePath'

const championsPath = resolvePath('./scripts/update/champions/raw/champions-raw-meraki.json')
const baseSkinPath = resolvePath('./shared/appdata/index/skins-base.ts')
const iconsDir = resolvePath('./public/img/champions')
const outputFull = resolvePath('./shared/appdata/index/skins-full.ts')
const outputBase = resolvePath('./shared/appdata/index/skins-base.ts')

// ensure icons dir exists
fs.mkdirSync(iconsDir, { recursive: true })

const championsRaw = fs.readFileSync(championsPath, 'utf-8')
const champions = JSON.parse(championsRaw)

const fullSkins: FullSkinRecord = {}
const primarySkins: SkinRecord = {}

// 🟢 Load old baseSkin before building new
let oldBaseSkin: SkinRecord = {}
if (fs.existsSync(baseSkinPath)) {
  const oldContent = fs.readFileSync(baseSkinPath, 'utf-8')
  const match = oldContent.match(/export const baseSkin: SkinRecord = (\{[\s\S]*\})/)
  if (match) {
    oldBaseSkin = JSON.parse(match[1])
  }
}

const changedChamps: { name: string, id: number }[] = []

for (const key in champions) {
  const champ = champions[key]
  const skins = champ.skins || []

  const baseSkins = skins
    .filter(skin =>
      skin.tilePath
      && skin.uncenteredSplashPath
      && skin.splashPath
      && skin.loadScreenPath,
    )
    .map(skin => ({
      tilePath: cleanImageLink(skin.tilePath),
      centeredPath: cleanImageLink(skin.splashPath),
      loadPath: cleanImageLink(skin.loadScreenPath),
    }))

  if (baseSkins.length > 0) {
    primarySkins[key] = baseSkins[0]

    // compare with old base skin
    const oldSkin = oldBaseSkin[key]
    if (
      !oldSkin
      || oldSkin.tilePath !== baseSkins[0].tilePath
      || oldSkin.centeredPath !== baseSkins[0].centeredPath
      || oldSkin.loadPath !== baseSkins[0].loadPath
    ) {
      changedChamps.push({ name: key, id: champ.id })
    }
  }

  const allSkins = skins
    .filter(skin =>
      skin.tilePath
      && skin.uncenteredSplashPath
      && skin.splashPath
      && skin.loadScreenPath,
    )
    .map(skin => ({
      name: skin.name,
      id: cleanImageNum(skin.tilePath),
    }))

  if (allSkins.length > 0) {
    fullSkins[key] = allSkins
  }
}

// 🟢 Write new files after comparison
const fullSkinsTs = `// ${markUpdate()}

export const skins: FullSkinRecord = ${JSON.stringify(fullSkins, null, 2)}`
const primarySkinsTs = `// ${markUpdate()}

export const baseSkin: SkinRecord = ${JSON.stringify(primarySkins, null, 2)}`

fs.writeFileSync(outputFull, fullSkinsTs)
fs.writeFileSync(outputBase, primarySkinsTs)

console.log(`✅ skins-full.ts and skins-base.ts written as modules`)

// 🟢 Download updated icons if champions changed
if (changedChamps.length > 0) {
  console.log(`🔄 Changed champions:`, changedChamps.map(c => c.name))

  for (const champ of changedChamps) {
    const url = `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/${champ.id}.png`
    try {
      const res = await fetch(url)
      if (!res.ok) {
        console.warn(`⚠️ Failed to fetch icon for ${champ.name} (${champ.id})`)
        continue
      }
      const buf = Buffer.from(await res.arrayBuffer())
      fs.writeFileSync(path.join(iconsDir, `${champ.id}.png`), buf)
      console.log(`⬇️  Updated icon for ${champ.name} (${champ.id})`)
    }
    catch (err) {
      console.error(`❌ Error updating icon for ${champ.name} (${champ.id}):`, err)
    }
  }
}
else {
  console.log(`📦 No champion icon changes detected`)
}