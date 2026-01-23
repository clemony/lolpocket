// Updated Patch 15.24.1 - 12/26/2025 07:04:14 PM CST

const ability: Ability = {
  key: 'W',
  name: 'Seismic Shove',
  affects: 'Enemies',
  blurb: 'Active:  Taliyah creates a ledge at the target location that erects after a brief delay, briefly  knocking enemies hit in the target direction.',
  castTime: '0.25',
  cooldown: '14 / 12.5 / 11 / 9.5 / 8',
  cost: '40 / 30 / 20 / 10 / 0',
  damageType: 'Magic damage',
  effectRadius: '225',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Taliyah marks the target location and selects a direction. After 0.792 seconds, a ledge erupts from the area that knocks enemies hit 400 units in the target direction over 1 second.</p>'
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Taliyah/ability-icon/w',
  notes: 'The delay is measured from the start of the cast, before the cast time.',
  resource: 'Mana',
  spellEffects: 'aoe',
  spellshieldable: 'True',
  targeting: 'Vector',
  targetRange: '900'
}
export default ability
