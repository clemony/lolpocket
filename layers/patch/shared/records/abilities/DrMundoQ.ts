// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'Q',
  name: 'Infected Bonesaw',
  width: '120',
  affects: 'Self, Enemies',
  blurb: 'Active:  Dr. Mundo throws an infected bonesaw in the target direction that deals magic damage and  slows the first enemy hit.',
  castTime: '0.25',
  cooldown: '4',
  cost: '0',
  damageType: 'Magic damage',
  icon: 'https://cdn.communitydragon.org/latest/champion/DrMundo/ability-icon/q',
  notes: 'This ability will cast from wherever the caster is at the start of the cast time.\n Spell shield blocking the ability\'s effects on the enemy does not prevent Dr. Mundo from receiving the health cost refund.',
  projectile: 'TRUE',
  resource: 'Health',
  speed: '2000',
  spellEffects: 'spell',
  spellshieldable: 'true',
  targeting: 'Direction',
  targetRange: '1050 /  990',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Dr. Mundo throws an infected bonesaw in the target direction that deals magic damage to the first enemy hit and slows them by 40% for 2 seconds.</p>',
      leveling: [
        {
          attribute: 'Magic Damage',
          modifiers: [
            {
              unit: '% of target\'s current health',
              values: '20 / 22.5 / 25 / 27.5 / 30'
            }
          ]
        }
      ]
    },
    {
      description: 'Infected Bonesaw has a minimum damage threshold, and is capped against monsters.',
      leveling: [
        {
          attribute: 'Minimum Damage',
          modifiers: [
            {
              values: '80 / 130 / 180 / 230 / 280'
            }
          ]
        },
        {
          attribute: 'Capped Monster Damage',
          modifiers: [
            {
              values: '300 / 375 / 450 / 525 / 600'
            }
          ]
        }
      ]
    },
    {
      description: 'If the bonesaw hits an enemy, Dr. Mundo heals for 50% of the health cost, increased to 100% against champions or monsters.'
    }
  ]
}
export default ability
