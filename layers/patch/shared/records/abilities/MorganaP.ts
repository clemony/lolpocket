// Updated Patch 16.1 - 01/29/2026 04:26:56 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'P',
  name: 'Soul Siphon',
  affects: 'Self',
  blurb: 'Innate:  Morgana  heals herself for a portion of the damage dealt by her abilities against  champions, large  minions, and medium and large  monsters.',
  icon: 'https://cdn.communitydragon.org/latest/champion/Morgana/ability-icon/p',
  notes: 'No additional details.',
  targeting: 'Passive',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Morgana heals herself for 18% of the post-mitigation damage dealt by her abilities against champions, large minions, and medium and large monsters.</p>'
    }
  ]
}
export default ability
