// Updated Patch 16.1 - 01/29/2026 04:27:09 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'W',
  name: 'Seismic Bastion',
  affects: 'Enemies',
  blurb: 'Active:  Skarner slams his claws into the ground,  shielding himself based on his maximum health and releasing a shockwave that quickly expands in a radius around him to deal magic damage to enemies hit and briefly  slow them.',
  castTime: '0.3',
  cooldown: '10 / 9 / 8 / 7 / 6',
  cost: '60 / 65 / 70 / 75 / 80',
  damageType: 'Other damage',
  effectRadius: '600 / 700',
  icon: 'https://cdn.communitydragon.org/latest/champion/Skarner/ability-icon/w',
  notes: 'The shield is granted at the start of the cast time.\nThe shield ratio is equal to 50.4 : 200 (based on level) (+ 8% of his bonus health).\nThis ability will cast from wherever the caster is at the end of the cast time.',
  projectile: 'FALSE',
  resource: 'Mana',
  speed: '1650',
  spellEffects: 'spellaoe',
  spellshieldable: 'true',
  targeting: 'Auto',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Skarner slams his claws into the ground, shielding himself equal to 8% of his maximum health for 2.5 seconds and releasing a shockwave that quickly expands in a radius around him to deal magic damage to enemies hit and slow them by 20% for 1 second.</p>',
      leveling: [
        {
          attribute: 'Magic Damage',
          modifiers: [
            {
              values: '50 / 70 / 90 / 110 / 130'
            },
            {
              unit: '% AP',
              values: '80'
            }
          ]
        }
      ]
    },
    {
      description: 'Skarner can move during Seismic Bastion\'s cast time.'
    }
  ]
}
export default ability
