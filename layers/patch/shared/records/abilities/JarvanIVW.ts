// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'W',
  name: 'Golden Aegis',
  affects: 'Self, Enemies',
  blurb: 'Active:  Jarvan IV  slows nearby enemies for a short time.',
  castTime: 'none',
  cooldown: '9',
  cost: '30',
  effectRadius: '600',
  icon: 'https://cdn.communitydragon.org/latest/champion/JarvanIV/ability-icon/w',
  notes: 'Golden Aegis  deals no damage and thus does not trigger  turret aggro, or effects such as  Elixir of Sorcery and  Sudden Impact\'s activation.\nGolden Aegis will activate combat status despite not dealing any damage.',
  resource: 'Mana',
  spellshieldable: 'True',
  targeting: 'Auto',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Jarvan IV slows all nearby enemies for 2 seconds.</p>',
      leveling: [
        {
          attribute: 'Slow',
          modifiers: [
            {
              unit: '%',
              values: '15 / 20 / 25 / 30 / 35'
            }
          ]
        }
      ]
    },
    {
      description: 'Jarvan IV also grants himself a shield for 4 seconds, increased by 1.3% of his maximum health for each enemy champion hit by Golden Aegis.',
      leveling: [
        {
          attribute: 'Shield Strength',
          modifiers: [
            {
              values: '60 / 80 / 100 / 120 / 140'
            },
            {
              unit: '% bonus AD',
              values: '70'
            }
          ]
        }
      ]
    }
  ]
}
export default ability
