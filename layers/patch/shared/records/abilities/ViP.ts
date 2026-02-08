// Updated Patch 16.1 - 01/29/2026 04:27:14 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'P',
  name: 'Blast Shield',
  affects: 'Self',
  blurb: 'Innate: Periodically,  Vi\'s next ability hit will generate a  shield by a portion of her maximum health for a short time.',
  icon: 'https://cdn.communitydragon.org/latest/champion/Vi/ability-icon/p',
  notes: 'Denting Blows will not activate Blast Shield.',
  targeting: 'Passive',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Periodically, Vi\'s next ability hit grants her a shield equal to 12% of her maximum health for 3 seconds.</p>'
    },
    {
      description: 'Blast Shield\'s cooldown is reduced by 4 seconds each time Denting Blows is consumed.'
    }
  ]
}
export default ability
