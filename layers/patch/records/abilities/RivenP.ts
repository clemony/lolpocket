// Updated Patch 15.24.1 - 12/26/2025 07:04:14 PM CST

const ability: Ability = {
  key: 'P',
  name: 'Runic Blade',
  affects: 'Enemies',
  blurb: 'Innate:  Riven\'s  ability casts generate  stacks of Charge, which stacks up to a cap. Riven\'s  basic attacks consume a stack to deal bonus physical damage.',
  damageType: 'Physical damage',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Riven\'s ability casts generate a stack of Charge for 6 seconds, refreshing on subsequent casts and stacking up to 3 times. Riven\'s basic attacks are empowered to each consume a stack to deal bonus physical damage equal to 30% - 50% (based on level) AD, reduced to[ 50% ][ 15% - 25% (based on level) AD ]against structures and with monsters taking an additional 50 bonus physical damage.</p>'
    },
    {
      description: 'The bonus damage is affected by critical strike modifiers and applies life steal at 100% effectiveness.'
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Riven/ability-icon/p',
  notes: 'Runic Blade\'s duration also refreshes when Riven consumes a stack.\nThe empowered attack will not trigger against  wards.\nThe number of empowered attacks available is represented by a counter under her health bar, only visible to the player.',
  spellEffects: 'Proc',
  targeting: 'Passive'
}
export default ability
