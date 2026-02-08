// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'P',
  name: 'Void Stone',
  affects: 'Self',
  blurb: 'Innate:  Kassadin is permanently  ghosted and takes reduced  magic damage.',
  icon: 'https://cdn.communitydragon.org/latest/champion/Kassadin/ability-icon/p',
  notes: 'No additional details.',
  targeting: 'Passive',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Kassadin is permanently ghosted and takes 10% reduced magic damage.</p>'
    }
  ]
}
export default ability
