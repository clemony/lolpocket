import type { Ability } from '../../../../shared/types/types.champion'
import { normalize } from './normalizeStrings'

interface DirtyModifier {
  values?: number[] | null
  units?: string[] | null
}

interface CleanedModifier {
  values: string
  unit: string
  tooltip?: string
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

      return { values: rounded, unit: cleanedUnit }
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
          values: c.values.join(' / '),
          unit: c.unit,
        })),
        {
          values: `${last.values[0]} - ${last.values[last.values.length - 1]}`,
          unit: last.unit,
          tooltip: `Scaling per rank:\n${last.values.join(' / ')}${last.unit}`,
        },
      ]
    }

    return [
      ...normalized.map(c => ({
        values: c.values.join(' / '),
        unit: c.unit,
      })),
      {
        values: last.values.join(' / '),
        unit: last.unit,
      },
    ]
  }

  // only one modifier
  return normalized.map(c => ({
    values: c.values.join(' / '),
    unit: c.unit,
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
        ? effect.leveling.map((level, i: number) => ({
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
    name: ability.name,
    key: ability.key,
    icon: ability.icon,
    effects: cleanAbilityEffects(ability.effects || []),
    cost: simplifyArray(ability.riotCost).join(' / '),
    cooldown: simplifyArray(ability.riotCooldown).join(' / '),
    targeting: ability.targeting || null,
    affects: ability.affects || null,
    spellshieldable: ability.spellshieldable || null,
    resource: normalize(ability.resource) || null,
    damageType: normalize(ability.damageType) || null,
    spellEffects: ability.spellEffects || null,
    projectile: ability.projectile || null,
    onHitEffects: ability.onHitEffects || null,
    occurrence: ability.occurrence || null,
    notes: ability.notes || null,
    blurb: ability.blurb || null,
    missileSpeed: ability.missileSpeed || null,
    rechargeRate: ability.rechargeRate?.join(' / ') || null,
    collisionRadius: ability.collisionRadius || null,
    tetherRadius: ability.tetherRadius || null,
    onTargetCdStatic: ability.onTargetCdStatic || null,
    innerRadius: ability.innerRadius || null,
    speed: ability.speed || null,
    width: ability.width || null,
    angle: ability.angle || null,
    castTime: ability.castTime || null,
    effectRadius: ability.effectRadius || null,
    targetRange: ability.targetRange || null,
    maxCharges: ability.maxCharges || null,
  }
}
