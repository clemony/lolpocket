import { normalize } from './normalizeStrings'


function cleanModifiers(modifiers: Modifier[] | null | undefined): Modifier[] {
  if (!Array.isArray(modifiers)) return [];

  return modifiers
    .map(m => {
      const values = m.values?.filter(v => v !== null && v !== undefined) ?? [];
      const units = m.units ?? [];

      const allValuesSame = values.length > 0 && values.every(v => v === values[0]);
      const allUnitsSame = units.length > 0 && units.every(u => u === units[0]);

      const cleanedValues = allValuesSame ? [values[0]] : values;
      const cleanedUnits = allUnitsSame ? [units[0]] : units;

      return { values: cleanedValues, units: cleanedUnits };
    })
    
    .filter(m => m.values.length > 0 || m.units.length > 0);
}

function cleanAbilityEffects(effects: any[]): any[] {
  if (!Array.isArray(effects)) return [];

  return effects.map(effect => ({
    ...effect,
    description: typeof effect.description === 'string'
      ? effect.description
          // Replace `x : y` with `x - y`
          .replace(/(\d) ?: ?(\d)/g, '$1 - $2')
          // Replace `% : x` with `% - x`
          .replace(/(%) ?: ?(\d)/g, '$1 - $2')
          // fix sona
          .replace('ability she cast:', 'ability she cast.')
          .replace(/(.*?:)(.*)/g, '\n\n<div><p class="font-semibold  tracking-tight text-4">$1</p><p>$2</p></div>') // Wrap headers
      : effect.description,
    leveling: Array.isArray(effect.leveling)
      ? effect.leveling.map(level => ({
          ...level,
          modifiers: cleanModifiers(level.modifiers),
        }))
      : [],
  }));
}

export function normalizeAbility(ability: any): Ability {
console.log('>>> RAW COST MODIFIERS', JSON.stringify(ability.cost, null, 2));
  
  return {
    name: ability.name,
    icon: ability.icon,
  effects: cleanAbilityEffects(ability.effects || []),
cost: cleanModifiers(ability.cost?.modifiers ?? []),
    cooldown: {
      modifiers: cleanModifiers(ability.cooldown?.modifiers ?? []),
      affectedByCdr: !!ability.cooldown?.affectedByCdr,
    },
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
    rechargeRate: ability.rechargeRate || null,
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
  }
}