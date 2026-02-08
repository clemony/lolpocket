// Updated Patch 16.1 - 01/29/2026 04:27:14 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'Q',
  name: 'Tumble',
  affects: 'Self',
  blurb: 'Active:  Vayne  dashes in the target direction. Her next  basic attack within a few seconds will deal bonus physical damage.',
  castTime: 'none',
  cooldown: '6 / 5 / 4 / 3 / 2',
  cost: '30',
  damageType: 'Physical damage',
  icon: 'https://cdn.communitydragon.org/latest/champion/Vayne/ability-icon/q',
  notes: 'This ability always employs Quick cast.\nThe bonus damage applies  life steal.\nAlthough Tumble will reset the basic attack timer, Vayne cannot attack until the animation is complete.\nVayne can cast  Final Hour during Tumble. She does not become  invisible during the dash.',
  resource: 'Mana',
  speed: '500 + total movement speed',
  spellEffects: 'spell',
  targeting: 'Direction',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Vayne dashes a fixed distance in the target direction, though not through terrain, and empowers her next basic attack within 3 seconds to have an uncancellable windup and deal bonus physical damage.</p>',
      leveling: [
        {
          attribute: 'Bonus Physical Damage',
          modifiers: [
            {
              unit: '% AD',
              values: '75 / 85 / 95 / 105 / 115'
            },
            {
              unit: '% AP',
              values: '50'
            }
          ]
        }
      ]
    },
    {
      description: 'Tumble resets Vayne\'s basic attack timer.'
    }
  ]
}
export default ability
