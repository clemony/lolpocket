// Updated Patch 16.1 - 01/29/2026 04:27:15 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'W',
  name: 'Eye of Destruction',
  affects: 'Enemies',
  blurb: 'Active:  Xerath casts down a blast of energy that strikes the target location after a brief delay, dealing magic damage and  slowing enemies hit. The effects are increased against enemies in the epicenter.',
  castTime: '0.25',
  cooldown: '14 / 13 / 12 / 11 / 10',
  cost: '80 / 90 / 100 / 110 / 120',
  damageType: 'Magic damage',
  effectRadius: '275 / 125 / 250',
  icon: 'https://cdn.communitydragon.org/latest/champion/Xerath/ability-icon/w',
  notes: 'Xerath\'s location gets  revealed to the enemy (400 radius for 4.5 seconds) if Eye of Destruction\'s cast location is within 100 units of a valid enemy at the start of the cast time due to something related to targeting types.(bug)\nEye of Destruction\'s targeting indicator appears on the player\'s minimap, despite the ability not having the longer range of others with this quality.\nEye of Destruction will not fire and deal damage if Xerath dies during the 0.25s cast time.(note)',
  resource: 'Mana',
  spellEffects: 'Area of effect',
  spellshieldable: 'True',
  targeting: 'Location',
  targetRange: '1000',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Xerath casts down a blast of arcane energy that strikes the target location after 0.528 seconds, briefly granting sight of the area and dealing magic damage to enemies hit and slowing them by 25% for 2.5 seconds.</p>',
      leveling: [
        {
          attribute: 'Magic Damage',
          modifiers: [
            {
              values: '50 / 85 / 120 / 155 / 190'
            },
            {
              unit: '% AP',
              values: '65'
            }
          ]
        }
      ]
    },
    {
      description: 'Enemies in the epicenter take 66.7% increased damage and are slowed by a greater amount, decaying to 25% over the duration.',
      leveling: [
        {
          attribute: 'Increased Damage',
          modifiers: [
            {
              values: '83.35 / 141.7 / 200.04 / 258.39 / 316.73'
            },
            {
              unit: '% AP',
              values: '108.36'
            }
          ]
        },
        {
          attribute: 'Increased Slow',
          modifiers: [
            {
              unit: '%',
              values: '60 / 65 / 70 / 75 / 80'
            }
          ]
        }
      ]
    }
  ]
}
export default ability
