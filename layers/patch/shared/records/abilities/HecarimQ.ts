// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'Q',
  name: 'Rampage',
  affects: 'Self, Enemies',
  blurb: 'Active:  Hecarim cleaves his glaive to deal physical damage to nearby enemies.',
  castTime: 'none',
  cooldown: '4',
  cost: '28 / 26 / 24 / 22 / 20',
  damageType: 'Physical damage',
  effectRadius: '375',
  icon: 'https://cdn.communitydragon.org/latest/champion/Hecarim/ability-icon/q',
  resource: 'Mana',
  spellEffects: 'spellaoe',
  spellshieldable: 'True',
  targeting: 'Auto',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Hecarim cleaves his glaive around himself, dealing physical damage to nearby enemies, reduced to 60% against minions.</p>',
      leveling: [
        {
          attribute: 'Physical Damage',
          modifiers: [
            {
              values: '60 / 85 / 110 / 135 / 160'
            },
            {
              unit: '% bonus AD',
              values: '90'
            }
          ]
        },
        {
          attribute: 'Minion damage',
          modifiers: [
            {
              values: '36 / 51 / 66 / 81 / 96'
            },
            {
              unit: '% bonus AD',
              values: '54'
            }
          ]
        }
      ]
    },
    {
      description: 'If this damages an enemy, Hecarim gains a stack of Rampage for 8 seconds, refreshing on subsequent damage and stacking up to 3 times. Each stack increases Rampage\'s damage by 3% (+ 4% per 100 bonus AD) and reduces its base cooldown by 0.75 seconds, up to a 9% (+ 12% per 100 bonus AD) damage increase and a 2.25-second reduction of the base cooldown at maximum stacks. Stacks expire one by one every 1 second when the duration ends.'
    }
  ]
}
export default ability
