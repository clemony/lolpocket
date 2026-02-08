// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'R',
  name: 'Wash Brush',
  affects: 'Self',
  blurb: 'Active:  Hwei exits his current mood without incurring its ability cost or cooldown.',
  castTime: 'none',
  cooldown: '140 / 115 / 80',
  cost: '100',
  icon: 'https://cdn.communitydragon.org/latest/champion/Hwei/ability-icon/r',
  notes: 'Toggled abilities do not count as ability activations for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse\'s passive.',
  targeting: 'Auto',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Toggle - QR, WR, ER:</span> Hwei exits his current mood without incurring its ability cost or cooldown, toggling it off.</p>'
    },
    {
      description: 'Wash Brush can only be cast if Hwei has entered a mood, and can be used while affected by cast-inhibiting crowd control.'
    }
  ]
}
export default ability
