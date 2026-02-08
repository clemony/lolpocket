// Updated Patch 16.1 - 01/29/2026 04:27:17 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'Q',
  name: 'Awakening',
  affects: 'Self',
  blurb: 'Active:  Yorick summons Mist Walkers from the graves around him.',
  castTime: 'none',
  cooldown: '6 / 5.5 / 5 / 4.5 / 4',
  cost: '20',
  icon: 'https://cdn.communitydragon.org/latest/champion/Yorick/ability-icon/q',
  notes: 'Awakening counts as an ability activation for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse\'s passive.\nMist Walkers update their statistics correspondingly to Yorick\'s  during the periodic stat update, with the exception of their maximum health.\nAwakening cannot be cast without enough graves in range.',
  targeting: 'Proximity',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Yorick exhumes a Mist Walker under his command from each nearby grave.</p>'
    }
  ]
}
export default ability
