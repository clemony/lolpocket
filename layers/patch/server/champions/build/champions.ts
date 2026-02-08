import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { roundDecimal } from '#layers/lib/shared/utils'
import { markUpdate } from '../../misc/markUpdate'
import {
  normalize,
  normalizeAbility,
  normalizeArray,
  stripEmpty,
} from '../../utils'

export interface RawSkin {
  id: number
  name?: string
  uncenteredSplashPath: string
}

// ---------- Args & flags ----------
const args = process.argv.slice(2)
const RESUME = args.includes('--resume')
const FRESH = args.includes('--fresh')
const SCRIPT_KEY = 'generate-champions'

// ---------- File paths ----------
const dataPathD = path.resolve(`./layers/patch/server/champions/raw/champions-raw-data-dragon.json`)
const outputDir = path.resolve('./layers/patch/shared/records/champions/')
const outputMergedRaw = path.resolve(`./layers/patch/server/champions/raw/champions-raw.json`)
const savepointPath = path.resolve(`./layers/patch/server/champions/raw/.generate-champions-save.json`)
const outputAbilities = path.resolve('./layers/patch/shared/records/abilities/')
const outputAbilityId = path.resolve(
  './layers/patch/shared/constants/champions/abilityIdToName.ts'
)
const urlMA = fs.readFileSync(
  path.resolve(`./layers/patch/server/champions/raw/champions.json`),
  'utf-8'
)

// ---------- Ensure output dirs ----------
fs.mkdirSync(outputDir, { recursive: true })
fs.mkdirSync(path.dirname(savepointPath), { recursive: true })

// type
interface BuildChampion extends Omit<Champion, 'abilities'> {
  abilities: Record<'P' | 'Q' | 'W' | 'E' | 'R', Ability[]>
  skins: Record<string, RawSkin>
}

const dragonData: Record<string, any> = JSON.parse(
  fs.readFileSync(dataPathD, 'utf-8')
)

const championsMergedRaw: Record<string, any> = {}

// ---------- Load raw Meraki data from directory ----------
const merakiData: Record<string, BuildChampion> = JSON.parse(urlMA)

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

if (FRESH) savepoints[SCRIPT_KEY] = []

const completed = new Set<string>(RESUME ? savepoints[SCRIPT_KEY] || [] : [])

const abilityIdToName: Record<string, string> = {}

const fullSkins: Record<string, Skin[]> = {}
const primarySkins: Record<string, Skin> = {}
const tileSkins: Record<string, string> = {}

// ---------- Champion processing ----------
for (const [key, champ] of Object.entries(merakiData)) {
  if (!champ) {
    console.warn(`⚠️ Champion data missing for ${key}, skipping`)
    continue
  }

  if (completed.has(key)) {
    console.log(`⏭️ Skipping ${key}, already processed`)
    continue
  }

  const riotChamp = dragonData[key]
  if (!riotChamp) {
    console.warn(`⚠️ No Riot data for ${key}`)
    continue
  }

  try {
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
          const spells = ['Q', 'W', 'E', 'R'].indexOf(slot)
          riotAbility = riotChamp.spells?.[spells] || {}
        }

        mergedAbilities.push({
          ...ability,
          key: slot,
          maxCharges:
            Number.isFinite(riotAbility?.maxammo)
              ? Number(riotAbility.maxammo)
              : null,
          maxRank:
            typeof riotAbility?.maxrank === 'number'
              ? riotAbility.maxrank
              : null,
          riotCooldown:
            Array.isArray(riotAbility?.cooldown) ? riotAbility.cooldown : [],
          riotCost: Array.isArray(riotAbility?.cost) ? riotAbility.cost : [],
        })
      }
    }

    const cleanedAbilities = mergedAbilities.map(normalizeAbility)

    fs.mkdirSync(outputAbilities, { recursive: true })

    for (const ability of cleanedAbilities) {
      const abilityFile = path.join(
        outputAbilities,
        `${champ.key}${ability.key}.ts`
      )

      abilityIdToName[`${champ.id}${ability.key}`] = ability.name

      fs.writeFileSync(
        abilityFile,
        `// ${markUpdate()}
  import type { Ability } from "#shared/types"

  const ability: Ability = ${JSON.stringify(stripEmpty(ability), null, 2)}
  export default ability
`
      )
    }

    // ---------- Filter stats safely ----------
    const stats = champ.stats ?? {}

    const baseStats: Record<string, number> = {}
    const statsPerLevel: Record<string, number> = {}

    for (const [key, value] of Object.entries(dragonData[champ.key].stats)) {
      if (value == null || value === 0)
        continue
      const normalizedKey = key
        .replace('spellblock', 'magicResist')
        .replace('attackdamage', 'attackDamage')
        .replace('attackspeed', 'attackSpeed')
        .replace('hpregen', 'hpRegen')
        .replace('mpregen', 'mpRegen')
        .replace('attackrange', 'attackRange')

      if (key.endsWith('perlevel')) {
        const baseKey = normalizedKey.replace(/perlevel$/, '')
        statsPerLevel[baseKey] = roundDecimal(Number(value))
      }
      else {
        baseStats[normalizedKey] = roundDecimal(Number(value))
      }
    }
    /*     const skins: RawSkin[] = champ.skins || []

    const allSkins = skins
      .filter(skin => skin.splashPath && skin.loadScreenPath)
      .map((skin) => {
        return {
          id: String(cleanImageNum(skin.tilePath)),
          key: String(cleanImageLink(skin.splashPath)),
          name: String(skin.name),
          load: String(cleanImageLink(skin.loadScreenPath)),
        }
      })

    const allTile = skins
      .filter(skin => skin.tilePath)
      .map(skin => String(cleanImageLink(skin.tilePath)))

    if (allSkins.length > 0) {
      fullSkins[key] = allSkins
    }
    if (allTile.length > 0) {
      tileSkins[key] = allTile[0]
    } */

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
      fullName: champ.fullName,
      lore: champ.lore,
      patchLastChanged: champ.patchLastChanged,
      positions: normalizeArray(champ.positions),
      releaseDate: champ.releaseDate,
      resource: normalize(champ.resource),
      roles: normalizeArray(champ.roles),
      stats: baseStats,
      statsPerLevel,
      price: {
        blueEssence: champ.price?.blueEssence ?? null,
        rp: champ.price?.rp ?? null,
      },
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
      `// ${markUpdate()}
  import type { Champion } from '#shared/types'

  const champion: Champion = ${JSON.stringify(stripEmpty(champData), null, 2)}\nexport default champion`
    )

    // ---------- Write individual champion file ----------
    fs.writeFileSync(
      outputAbilityId,
      `// ${markUpdate()}\n\nexport const abilityIdToName: Record<string, string> = ${JSON.stringify(abilityIdToName, null, 2)}`
    )

    // ---------- Update savepoint ----------
    completed.add(key)
    savepoints[SCRIPT_KEY] = [...completed]
    fs.writeFileSync(savepointPath, JSON.stringify(savepoints, null, 2))

    // OUTPUT MERGED
    fs.writeFileSync(
      outputMergedRaw,
      JSON.stringify(championsMergedRaw, null, 2)
    )
    console.log(`✅ Processed ${key}`)
  }
  catch (err) {
    console.error(`❌ Failed processing ${key}`, err)
    if (!RESUME) throw err
  }
}

// ---------- Clean savepoint ----------
delete savepoints[SCRIPT_KEY]
fs.writeFileSync(savepointPath, JSON.stringify(savepoints, null, 2))
console.log('🎉 Cleared savepoint for generate-champions')
