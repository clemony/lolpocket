// Updated Patch 15.24.1 - 12/26/2025 07:04:15 PM CST

const ability: Ability = {
  key: 'P',
  name: 'Echoing Flames',
  affects: 'Enemies',
  angle: '60°',
  blurb: 'Innate:  Urgot\'s six legs each conceal a shotgun that covers an arc, together forming a circle around him. Each shotgun can fire once before incurring a unique  cooldown.',
  damageType: 'Physical damage',
  effectRadius: '700',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Urgot\'s six legs each conceal a shotgun that covers an arc, together forming a full circle of cover around him. Each shotgun can fire once before incurring a unique cooldown.</p>'
    },
    {
      description: 'Urgot\'s next basic attack on-hit within the arc of a shotgun will cause it to fire in a cone, dealing 40% - 100% (based on level) AD (+ 2% - 6% (based on level) of target\'s maximum health) physical damage to enemies hit, capped at 100 - 360 (based on level) against monsters.'
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Urgot/ability-icon/p',
  notes: 'Echoing Flames:\nShotgun attack range scales with bonus attack range.\nWill not trigger if the target is too far away or they are dead when the basic attack hits.\nWill not trigger while  blinded or if the basic attack is blocked by  Wind Wall or  Blade Whirl.\nIt bypasses  blocking and  dodging effects.\nWill not trigger against  structures nor  wards.\nWill trigger from  Runaan\'s Hurricane\'s additional bolts.\nWill not apply  life steal, but does apply on  spell vamp and  omnivamp.\nWill apply  spell effects.\nWill not trigger when basic attacking certain units (e.g  Shaco\'s  Jack in the Box), however it will trigger when attacking them with  Purge.\nWill consume  Manaflow Band if it is available.\nWill not consume  Tear of the Goddess charges. (bug)\nUrgot\'s legs never change in orientation, with his body instead rotating on top of them; the leg that faces northeast will always face northeast. This does not affect Urgot\'s facing direction for the purposes of abilities such as  Petrifying Gaze.\nUnlike other innate abilities, Echoing Flames grants stacks of  Spear of Shojin\'s Focused Will.(bug)',
  projectile: 'FALSE',
  spellEffects: 'spellaoe',
  spellshieldable: 'false',
  targeting: 'Passive'
}
export default ability
