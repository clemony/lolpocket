// Updated Patch 15.24.1 - 12/26/2025 07:04:08 PM CST

const ability: Ability = {
  key: 'Q',
  name: 'Blooming Burst',
  affects: 'Enemies',
  blurb: 'Active:  Neeko tosses a seed that blooms at the target location, dealing magic damage to nearby enemies.',
  castTime: '0.25',
  cooldown: '9 / 8.5 / 8 / 7.5 / 7',
  cost: '50 / 60 / 70 / 80 / 90',
  damageType: 'Magic damage',
  effectRadius: '250',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Neeko tosses a seed that bursts upon landing at the target location, dealing magic damage to nearby enemies.</p>',
      leveling: [
        {
          attribute: 'Initial Magic Damage',
          modifiers: [
            {
              values: '60 / 110 / 160 / 210 / 260'
            },
            {
              unit: '% AP',
              values: '60'
            }
          ]
        }
      ]
    },
    {
      description: 'If the burst kills an enemy or hits a champion or large monster, the seed blooms after 0.75 seconds to burst again, dealing magic damage to enemies in the same area. This may occur up to 2 times per cast.',
      leveling: [
        {
          attribute: 'Subsequent Magic Damage',
          modifiers: [
            {
              values: '35 / 60 / 85 / 110 / 135'
            },
            {
              unit: '% AP',
              values: '25'
            }
          ]
        },
        {
          attribute: 'Total Maximum Magic Damage',
          modifiers: [
            {
              values: '130 / 230 / 330 / 430 / 530'
            },
            {
              unit: '% AP',
              values: '110'
            }
          ]
        }
      ]
    },
    {
      description: 'Each bloom deals bonus magic damage against monsters.',
      leveling: [
        {
          attribute: 'Bonus Monster Damage',
          modifiers: [
            {
              values: '35 / 50 / 65 / 80 / 95'
            }
          ]
        }
      ]
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Neeko/ability-icon/q',
  notes: 'This ability will cast from wherever the caster is at the start of the cast time.\n Spell shield blocks an instance of damage but does not prevent subsequent Blooms.',
  projectile: 'TRUE',
  resource: 'Mana',
  speed: '2000',
  spellEffects: 'spellaoe',
  spellshieldable: 'special',
  targeting: 'Location'
}
export default ability
