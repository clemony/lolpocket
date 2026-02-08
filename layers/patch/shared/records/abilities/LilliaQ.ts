// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'Q',
  name: 'Blooming Blows',
  affects: 'Self, Enemies',
  blurb: 'Passive: Whenever  Lillia\'s  abilities hit at least one enemy, she generates a  stack of Prance, up to a cap.',
  castTime: '0.25',
  cooldown: '6 / 5.5 / 5 / 4.5 / 4',
  cost: '65',
  damageType: 'Other damage',
  effectRadius: '225 / 485',
  icon: 'https://cdn.communitydragon.org/latest/champion/Lillia/ability-icon/q',
  notes: 'Spell shield will not prevent Lillia from gaining a Prance stack.\nFor the purpose of aim-assist, Lillia\'s  attack range is reduced[ to 275 ][ by 50 ]during Blooming Blows\'s cast time.',
  resource: 'Mana',
  spellEffects: 'aoe',
  spellshieldable: 'true',
  targeting: 'Auto',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Passive:</span> Whenever Lillia\'s abilities hit at least one enemy, she generates a stack of Prance for 6.5 seconds, refreshing on subsequent hits and stacking up to 4 times. Stacks expire one by one every 1.5 seconds when the duration ends.</p>'
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Prance:</span> For each stack, Lillia gains bonus movement speed.</p>',
      leveling: [
        {
          attribute: 'Bonus Movement Speed per Stack',
          modifiers: [
            {
              unit: '%',
              values: '3 / 4 / 5 / 6 / 7'
            },
            {
              unit: '% per 100 AP',
              values: '3'
            }
          ]
        },
        {
          attribute: 'Maximum Bonus Movement Speed',
          modifiers: [
            {
              unit: '%',
              values: '12 / 16 / 20 / 24 / 28'
            },
            {
              unit: '% per 100 AP',
              values: '12'
            }
          ]
        }
      ]
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Lillia swings her censer around her, dealing magic damage to nearby enemies. Enemies hit within the outer edge of the area additionally take the same amount as bonus true damage.</p>',
      leveling: [
        {
          attribute: 'Magic Damage',
          modifiers: [
            {
              values: '35 / 45 / 55 / 65 / 75'
            },
            {
              unit: '% AP',
              values: '35'
            }
          ]
        },
        {
          attribute: 'Total Mixed Damage',
          modifiers: [
            {
              values: '70 / 90 / 110 / 130 / 150'
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
      description: 'Lillia can move during Blooming Blows\' cast time.'
    }
  ]
}
export default ability
