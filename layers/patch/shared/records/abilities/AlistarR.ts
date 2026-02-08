// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'R',
  name: 'Unbreakable Will',
  affects: 'Self',
  blurb: 'Active:  Alistar lets out a wild roar,  cleansing all  crowd control effects and gaining damage reduction for a few seconds.',
  castTime: '0.25',
  cooldown: '120 / 100 / 80',
  cost: '100',
  icon: 'https://cdn.communitydragon.org/latest/champion/Alistar/ability-icon/r',
  notes: 'True damage cannot be reduced by any means and will deal full damage to Alistar during Unbreakable Will.\nUnbreakable Will\'s modifier to incoming damage stacks additively with  Vladimir\'s  Hemoplague for a total reduction of 45/55/65%.(note)',
  resource: 'Mana',
  targeting: 'Auto',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Alistar cleanses himself of all crowd control. For the next 7 seconds, he reduces incoming damage taken.</p>',
      leveling: [
        {
          attribute: 'Damage Reduction',
          modifiers: [
            {
              unit: '%',
              values: '55 / 65 / 75'
            }
          ]
        }
      ]
    }
  ]
}
export default ability
