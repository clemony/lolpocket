// Updated Patch 16.1 - 01/29/2026 04:26:54 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'E',
  name: 'Solar Snare',
  affects: 'Enemies',
  blurb: 'Active:  Mel fires an orb that deals magic damage to enemies hit and  roots them for a moment.',
  castTime: '0.25',
  cooldown: '12 / 11.5 / 11 / 10.5 / 10',
  cost: '50 / 60 / 70 / 80 / 90',
  damageType: 'Magic damage',
  effectRadius: '80 / 80 / 260 / 60',
  icon: 'https://cdn.communitydragon.org/latest/champion/Mel/ability-icon/e',
  notes: 'Spell shield will only block the orb ( root portion).\nSolar Snare\'s lollipop roots targets in its area without triggering spell shield.(bug)\nThe initial impact of Solar Snare deals  area damage, while the lingering damage over time deals  persistent area damage.\nThe slow debuff lasts for the same duration as its tick rate (0.125 seconds).\nThis ability will cast from wherever the caster is at the end of the cast time.',
  projectile: 'TRUE',
  resource: 'Mana',
  speed: '1000',
  spellEffects: 'special',
  spellshieldable: 'special',
  targeting: 'Direction',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Mel fires an orb in the target direction that grants sight of its surroundings every 0.25 seconds as it travels. Enemies hit by the orb are dealt magic damage and rooted for a duration.</p>',
      leveling: [
        {
          attribute: 'Orb Magic Damage',
          modifiers: [
            {
              values: '60 / 100 / 140 / 180 / 220'
            },
            {
              unit: '% AP',
              values: '60'
            }
          ]
        },
        {
          attribute: 'Orb Root Duration',
          modifiers: [
            {
              unit: ' seconds',
              values: '1.2 / 1.3 / 1.4 / 1.5 / 1.6'
            }
          ]
        }
      ]
    },
    {
      description: 'The orb emanates a field of solar radiation that additionally expands after a 0.5-second delay. Enemies within the field are dealt magic damage and slowed by 30% every 0.125 seconds, lingering for 0.5 seconds after exiting.',
      leveling: [
        {
          attribute: 'Field Magic Damage per Tick',
          modifiers: [
            {
              values: '2 / 3.5 / 5 / 6.5 / 8'
            },
            {
              unit: '% AP',
              values: '1'
            }
          ]
        },
        {
          attribute: 'Field Magic Damage per Second',
          modifiers: [
            {
              values: '16 / 28 / 40 / 52 / 64'
            },
            {
              unit: '% AP',
              values: '8'
            }
          ]
        }
      ]
    },
    {
      description: 'Both the orb and the field of Solar Snare deal 50% damage against minions.',
      leveling: [
        {
          attribute: 'Orb Minion Magic Damage',
          modifiers: [
            {
              values: '30 / 50 / 70 / 90 / 110'
            },
            {
              unit: '% AP',
              values: '30'
            }
          ]
        },
        {
          attribute: 'Field Minion Magic Damage per Tick',
          modifiers: [
            {
              values: '1 / 1.75 / 2.5 / 3.25 / 4'
            },
            {
              unit: '% AP',
              values: '0.5'
            }
          ]
        },
        {
          attribute: 'Field Magic Damage per Second',
          modifiers: [
            {
              values: '8 / 14 / 20 / 26 / 32'
            },
            {
              unit: '% AP',
              values: '4'
            }
          ]
        }
      ]
    }
  ]
}
export default ability
