// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'W',
  name: 'Iron Will',
  affects: 'Self',
  blurb: 'Active:  Lee Sin gains  life steal and  spell vamp for a few seconds.',
  castTime: 'none',
  cooldown: '12',
  cost: '50',
  icon: 'https://cdn.communitydragon.org/latest/champion/LeeSin/ability-icon/w',
  notes: 'No additional details.',
  resource: 'Energy',
  targeting: 'Auto',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Lee Sin gains life steal and spell vamp for 4 seconds.</p>',
      leveling: [
        {
          attribute: 'Life steal and spell vamp',
          modifiers: [
            {
              unit: '%',
              values: '10 / 14 / 18 / 22 / 26'
            }
          ]
        }
      ]
    }
  ]
}
export default ability
