// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'W',
  name: 'Wall of Pain',
  affects: 'Enemies',
  blurb: 'Active:  Karthus erects a wall of pain at the target location that lasts a few seconds, enemies that touch it suffer reduced  magic resistance and become  slowed for a few seconds.',
  castTime: '0.25',
  cooldown: '15',
  cost: '70',
  icon: 'https://cdn.communitydragon.org/latest/champion/Karthus/ability-icon/w',
  resource: 'Mana',
  spellshieldable: 'False',
  targeting: 'Location',
  targetRange: '1000',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Karthus erects a wall of pain at the target location perpendicular to his facing that lasts 5 seconds, granting sight around its pillars and center.</p>',
      leveling: [
        {
          attribute: 'Wall Length',
          modifiers: [
            {
              values: '800 / 900 / 1000 / 1100 / 1200'
            }
          ]
        }
      ]
    },
    {
      description: 'Enemies that touch the wall are inflicted with 25% magic resistance reduction and become slowed for 5 seconds, decaying over the duration. This can affect enemies only once per cast.',
      leveling: [
        {
          attribute: 'Slow',
          modifiers: [
            {
              unit: '%',
              values: '40 / 50 / 60 / 70 / 80'
            }
          ]
        },
        {
          attribute: 'Reduced Slow',
          modifiers: [
            {
              unit: '%',
              values: '20 / 25 / 30 / 35 / 40'
            }
          ]
        }
      ]
    }
  ]
}
export default ability
