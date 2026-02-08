// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'Q',
  name: 'Boulder Toss',
  width: '180',
  affects: 'Enemies',
  blurb: 'Active:  Mega Gnar throws a boulder in the target direction that stops upon the first enemy hit, dealing physical damage to nearby enemies  slowing them.',
  castTime: '0.5',
  cooldown: '16 / 14.5 / 13 / 11.5 / 10',
  cost: '0',
  damageType: 'Physical damage',
  effectRadius: '250',
  icon: 'https://cdn.communitydragon.org/latest/champion/Gnar/ability-icon/q',
  notes: 'Since the cooldown between the two is shared Mini Gnar may pick up a boulder and/or Mega Gnar may catch a boomerang.\nThe  Boulder will still drop to the ground if colliding with  Wind Wall or  Unbreakable.\nThis ability will cast from wherever the caster is at the start of the cast time.',
  projectile: 'TRUE',
  speed: '2100',
  spellEffects: 'Area of effect',
  spellshieldable: 'True',
  targeting: 'Direction',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Gnar throws a boulder in the target direction that stops upon hitting an enemy, dealing physical damage to nearby enemies upon impact and slowing them for 2 seconds. The boulder then remains on the ground for 6 seconds.</p>',
      leveling: [
        {
          attribute: 'Physical Damage',
          modifiers: [
            {
              values: '45 / 90 / 135 / 180 / 225'
            },
            {
              unit: '% AD',
              values: '140'
            }
          ]
        },
        {
          attribute: 'Slow',
          modifiers: [
            {
              unit: '%',
              values: '30 / 35 / 40 / 45 / 50'
            }
          ]
        }
      ]
    },
    {
      description: 'After 0.3 seconds, Gnar can pick up the boulder by moving within 90 units of it, refunding 70% of the ability\'s total cooldown.'
    }
  ]
}
export default ability
