// Updated Patch 16.1 - 01/29/2026 04:27:02 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'E',
  name: 'Slice and Dice',
  affects: 'Enemies',
  blurb: 'Active - Slice:  Renekton  dashes in the target direction, dealing physical damage to enemies he passes through.',
  castTime: 'none',
  cooldown: '16 / 14.5 / 13 / 11.5 / 10',
  cost: '0',
  damageType: 'Physical damage',
  icon: 'https://cdn.communitydragon.org/latest/champion/Renekton/ability-icon/e',
  notes: 'No additional details.',
  speed: '760 + 100% movement speed',
  spellEffects: 'spellaoe',
  spellshieldable: 'True',
  targeting: 'Direction',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active - Slice:</span> Renekton dashes a fixed distance in the target direction, dealing physical damage to enemies he passes through.</p>',
      leveling: [
        {
          attribute: 'Physical Damage',
          modifiers: [
            {
              values: '40 / 70 / 100 / 130 / 160'
            },
            {
              unit: '% bonus AD',
              values: '90'
            }
          ]
        }
      ]
    },
    {
      description: 'If Renekton hits an enemy, he can recast Slice and Dice within the next 4 seconds.'
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Recast - Dice:</span> Renekton repeats the first cast\'s effects.</p>',
      leveling: [
        {
          attribute: 'Total Physical Damage',
          modifiers: [
            {
              values: '80 / 140 / 200 / 260 / 320'
            },
            {
              unit: '% bonus AD',
              values: '180'
            }
          ]
        }
      ]
    },
    {
      description: 'Both casts generate 2 Fury for each non-champion hit and 10 Fury for each champion hit, up to 30 total per cast.'
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Reign of Anger Bonus:</span> Dice, the recast, deals bonus physical damage and inflicts armor reduction to enemies hit for 4 seconds.</p>',
      leveling: [
        {
          attribute: 'Enhanced Physical Damage',
          modifiers: [
            {
              values: '70 / 115 / 160 / 205 / 250'
            },
            {
              unit: '% bonus AD',
              values: '135'
            }
          ]
        },
        {
          attribute: 'Total Enhanced Damage',
          modifiers: [
            {
              values: '110 / 185 / 260 / 335 / 410'
            },
            {
              unit: '% bonus AD',
              values: '225'
            }
          ]
        },
        {
          attribute: 'Armor Reduction',
          modifiers: [
            {
              unit: '%',
              values: '25 / 27.5 / 30 / 32.5 / 35'
            }
          ]
        }
      ]
    }
  ]
}
export default ability
