// Updated Patch 16.1 - 01/29/2026 04:27:09 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'W',
  name: 'Achooo!',
  width: '115',
  affects: 'Enemies',
  blurb: 'Active:  Smolder sneezes forth a glob that deals physical damage to enemies hit and  slows them. Hitting an enemy  champion creates an explosion that deals physical damage to nearby enemies.',
  castTime: '0.35',
  cooldown: '14 / 13 / 12 / 11 / 10',
  cost: '50 / 55 / 60 / 65 / 70',
  damageType: 'Physical damage',
  effectRadius: '385',
  icon: 'https://cdn.communitydragon.org/latest/champion/Smolder/ability-icon/w',
  notes: 'Smolder can\'t declare basic attacks for a brief moment after the cast time.\n Spell shield can block either the glob or the explosion, but not both.',
  projectile: 'TRUE',
  resource: 'Mana',
  speed: '2000 / 400',
  spellEffects: 'spellaoe',
  spellshieldable: 'special',
  targeting: 'Direction',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Smolder sneezes a fiery glob in the target direction that deals physical damage to enemies hit and slows them by 35% for 1.5 seconds, slowing down in missile speed after travelling 1200 units. Hitting an enemy champion creates an explosion that deals physical damage to nearby enemies, with subsequent explosions against the same target dealing 75% damage of the previous explosion\'s damage.</p>',
      leveling: [
        {
          attribute: 'Glob Physical Damage',
          modifiers: [
            {
              values: '60 / 70 / 80 / 90 / 100'
            },
            {
              unit: '% bonus AD',
              values: '60'
            }
          ]
        },
        {
          attribute: 'Explosion Physical Damage',
          modifiers: [
            {
              values: '10 / 35 / 60 / 85 / 110'
            },
            {
              unit: '% bonus AD',
              values: '65'
            },
            {
              unit: '% AP',
              values: '80'
            }
          ]
        },
        {
          attribute: 'Total Physical Damage On Champion Hit',
          modifiers: [
            {
              values: '70 / 105 / 140 / 175 / 210'
            },
            {
              unit: '% bonus AD',
              values: '125'
            },
            {
              unit: '% AP',
              values: '80'
            }
          ]
        }
      ]
    }
  ]
}
export default ability
