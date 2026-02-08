// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'R',
  name: 'Evolved Adaptive Cloaking',
  affects: 'Self',
  blurb: 'Evolved Bonus: The  invisibility is extended, and Void Assault can be cast up to 3 times.',
  cooldown: '100 / 85 / 70',
  cost: '100',
  icon: 'https://cdn.communitydragon.org/latest/champion/Khazix/ability-icon/r',
  notes: 'No additional details.',
  targeting: 'Auto',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Evolved Bonus:</span> The invisibility now lasts 2 seconds, and Void Assault can be recast twice.</p>'
    }
  ]
}
export default ability
