// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'W',
  name: 'Empower',
  affects: 'Self, Enemies',
  blurb: 'Active:  Jax empowers his next basic attack or  Leap Strike against an enemy to deal additional magic damage.',
  castTime: 'none',
  cooldown: '7 / 6 / 5 / 4 / 3',
  cost: '30',
  damageType: 'Magic damage',
  icon: 'https://cdn.communitydragon.org/latest/champion/Jax/ability-icon/w',
  notes: 'Empower is applied in a separate damage instance from Jax\'s basic attacks.\nThis causes effects like  Bone Plating to be applied twice.(note)',
  resource: 'Mana',
  spellEffects: 'spell',
  spellshieldable: 'true',
  targeting: 'Auto',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Jax empowers his next basic attack or Leap Strike against an enemy within 10 seconds to deal additional magic damage, reduced to 50% against structures. If Empower is used on a basic attack, it will gain 50 bonus range and have an uncancellable windup.</p>',
      leveling: [
        {
          attribute: 'Additional Magic Damage',
          modifiers: [
            {
              values: '50 / 85 / 120 / 155 / 190'
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
      description: 'Empower resets Jax\'s basic attack timer.'
    }
  ]
}
export default ability
