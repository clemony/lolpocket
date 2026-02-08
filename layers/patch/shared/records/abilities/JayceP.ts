// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'P',
  name: 'Hextech Capacitor 2',
  affects: 'Self',
  blurb: 'Innate: Whenever  Jayce switches between  Hammer Stance and  Cannon Stance, he briefly gains  bonus movement speed and  ignores unit collision.',
  icon: 'https://cdn.communitydragon.org/latest/champion/Jayce/ability-icon/p',
  notes: 'No additional details.',
  targeting: 'Passive',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Whenever Jayce switches between either Hammer Stance or Cannon Stance, he gains ghosting and 40 bonus movement speed for 0.75 seconds.</p>'
    }
  ]
}
export default ability
