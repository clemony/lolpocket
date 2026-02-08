// Updated Patch 16.1 - 01/29/2026 04:27:08 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'P',
  name: 'Fury of the Dragonborn',
  affects: 'Self',
  blurb: 'Innate:  Shyvana gains  bonus armor and  bonus magic resist, which is permanently increased for every  elemental drake and  Elder Dragon her team slays.',
  icon: 'https://cdn.communitydragon.org/latest/champion/Shyvana/ability-icon/p',
  notes: 'Fury of the Dragonborn\'s increased damage modifier to  Dragons does not affect true damage.',
  targeting: 'Passive',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Shyvana gains 5 bonus armor and 5 bonus magic resistance, which are each increased by 5 for every elemental drake and Elder Dragon her team slays.</p>'
    },
    {
      description: 'Additionally, Shyvana deals 20% increased damage to Dragons.'
    }
  ]
}
export default ability
