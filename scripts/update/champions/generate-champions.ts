import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import type { Champion } from '../../../shared/types/types.champion'
import { markUpdate, normalize, normalizeAbility, normalizeArray, stripEmpty } from '../../index'
import { resolvePath } from '../resolvePath'

// ---------- Args & flags ----------
const args = process.argv.slice(2)
const RESUME = args.includes('--resume')
const FRESH = args.includes('--fresh')
const SCRIPT_KEY = 'generate-champions'

// ---------- File paths ----------
const dataPathM = resolvePath('./champions/raw/champions-raw-meraki.json')
const dataPathD = resolvePath('./champions/raw/champions-raw-data-dragon.json')
const outputDir = resolvePath('../../shared/appdata/records/champions/')
const outputMergedRaw = resolvePath('./champions/raw/champions-raw.json')
const savepointPath = resolvePath('./champions/raw/.generate-champions-save.json')

// ---------- Ensure output dirs ----------
fs.mkdirSync(outputDir, { recursive: true })
fs.mkdirSync(path.dirname(savepointPath), { recursive: true })

// ---------- Load raw data ----------
const merakiData: Record<string, Champion> = JSON.parse(fs.readFileSync(dataPathM, 'utf-8'))
const dragonData: Record<string, any> = JSON.parse(fs.readFileSync(dataPathD, 'utf-8'))

// ---------- Load savepoints ----------
let savepoints: Record<string, string[]> = {}
if (fs.existsSync(savepointPath)) {
  try {
    savepoints = JSON.parse(fs.readFileSync(savepointPath, 'utf-8'))
  }
  catch {
    console.warn('⚠️ Failed to load savepoint, starting fresh.')
  }
}

if (FRESH)
  savepoints[SCRIPT_KEY] = []

const completed = new Set<string>(RESUME ? savepoints[SCRIPT_KEY] || [] : [])

// ---------- Champion processing ----------
const championsMergedRaw: Record<string, any> = fs.existsSync(outputMergedRaw)
  ? JSON.parse(fs.readFileSync(outputMergedRaw, 'utf-8'))
  : {}

for (const champ of Object.values(merakiData)) {
  const { key } = champ
  if (completed.has(key)) {
    console.log(`⏭️ Skipping ${key}, already processed`)
    continue
  }

  try {
    const riotChamp = dragonData[key]
    if (!riotChamp) {
      console.warn(`⚠️ No Riot data for ${key}`)
      continue
    }

    // ---------- Merge abilities ----------
    const mergedAbilities: Record<string, any[]> = {}
    for (const [slot, abilityGroup] of Object.entries(champ.abilities)) {
      mergedAbilities[slot] = abilityGroup.map((ability) => {
        let riotAbility
        if (slot === 'P') {
          riotAbility = riotChamp.passive
        }
        else {
          const spellIndex = ['Q', 'W', 'E', 'R'].indexOf(slot)
          riotAbility = riotChamp.spells?.[spellIndex]
        }
        const maxAmmoRaw = riotAbility?.maxammo
        const maxAmmo = maxAmmoRaw != null ? Number(maxAmmoRaw) : null
        const safeMaxAmmo = Number.isNaN(maxAmmo) ? null : maxAmmo
        const maxRankRaw = riotAbility?.maxrank
        const safeMaxRank = typeof maxRankRaw === 'number' ? maxRankRaw : null
        const riotCooldown = Array.isArray(riotAbility?.cooldown) ? riotAbility.cooldown : []
        const riotCost = Array.isArray(riotAbility?.cost) ? riotAbility.cost : []

        return {
          ...ability,
          maxCharges: safeMaxAmmo,
          maxRank: safeMaxRank,
          riotCooldown,
          riotCost,
        }
      })
    }

    const cleanedAbilities = Object.fromEntries(
      Object.entries(mergedAbilities).map(([slot, entries]) => [slot, entries.map(normalizeAbility)]),
    )

    // ---------- Filter stats ----------
    const filteredStats = Object.fromEntries(
      Object.entries(champ.stats)
        .filter(([k]) => !k.startsWith('aram') && !k.startsWith('urf'))
        .map(([k, val]) => [
          k,
          Object.fromEntries(
            Object.entries(val)
              .filter(([, v]) => v !== 0 && v != null)
              .map(([kk, vv]) => [kk, typeof vv === 'number' ? Number(vv.toFixed(3)) : vv]),
          ),
        ])
        .filter(([, val]) => Object.keys(val).length > 0),
    )

    // ---------- Build normalized champion ----------
    const champData = {
      id: champ.id,
      key: champ.key,
      name: champ.name,
      title: champ.title,
      fullName: champ.fullName,
      resource: normalize(champ.resource),
      attackType: normalize(champ.attackType),
      adaptiveType: normalize(champ.adaptiveType),
      stats: filteredStats,
      positions: normalizeArray(champ.positions),
      roles: normalizeArray(champ.roles),
      attributeRatings: champ.attributeRatings,
      abilities: cleanedAbilities,
      lore: champ.lore,
      faction: champ.faction,
      releaseDate: champ.releaseDate,
      patchLastChanged: champ.patchLastChanged,
      price: {
        blueEssence: champ.price?.blueEssence ?? null,
        rp: champ.price?.rp ?? null,
      },
    }

    championsMergedRaw[key] = Object.fromEntries(
      Object.entries(champData).filter(
        ([, v]) =>
          v != null
          && v !== ''
          && !(Array.isArray(v) && v.length === 0),
      ),
    )

    // ---------- Write individual champion file ----------
    const outputTsPath = path.join(outputDir, `${key}.ts`)
    fs.writeFileSync(
      outputTsPath,
      `// ${markUpdate()}\n\nconst champion: Champion = ${JSON.stringify(stripEmpty(champData), null, 2)}\nexport default champion`,
    )

    // ---------- Update savepoint ----------
    completed.add(key)
    savepoints[SCRIPT_KEY] = [...completed]
    fs.writeFileSync(savepointPath, JSON.stringify(savepoints, null, 2))
    fs.writeFileSync(outputMergedRaw, JSON.stringify(championsMergedRaw, null, 2))
    console.log(`✅ Processed ${key}`)
  }
  catch (err) {
    console.error(`❌ Failed processing ${key}`, err)
    if (!RESUME)
      throw err
  }
}

// ---------- Clean savepoint ----------
delete savepoints[SCRIPT_KEY]
fs.writeFileSync(savepointPath, JSON.stringify(savepoints, null, 2))
console.log('🎉 Cleared savepoint for generate-champions')