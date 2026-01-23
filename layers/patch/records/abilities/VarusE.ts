// Updated Patch 15.24.1 - 12/26/2025 07:04:15 PM CST

const ability: Ability = {
  key: 'E',
  name: 'Hail of Arrows',
  affects: 'Enemies',
  blurb: 'Active:  Varus fires a hail of arrows to the target location that deals physical damage to enemies hit.',
  castTime: '0.2419',
  cooldown: '18 / 16 / 14 / 12 / 10',
  cost: '90',
  damageType: 'Magic damage',
  effectRadius: '300',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Varus fires a hail of arrows at the target location that land after 0.5 seconds, dealing physical damage to enemies hit.</p>',
      leveling: [
        {
          attribute: 'Physical Damage',
          modifiers: [
            {
              values: '60 / 90 / 120 / 150 / 180'
            },
            {
              unit: '% bonus AD',
              values: '90'
            }
          ]
        }
      ]
    },
    {
      description: 'The area then becomes desecrated for 4 seconds, slowing enemies within and inflicting them with Grievous Wounds.',
      leveling: [
        {
          attribute: 'Slow',
          modifiers: [
            {
              unit: '%',
              values: '30 / 35 / 40 / 45 / 50'
            }
          ]
        }
      ]
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Varus/ability-icon/e',
  notes: 'Slow lingers for 0.25 seconds after leaving the marked area.\nHail of Arrows consumes  Blighted Quiver stacks for bonus damage a second time after ~0.3 seconds of hitting, allowing stacks applied during this time to be triggered.',
  projectile: 'TRUE',
  resource: 'Mana',
  spellEffects: 'spellaoe',
  spellshieldable: 'True',
  targeting: 'Location',
  targetRange: '925'
}
export default ability
