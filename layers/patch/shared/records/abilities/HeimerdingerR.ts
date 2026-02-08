// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'R',
  name: 'UPGRADE!!!',
  affects: 'Self',
  blurb: 'Active:  Heimerdinger can empower his next ability to apply an additional effect. These empowered abilities have the same  cooldowns as their basic forms, deal modified damage, and do not cost mana.',
  castTime: 'none',
  cooldown: '100 / 85 / 70',
  cost: '100',
  icon: 'https://cdn.communitydragon.org/latest/champion/Heimerdinger/ability-icon/r',
  notes: 'Toggle abilities do not count as ability activations for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse\'s passive.\nConsuming the buff for an empowered basic ability does.\nNo compensations for  mana are made if UPGRADE!!! is recast.',
  resource: 'Mana',
  targeting: 'Auto',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Heimerdinger empowers his next basic ability for an additional effect, consuming the empowerment upon cast and placing UPGRADE!!! on full cooldown. These empowered abilities have the same cooldowns as their basic forms, deal modified damage, and do not have a mana cost. UPGRADE!!! can be recast after 3 seconds while the empowerment is available.</p>'
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Recast:</span> Heimerdinger ends UPGRADE!!! and puts it on a 3-second cooldown.</p>'
    },
    {
      description: 'UPGRADE!!! can be used while affected by cast-inhibiting crowd control.'
    }
  ]
}
export default ability
