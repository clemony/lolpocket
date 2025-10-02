import type { Ability } from '#shared/types/types.champion'
import { normalize } from './normalizeStrings'

interface DirtyModifier {
  units?: string[] | null
  values?: number[] | null
}

interface CleanedModifier {
  tooltip?: string
  unit: string
  values: string
}

function cleanModifiers(modifiers: DirtyModifier[] | null | undefined): CleanedModifier[] {
  if (!Array.isArray(modifiers))
    return []

  const normalized = modifiers
    .map((m) => {
      const values = m.values?.filter(v => v !== null && v !== undefined) ?? []
      const units = m.units ?? []

      if (!values.length)
        return null

      const allValuesSame = values.every(v => v === values[0])
      const allUnitsSame = units.every(u => u === units[0])

      const cleanedValues = allValuesSame ? [values[0]] : values
      const cleanedUnit = allUnitsSame ? (units[0] ?? '') : (units[0] ?? '')

      const rounded = cleanedValues.map(v => Math.round(v * 100) / 100)

      return { unit: cleanedUnit, values: rounded }
    })
    .filter(Boolean) as { values: number[], unit: string }[]

  if (!normalized.length)
    return []

  // handle special case: multiple modifiers
  if (normalized.length > 1) {
    const last = normalized.pop()!

    if (last.values.length > 2) {
      return [
        ...normalized.map(c => ({
          unit: c.unit,
          values: c.values.join(' / '),
        })),
        {
          tooltip: `Scaling per rank:\n${last.values.join(' / ')}${last.unit}`,
          unit: last.unit,
          values: `${last.values[0]} - ${last.values[last.values.length - 1]}`,
        },
      ]
    }

    return [
      ...normalized.map(c => ({
        unit: c.unit,
        values: c.values.join(' / '),
      })),
      {
        unit: last.unit,
        values: last.values.join(' / '),
      },
    ]
  }

  // only one modifier
  return normalized.map(c => ({
    unit: c.unit,
    values: c.values.join(' / '),
  }))
}

function cleanAbilityEffects(effects: any[]): any[] {
  if (!Array.isArray(effects))
    return []

  return effects.map(effect => ({
    ...effect,
    description:
      typeof effect.description === 'string'
        ? effect.description
          // Replace `x : y` with `x - y`
            .replace(/(\d) ?: ?(\d)/g, '$1 - $2')
          // Replace `% : x` with `% - x`
            .replace(/(%) ?: ?(\d)/g, '$1 - $2')
          // fix sona
            .replace(/\s?\/\s?/g, ' / ')
            .replace('ability she cast:', 'ability she cast.')
            .replace(/(.*?:)(.*)/g, '<span class="ability-header">$1</span>$2') // Wrap headers
            .replace(
              /(<span class="ability-header">.*?<\/span>.*?)(?=\n|$)/gs,
              '<p class="ability-effect">$1</p>'
            )
        : effect.description,
    leveling:
      Array.isArray(effect.leveling)
        ? effect.leveling.map((level: any, i: number) => ({
            ...level,
            modifiers: cleanModifiers(level.modifiers),
          }))
        : [],
  }))
}

function simplifyArray<T>(arr: T[]): T[] {
  return arr.length && arr.every(v => v === arr[0]) ? [arr[0]] : arr
}

export function normalizeAbility(ability: any): Ability {
  return {
    key: ability.key,
    name: ability.name,
    width: ability.width || null,
    affects: ability.affects || null,
    angle: ability.angle || null,
    blurb: ability.blurb || null,
    castTime: ability.castTime || null,
    collisionRadius: ability.collisionRadius || null,
    cooldown: simplifyArray(ability.riotCooldown).join(' / '),
    cost: simplifyArray(ability.riotCost).join(' / '),
    damageType: normalize(ability.damageType) || null,
    effectRadius: ability.effectRadius || null,
    effects: cleanAbilityEffects(ability.effects || []),
    icon: ability.icon,
    innerRadius: ability.innerRadius || null,
    maxCharges: ability.maxCharges || null,
    missileSpeed: ability.missileSpeed || null,
    notes: ability.notes || null,
    occurrence: ability.occurrence || null,
    onHitEffects: ability.onHitEffects || null,
    onTargetCdStatic: ability.onTargetCdStatic || null,
    projectile: ability.projectile || null,
    rechargeRate: ability.rechargeRate?.join(' / ') || null,
    resource: normalize(ability.resource) || null,
    speed: ability.speed || null,
    spellEffects: ability.spellEffects || null,
    spellshieldable: ability.spellshieldable || null,
    targeting: ability.targeting || null,
    targetRange: ability.targetRange || null,
    tetherRadius: ability.tetherRadius || null,
  }
}
