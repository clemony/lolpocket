// Updated Patch 15.24.1 - 12/26/2025 07:03:51 PM CST

const ability: Ability = {
  key: 'E',
  name: 'Force Pulse',
  affects: 'Enemies',
  angle: '78°',
  blurb: 'Passive: Ability casts reduce the cooldown of this ability.',
  castTime: '0.25',
  cooldown: '21 / 20 / 19 / 18 / 17',
  cost: '60 / 65 / 70 / 75 / 80',
  damageType: 'Magic damage',
  effectRadius: '600 / 1800',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Passive:</span> Each time Kassadin or a nearby champion casts an ability, Force Pulse\'s current cooldown is reduced by 0.75 seconds.</p>'
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Kassadin emits a pulse of void energy in a cone in the target direction that deals magic damage to enemies hit and slows them for 1 second.</p>',
      leveling: [
        {
          attribute: 'Magic Damage',
          modifiers: [
            {
              values: '70 / 100 / 130 / 160 / 190'
            },
            {
              unit: '% AP',
              values: '70'
            }
          ]
        },
        {
          attribute: 'Slow',
          modifiers: [
            {
              unit: '%',
              values: '50 / 60 / 70 / 80 / 90'
            }
          ]
        }
      ]
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Kassadin/ability-icon/e',
  notes: 'Untargetable champions do not reduce Force Pulse\'s cooldown upon ability activations.\nToggle abilities and transformation abilities do not count as ability activations and will not reduce Force Pulse\'s cooldown.\nThis ability will cast from wherever the caster is at the end of the cast time.',
  projectile: 'FALSE',
  resource: 'Mana',
  spellEffects: 'Area of effect',
  spellshieldable: 'True',
  targeting: 'Direction'
}
export default ability
