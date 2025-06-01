import fs from 'node:fs'
import path from 'node:path'
import { normalizeAbility } from './utils/normalize-ability'
import { normalize, normalizeArray } from './utils/normalize-strings'

// Load saved raw data
const champions = JSON.parse(fs.readFileSync('./data/raw/champions-raw-ma.json', 'utf-8'))
const ddData = JSON.parse(fs.readFileSync('./data/raw/champions-raw-dd.json', 'utf-8'))

// Create output dirs
const outputDir = './data/champions'
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
        Object.fromEntries(Object.entries(val).filter(([, v]) => v !== 0 && v != null)),
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
      ([, value]) => value != null && value !== '' && !(Array.isArray(value) && value.length === 0),
    ),
  )

  championsMergedRaw[key] = champData

  const outputPath = path.join(outputDir, `${key}.json`)
  fs.writeFileSync(outputPath, JSON.stringify(champData, null, 2))
  console.log(`✅ Wrote ${key}.json`)
}

// Write full merged raw file
fs.writeFileSync(outputMergedRaw, JSON.stringify(championsMergedRaw, null, 2))
console.log(`✅ Wrote merged champions raw file to ${outputMergedRaw}`)