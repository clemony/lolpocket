// Updated Patch 16.1 - 01/29/2026 04:26:56 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'P',
  name: 'Soul Eater',
  affects: 'Self',
  blurb: 'Innate:  Nasus gains  life steal based on level.',
  icon: 'https://cdn.communitydragon.org/latest/champion/Nasus/ability-icon/p',
  notes: 'No additional details.',
  targeting: 'Passive',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Nasus gains 12% / 18% / 24% (based on level) life steal.</p>'
    }
  ]
}
export default ability
