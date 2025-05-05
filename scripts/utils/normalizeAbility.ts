function cleanModifiers(modifiers: Modifier[] | null | undefined): Modifier[] {
  if (!Array.isArray(modifiers)) {
    return []; // Return an empty array if modifiers is not an array
  }

  return modifiers
    .map(m => ({
      values: m.values.filter(v => v !== null && v !== undefined),
      units: m.units.filter(u => u !== ''),
    }))
    .filter(m => m.values.length > 0 || m.units.length > 0);
}

export function normalizeAbility(ability: any): Ability {

  
  return {
    name: ability.name,
    icon: ability.icon,
    effects: ability.effects,
    cost: cleanModifiers(ability.cost ?? []),
    cooldown: {
      modifiers: cleanModifiers(ability.cooldown?.modifiers ?? []),
      affectedByCdr: !!ability.cooldown?.affectedByCdr,
    },
    targeting: ability.targeting || null,
    affects: ability.affects || null,
    spellshieldable: ability.spellshieldable || null,
    resource: ability.resource || null,
    damageType: ability.damageType || null,
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