// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'W',
  name: 'Pillar of Flame',
  affects: 'Enemies',
  blurb: 'Active: After a brief delay,  Brand erupts a pillar of flame at the target location that deals magic damage to enemies hit.',
  castTime: '0.25',
  cooldown: '10 / 9.5 / 9 / 8.5 / 8',
  cost: '60 / 70 / 80 / 90 / 100',
  damageType: 'Magic damage',
  effectRadius: '260',
  icon: 'https://cdn.communitydragon.org/latest/champion/Brand/ability-icon/w',
  notes: 'The delay before the eruption does not include the cast time. The delay would be a total of 0.891 seconds if it included the cast time.',
  resource: 'Mana',
  spellEffects: 'spellaoe',
  spellshieldable: 'True',
  targeting: 'Location',
  targetRange: '900',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> After a 0.627 seconds delay, Brand erupts a pillar of flame at the target location that deals magic damage to enemies hit.</p>',
      leveling: [
        {
          attribute: 'Magic Damage',
          modifiers: [
            {
              values: '75 / 120 / 165 / 210 / 255'
            },
            {
              unit: '% AP',
              values: '70'
            }
          ]
        }
      ]
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Ablaze Bonus:</span> The target takes 25% increased damage.</p>',
      leveling: [
        {
          attribute: 'Increased Damage',
          modifiers: [
            {
              values: '93.75 / 150 / 206.25 / 262.5 / 318.75'
            },
            {
              unit: '% AP',
              values: '87.5'
            }
          ]
        }
      ]
    }
  ]
}
export default ability
