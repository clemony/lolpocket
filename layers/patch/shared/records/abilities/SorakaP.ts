// Updated Patch 16.1 - 01/29/2026 04:27:09 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'P',
  name: 'Salvation',
  affects: 'Self',
  blurb: 'Innate:  Soraka gains tremendous  bonus movement speed while facing nearby allied  champions that are at low health.',
  effectRadius: '2500',
  icon: 'https://cdn.communitydragon.org/latest/champion/Soraka/ability-icon/p',
  notes: 'Soraka will see an arrow indicating the direction in which she can gain the bonus movement speed.',
  targeting: 'Passive',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Soraka gains 90% bonus movement speed while facing nearby allied champions that are below 40% of their maximum health.</p>'
    }
  ]
}
export default ability
