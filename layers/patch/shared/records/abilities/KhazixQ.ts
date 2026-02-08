// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'Q',
  name: 'Evolved Reaper Claws',
  affects: 'Enemies',
  blurb: 'Passive: Kha\'Zix gains  bonus range on his basic attacks and Taste Their Fear.',
  cooldown: '4',
  cost: '20',
  damageType: 'Physical damage',
  icon: 'https://cdn.communitydragon.org/latest/champion/Khazix/ability-icon/q',
  notes: 'No additional details.',
  spellEffects: 'Single target',
  spellshieldable: 'True',
  targeting: 'Unit',
  targetRange: '375',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Passive:</span> Kha\'Zix gains 50 bonus range on his basic attacks and Taste Their Fear. Evolved Bonus: If the target is Isolated, the cooldown is reduced by 45%.</p>'
    }
  ]
}
export default ability
