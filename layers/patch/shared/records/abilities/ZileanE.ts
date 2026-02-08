// Updated Patch 16.1 - 01/29/2026 04:27:18 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'E',
  name: 'Time Warp',
  affects: 'Enemies, Allies',
  blurb: 'Active:  Zilean applies Time Warp to the target champion that lasts for a short time.',
  castTime: 'none',
  cooldown: '15',
  cost: '50',
  icon: 'https://cdn.communitydragon.org/latest/champion/Zilean/ability-icon/e',
  notes: 'No additional notes.',
  projectile: 'FALSE',
  resource: 'Mana',
  spellshieldable: 'True',
  targeting: 'Unit',
  targetRange: '550',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Zilean applies Time Warp to the target champion which lasts for 2.5 seconds.</p>'
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Time Warp:</span> If the target is an ally, they gain bonus movement speed. If the target is an enemy, they are slowed.</p>',
      leveling: [
        {
          attribute: 'Movement Speed Modifier',
          modifiers: [
            {
              unit: '%',
              values: '40 / 55 / 70 / 85 / 99'
            }
          ]
        }
      ]
    }
  ]
}
export default ability
