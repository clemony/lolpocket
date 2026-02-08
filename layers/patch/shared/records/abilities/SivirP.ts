// Updated Patch 16.1 - 01/29/2026 04:27:09 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'P',
  name: 'Fleet of Foot',
  affects: 'Self',
  blurb: 'Innate:  Sivir\'s basic attacks and damaging abilities against enemy  champions briefly grant her a burst of  move speed.',
  icon: 'https://cdn.communitydragon.org/latest/champion/Sivir/ability-icon/p',
  notes: 'No additional details.',
  targeting: 'Passive',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Sivir\'s basic attacks and ability hits against enemy champions grant her 55 - 75 (based on level) bonus movement speed decaying over 1.5 seconds, refreshing on subsequent hits.</p>'
    }
  ]
}
export default ability
