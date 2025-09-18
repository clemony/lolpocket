import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import type { Ability, Champion } from '../../../shared/types/types.champion'
import { markUpdate } from '../../../shared/utils/markUpdate'
import { resolvePath } from '../resolvePath'
import {
  normalize,
  normalizeAbility,
  normalizeArray,
  stripEmpty,
} from '../utils'

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
const savepointPath = resolvePath(
  './champions/raw/.generate-champions-save.json'
)

// ---------- Ensure output dirs ----------
fs.mkdirSync(outputDir, { recursive: true })
fs.mkdirSync(path.dirname(savepointPath), { recursive: true })

// type
interface BuildChampion extends Omit<Champion, 'abilities'> {
  abilities: Record<'P' | 'Q' | 'W' | 'E' | 'R', Ability[]>
}

// ---------- Load raw data ----------
const merakiData: Record<string, BuildChampion> = JSON.parse(
  fs.readFileSync(dataPathM, 'utf-8')
)
const dragonData: Record<string, any> = JSON.parse(
  fs.readFileSync(dataPathD, 'utf-8')
)

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
const championsMergedRaw: Record<string, any>
  = fs.existsSync(outputMergedRaw)
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
    const abilityOrder: Array<'P' | 'Q' | 'W' | 'E' | 'R'> = [
      'P',
      'Q',
      'W',
      'E',
      'R',
    ]

    const mergedAbilities: any[] = []

    for (const slot of abilityOrder) {
      const abilityGroup = champ.abilities[slot] || []
      for (const ability of abilityGroup) {
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

        const riotCooldown
          = Array.isArray(riotAbility?.cooldown) ? riotAbility.cooldown : []
        const riotCost
          = Array.isArray(riotAbility?.cost) ? riotAbility.cost : []

        mergedAbilities.push({
          ...ability,
          key: slot, // now guaranteed to stick
          maxCharges: safeMaxAmmo,
          maxRank: safeMaxRank,
          riotCooldown,
          riotCost,
        })
      }
    }

    const cleanedAbilities = mergedAbilities.map(normalizeAbility)

    // ---------- Filter stats ----------
    const filteredStats = Object.fromEntries(
      Object.entries(champ.stats)
        .filter(([k]) => !k.startsWith('aram') && !k.startsWith('urf'))
        .map(([k, val]) => {
          const cleaned = Object.fromEntries(
            Object.entries(val)
              .filter(([, v]) => v !== 0 && v != null)
              .map(([kk, vv]) => [
                kk,
                typeof vv === 'number' ? Number(vv.toFixed(3)) : vv,
              ])
          )

          // if nothing left, preserve flat: 0
          return [k, Object.keys(cleaned).length > 0 ? cleaned : { flat: 0 }]
        })
    )

    // ---------- Build normalized champion ----------
    const champData = {
      id: champ.id,
      key: champ.key,
      name: champ.name,
      title: champ.title,
      abilities: cleanedAbilities,
      adaptiveType: normalize(champ.adaptiveType),
      attackType: normalize(champ.attackType),
      attributeRatings: champ.attributeRatings,
      faction: champ.faction,
      fullName: champ.fullName,
      lore: champ.lore,
      patchLastChanged: champ.patchLastChanged,
      positions: normalizeArray(champ.positions),
      price: {
        blueEssence: champ.price?.blueEssence ?? null,
        rp: champ.price?.rp ?? null,
      },
      releaseDate: champ.releaseDate,
      resource: normalize(champ.resource),
      roles: normalizeArray(champ.roles),
      stats: filteredStats,
    }

    championsMergedRaw[key] = Object.fromEntries(
      Object.entries(champData).filter(
        ([, v]) =>
          v != null && v !== '' && !(Array.isArray(v) && v.length === 0)
      )
    )

    // ---------- Write individual champion file ----------
    const outputTsPath = path.join(outputDir, `${key}.ts`)
    fs.writeFileSync(
      outputTsPath,
      `// ${markUpdate()}\n\nconst champion: Champion = ${JSON.stringify(stripEmpty(champData), null, 2)}\nexport default champion`
    )

    // ---------- Update savepoint ----------
    completed.add(key)
    savepoints[SCRIPT_KEY] = [...completed]
    fs.writeFileSync(savepointPath, JSON.stringify(savepoints, null, 2))
    fs.writeFileSync(
      outputMergedRaw,
      JSON.stringify(championsMergedRaw, null, 2)
    )
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
