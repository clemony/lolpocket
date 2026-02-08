// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'E',
  name: 'Evolved Wings',
  affects: 'Enemies',
  blurb: 'Evolved Bonus: Leap has increased range, and the cooldown  resets upon scoring a champion  takedown.',
  cooldown: '20 / 18 / 16 / 14 / 12',
  cost: '50',
  damageType: 'Physical damage',
  icon: 'https://cdn.communitydragon.org/latest/champion/Khazix/ability-icon/e',
  notes: 'Kha\'Zix can use his summoner spells and item actives while  leaping.\nBuffering Interactions\n\n Taste Their Fear can be buffered to cast after the  leap ends if it is cast while the target is out of range. There is no check for the target coming in range during the  leap.\nIf the target is still out of range after landing, there will be a 0.5 second delay  before Kha\'Zix starts moving towards the target compared to manually casting  Taste Their Fear after landing.\n Void Spike &  Void Assault can be buffered to cast after the  leap ends.',
  spellEffects: 'aoe',
  spellshieldable: 'True',
  targeting: 'Location',
  targetRange: '900',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Evolved Bonus:</span> Leap gains 200 bonus cast range, and the cooldown resets upon scoring a champion takedown.</p>'
    }
  ]
}
export default ability
