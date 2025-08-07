import fs from 'node:fs'
import path from 'node:path'
import type { Champion } from '../../shared/types/types-champion.ts'
import { markUpdate } from '../utils/mark-update.js'
import { normalizeAbility } from '../utils/normalize-ability.js'
import { normalize, normalizeArray } from '../utils/normalize-strings.js'
import { stripEmpty } from '../utils/strip-empty.ts.ts'

// Load saved raw data
const champions = JSON.parse(
  fs.readFileSync('./data/raw/champions-raw-meraki.json', 'utf-8'),
)
const ddData = JSON.parse(
  fs.readFileSync('./data/raw/champions-raw.json', 'utf-8'),
)

// Create output dirs
const outputDir = './app/data/records/champions/'
const outputMergedRaw = './data/raw/champions-raw.json'
fs.mkdirSync(outputDir, { recursive: true })

const championsMergedRaw: Record<string, any> = {}

for (const champ of Object.values(champions) as Champion[]) {
  const {
    id,
    key,
    name,
    title,
    fullName,
    resource,
    attackType,
    stats,
    positions,
    roles,
    attributeRatings,
    abilities: merakiAbilities,
    lore,
  } = champ

  // Use DD champion data to merge
  const riotChamp = ddData[key]
  if (!riotChamp) {
    console.warn(`⚠️ No Riot data for ${key}`)
    continue
  }

  const mergedAbilities: Record<string, any[]> = {}
  for (const [slot, abilityGroup] of Object.entries(merakiAbilities)) {
    mergedAbilities[slot] = abilityGroup.map((ability, index) => {
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

      // Get Riot cooldown/cost arrays (may be undefined)
      const riotCooldown
        = Array.isArray(riotAbility?.cooldown) ? riotAbility.cooldown : []
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

  // Apply normalizer to merged abilities
  const cleanedAbilities = Object.fromEntries(
    Object.entries(mergedAbilities).map(([slot, entries]) => [
      slot,
      entries.map(normalizeAbility),
    ]),
  )

  const filteredStats = Object.fromEntries(
    Object.entries(stats)
      .filter(([key]) => !key.startsWith('aram') && !key.startsWith('urf'))
      .map(([key, val]) => [
        key,
        Object.fromEntries(
          Object.entries(val)
            .filter(([, v]) => v !== 0 && v != null)
            .map(([k, v]) => [
              k,
              typeof v === 'number' ? Number(v.toFixed(3)) : v,
            ]),
        ),
      ])
      .filter(([, val]) => Object.keys(val).length > 0),
  )

  const champDataRaw = {
    id,
    key,
    name,
    title,
    fullName,
    resource: normalize(resource),
    attackType: normalize(attackType),
    stats: filteredStats,
    positions: normalizeArray(positions),
    roles: normalizeArray(roles),
    attributeRatings,
    abilities: cleanedAbilities,
    lore,
  }

  // Strip null, empty string, or empty array values
  const champData = Object.fromEntries(
    Object.entries(champDataRaw).filter(
      ([, value]) =>
        value != null
        && value !== ''
        && !(Array.isArray(value) && value.length === 0),
    ),
  )

  championsMergedRaw[key] = champData

  const outputTsPath = path.join(outputDir, `${key}.ts`)
  console.log('💠 - outputTsPath:', outputTsPath)
  fs.writeFileSync(
    outputTsPath,
    `// ${markUpdate()}

const champion: Champion =  ${JSON.stringify(stripEmpty(champData), null, 2)}
    export default champion`,
  )
}

// Write full merged raw file
fs.writeFileSync(outputMergedRaw, JSON.stringify(championsMergedRaw, null, 2))
console.log(`✅ Wrote merged champions raw file to ${outputMergedRaw}`)
