// Updated Patch 16.1 - 01/29/2026 04:26:57 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'R',
  name: 'Aspect of the Cougar',
  affects: 'Self',
  blurb: 'Active:  Nidalee switches between her Human Form and Cougar Form.',
  castTime: 'none',
  cooldown: '3',
  cost: '0',
  icon: 'https://cdn.communitydragon.org/latest/champion/Nidalee/ability-icon/r',
  notes: 'Transformations do not count as ability activations for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse\'s passive.',
  targeting: 'Auto',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Nidalee switches between her Human Form and Cougar Form.</p>'
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Cougar Form:</span> Nidalee transforms into a cougar, gaining melee attacks with 125 range and access to her cougar abilities.</p>'
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Human Form:</span> Nidalee transforms into a human, gaining ranged attacks with 525 range and access to her human abilities. While in this form, applying a Hunted mark will reset Aspect of the Cougar\'s cooldown.</p>'
    },
    {
      description: 'Nidalee begins with one rank in Aspect of the Cougar and can increase it at levels 6, 11, and 16. Cougar Form\'s abilities scale based on Aspect of the Cougar\'s rank.'
    }
  ]
}
export default ability
