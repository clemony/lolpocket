// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'Q',
  name: 'Void Surge',
  affects: 'Self, Enemies',
  blurb: 'Active:  Bel\'Veth  dashes in the target direction, though not through terrain, dealing physical damage to enemies she passes through.',
  castTime: 'None',
  collisionRadius: '100',
  cooldown: '1',
  cost: '0',
  damageType: 'Physical damage',
  icon: 'https://cdn.communitydragon.org/latest/champion/Belveth/ability-icon/q',
  notes: 'Applies  area damage and procs  basic damage required effects.\nThe icon partially darkens based on the combination of dashes available. When all dashes are expended, the cooldown indicates the next available dash.\nWhile in  True Form, Void Surge\'s dash distance is extended up to 225 units when targeted across terrain.\nThe basic attack reset is not considered one for  Hail of Blades.\nVoid Surge can be  dodged and  blocked only as the first enemy hit.',
  speed: '800 / 850 / 900 / 950 / 1000 + 100% movement speed',
  spellEffects: 'Special',
  spellshieldable: 'true',
  targeting: 'Direction',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Bel\'Veth dashes in the designated direction, though not through terrain, dealing physical damage to enemies she passes through. Against the first target, Void Surge can critically strike for (175% + 30%) damage and applies on-hit effects, with on-hit damage reduced to 75% effectiveness, and life steal.</p>',
      leveling: [
        {
          attribute: 'Physical Damage',
          modifiers: [
            {
              values: '0 / 5 / 10 / 15 / 20'
            },
            {
              unit: '% AD',
              values: '100'
            }
          ]
        }
      ]
    },
    {
      description: 'Void Surge deals bonus physical damage to monsters and modified damage against minions.',
      leveling: [
        {
          attribute: 'Monster Bonus Physical Damage',
          modifiers: [
            {
              values: '55 / 65 / 75 / 85 / 95'
            }
          ]
        },
        {
          attribute: 'Total Monster Damage',
          modifiers: [
            {
              values: '55 / 70 / 85 / 100 / 115'
            },
            {
              unit: '% AD',
              values: '100'
            }
          ]
        },
        {
          attribute: 'Modified Minion Damage',
          modifiers: [
            {
              unit: '%',
              values: '60 / 70 / 80 / 90 / 100'
            }
          ]
        }
      ]
    },
    {
      description: 'Void Surge can be cast only within a cardinal direction that is off cooldown, and incurs a cooldown between casts. Each cardinal direction has a unique cooldown that is reduced equivalent to 0.25 ability haste per 1% bonus attack speed. These cooldowns reset upon respawning.'
    },
    {
      description: 'Void Surge resets Bel\'Veth\'s basic attack timer.'
    }
  ]
}
export default ability
