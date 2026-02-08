// Updated Patch 16.1 - 01/29/2026 04:27:12 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'P',
  name: 'King\'s Tribute',
  affects: 'Self',
  blurb: 'Innate: Enemies that die near  Trundle cause him to  heal based on their maximum health.',
  effectRadius: '1400',
  icon: 'https://cdn.communitydragon.org/latest/champion/Trundle/ability-icon/p',
  notes: 'King\'s Tribute does not trigger when an enemy structure is destroyed.',
  targeting: 'Passive',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Whenever a nearby enemy dies, Trundle heals himself for 1.8% - 5.5% (based on level) of their maximum health.</p>'
    }
  ]
}
export default ability
