// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'Q',
  name: 'Molten Fissure',
  width: '225',
  affects: 'Enemies',
  blurb: 'Active - QE:  Hwei marks a blazing path in a direction that erupts after a delay into explosions. Each explosion deals magic damage and leaves behind a volcanic fissure that continually deals magic damage and  slows enemies within.',
  castTime: '0.35',
  cooldown: '10 / 9 / 8 / 7 / 6',
  cost: '80 / 90 / 100 / 110 / 120',
  damageType: 'Magic damage',
  effectRadius: '225',
  icon: 'https://cdn.communitydragon.org/latest/champion/Hwei/ability-icon/q',
  notes: 'Applies  area damage for the explosions and deals  persistent area damage for the lava.\nThe shockwaves can only hit each enemy once.\nEnemies will take damage over time for each lava fissure they are standing in.\n Spell shield will block an explosion but not the persistent lava damage.\nThis ability will cast from wherever the caster is at the start of the cast time.',
  projectile: 'TRUE',
  spellEffects: 'special',
  spellshieldable: 'special',
  targeting: 'Direction',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active - QE:</span> Hwei marks a blazing path in the target direction. After 0.6 seconds, the path erupts into volcanic explosions every 0.2 seconds from the point of cast, for a total of 7 explosions. Each explosion creates a shockwave that deals magic damage to nearby enemies.</p>',
      leveling: [
        {
          attribute: 'Magic Damage',
          modifiers: [
            {
              values: '20 / 35 / 50 / 65 / 80'
            },
            {
              unit: '% AP',
              values: '30'
            }
          ]
        }
      ]
    },
    {
      description: 'Each explosion also leaves a lava fissure in its wake. A fissure lasts for 2.5 seconds, dealing magic damage every 0.25 seconds to enemies within the area and slowing them by 30%.',
      leveling: [
        {
          attribute: 'Magic Damage per Tick',
          modifiers: [
            {
              values: '5 / 8.75 / 12.5 / 16.25 / 20'
            },
            {
              unit: '% AP',
              values: '6'
            }
          ]
        },
        {
          attribute: 'Total Fissure Magic Damage',
          modifiers: [
            {
              values: '50 / 87.5 / 125 / 162.5 / 200'
            },
            {
              unit: '% AP',
              values: '60'
            }
          ]
        },
        {
          attribute: 'Total Magic Damage',
          modifiers: [
            {
              values: '70 / 122.5 / 175 / 227.5 / 280'
            },
            {
              unit: '% AP',
              values: '90'
            }
          ]
        }
      ]
    },
    {
      description: 'Molten Fissure\'s damage is reduced to 60% against minions and increased to 135% against monsters.'
    }
  ]
}
export default ability
