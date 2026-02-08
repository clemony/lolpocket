// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'E',
  name: 'Dismounted Jousting',
  cooldown: '13 / 12 / 11 / 10 / 9',
  cost: '0',
  icon: 'https://cdn.communitydragon.org/latest/champion/Kled/ability-icon/e',
  notes: 'No additional details.',
  targeting: 'N/A',
  effects: [
    {
      description: 'This ability is unusable while dismounted.'
    }
  ]
}
export default ability
