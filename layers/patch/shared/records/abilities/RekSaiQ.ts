// Updated Patch 16.1 - 01/29/2026 04:27:02 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'Q',
  name: 'Prey Seeker',
  width: '130',
  affects: 'Enemies',
  blurb: 'Active:  Rek\'Sai fires a void bolt in the target direction that detonates on the first enemy hit, dealing magic damage to all nearby enemies and  revealing them for a short time.',
  castTime: '0.125',
  cooldown: '4 / 3.5 / 3 / 2.5 / 2',
  cost: '0',
  damageType: 'Magic damage',
  effectRadius: '150',
  icon: 'https://cdn.communitydragon.org/latest/champion/RekSai/ability-icon/q',
  notes: 'This ability will cast from wherever the caster is at the end of the cast time.\nPrey Seeker\'s effect radius is centered around the location of the missile as it collides.',
  projectile: 'TRUE',
  speed: '1950',
  spellEffects: 'Area of effect',
  spellshieldable: 'True',
  targeting: 'Direction',
  targetRange: '1500',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Rek\'Sai fires a void bolt in the target direction that detonates on the first enemy hit, dealing magic damage to all nearby enemies and revealing them for 5 seconds.</p>',
      leveling: [
        {
          attribute: 'Magic Damage',
          modifiers: [
            {
              values: '50 / 80 / 110 / 140 / 170'
            },
            {
              unit: '% bonus AD',
              values: '25'
            },
            {
              unit: '% AP',
              values: '70'
            }
          ]
        }
      ]
    }
  ]
}
export default ability
