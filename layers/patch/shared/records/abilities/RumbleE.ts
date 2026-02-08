// Updated Patch 16.1 - 01/29/2026 04:27:04 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'E',
  name: 'Electro Harpoon',
  width: '120',
  affects: 'Enemies',
  blurb: 'Active:  Rumble shoots a harpoon in the target direction that deals magic damage and briefly  slows the first enemy hit, reducing their  magic resist for a few seconds. These effects can stack with multiple harpoons.',
  castTime: '0.25',
  cooldown: '0.5',
  cost: '0',
  damageType: 'Magic damage',
  icon: 'https://cdn.communitydragon.org/latest/champion/Rumble/ability-icon/e',
  notes: 'If Electro Harpoon is empowered with  Danger Zone\'s bonus and hits a target that is afflicted with the non-enhanced slow and shred applied by previous, non-empowered Electro Harpoon casts, the effectiveness of both debuffs on the target are increased to their enhanced values for all stacks of each debuff.\nThis also applies vice versa; a non-empowered Electro Harpoon cast will reduce the enhanced slow and shred applied by previous, empowered Electro Harpoon casts back to the non-enhanced values, for all stacks.\nA buff with the magic resistance reduction tooltip is applied to  minions and  pets, but their magic resistance is unaffected by Electro Harpoon.(bug)\nEach Electro Harpoon cast triggers  Spellblade and reduces  Force Pulse\'s cooldown.\nElectro Harpoon\'s missile will fail to fire if Rumble is  suppressed during the cast time.(note)\nThis ability will cast from wherever the caster is at the end of the cast time.\nRumble stocks an Electro Harpoon charge before the ability is even learned.',
  projectile: 'TRUE',
  rechargeRate: '6 / 6 / 6 / 6 / 6',
  speed: '2000',
  spellEffects: 'spell',
  spellshieldable: 'True',
  targeting: 'Direction',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Rumble generates 20 Heat to shoot a harpoon in the target direction that deals magic damage to the first enemy hit, inflicting them with magic resistance reduction for 4 seconds and slowing them for 2 seconds. These effects stack additively with multiple harpoons, refreshing their duration and stacking up to 2 times.</p>',
      leveling: [
        {
          attribute: 'Magic Damage',
          modifiers: [
            {
              values: '55 / 80 / 105 / 130 / 155'
            },
            {
              unit: '% AP',
              values: '50'
            }
          ]
        },
        {
          attribute: 'Total Magic Damage',
          modifiers: [
            {
              values: '110 / 160 / 210 / 260 / 310'
            },
            {
              unit: '% AP',
              values: '100'
            }
          ]
        },
        {
          attribute: 'Magic Resistance Reduction',
          modifiers: [
            {
              unit: '%',
              values: '10 / 12 / 14 / 16 / 18'
            }
          ]
        },
        {
          attribute: 'Total MR Reduction',
          modifiers: [
            {
              unit: '%',
              values: '20 / 24 / 28 / 32 / 36'
            }
          ]
        },
        {
          attribute: 'Slow',
          modifiers: [
            {
              unit: '%',
              values: '15 / 20 / 25 / 30 / 35'
            }
          ]
        },
        {
          attribute: 'Total Slow',
          modifiers: [
            {
              unit: '%',
              values: '30 / 40 / 50 / 60 / 70'
            }
          ]
        }
      ]
    },
    {
      description: 'Rumble periodically stocks an Electro Harpoon charge, up to a maximum of 2.'
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Danger Zone Bonus:</span> Electro Harpoon\'s effects are increased by 50%.</p>',
      leveling: [
        {
          attribute: 'Enhanced Damage',
          modifiers: [
            {
              values: '82.5 / 120 / 157.5 / 195 / 232.5'
            },
            {
              unit: '% AP',
              values: '75'
            }
          ]
        },
        {
          attribute: 'Total Enhanced Damage',
          modifiers: [
            {
              values: '165 / 240 / 315 / 390 / 465'
            },
            {
              unit: '% AP',
              values: '150'
            }
          ]
        },
        {
          attribute: 'Enhanced Magic Resistance Reduction',
          modifiers: [
            {
              unit: '%',
              values: '15 / 18 / 21 / 24 / 27'
            }
          ]
        },
        {
          attribute: 'Total Enhanced MR Reduction',
          modifiers: [
            {
              unit: '%',
              values: '30 / 36 / 42 / 48 / 54'
            }
          ]
        },
        {
          attribute: 'Enhanced Slow',
          modifiers: [
            {
              unit: '%',
              values: '22.5 / 30 / 37.5 / 45 / 52.5'
            }
          ]
        },
        {
          attribute: 'Total Enhanced Slow',
          modifiers: [
            {
              unit: '%',
              values: '45 / 60 / 75 / 90 / 105'
            }
          ]
        }
      ]
    },
    {
      description: 'If Rumble casts Electro Harpoon before his mech becomes Overheated, he may still use another charge within 3 seconds of the initial cast.'
    }
  ]
}
export default ability
