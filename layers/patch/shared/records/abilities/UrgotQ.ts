// Updated Patch 16.1 - 01/29/2026 04:27:14 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'Q',
  name: 'Corrosive Charge',
  affects: 'Enemies',
  blurb: 'Active:  Urgot launches a canister at the target location that explodes after a brief delay, dealing physical damage and briefly  slowing enemies hit.',
  castTime: '0.25',
  cooldown: '10 / 9.5 / 9 / 8.5 / 8',
  cost: '70',
  damageType: 'Physical damage',
  effectRadius: '210',
  icon: 'https://cdn.communitydragon.org/latest/champion/Urgot/ability-icon/q',
  notes: 'Corrosive Charge prevents  Purge from firing for 0.05 seconds after the cast time.',
  projectile: 'TRUE',
  resource: 'Mana',
  spellEffects: 'Area of Effect',
  spellshieldable: 'True',
  targeting: 'Location',
  targetRange: '800',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Urgot launches a canister at the target location. Upon landing, it explodes after 0.3 seconds to deal physical damage to enemies hit and slow them for 1.25 seconds.</p>',
      leveling: [
        {
          attribute: 'Physical Damage',
          modifiers: [
            {
              values: '25 / 70 / 115 / 160 / 205'
            },
            {
              unit: '% AD',
              values: '70'
            }
          ]
        },
        {
          attribute: 'Slow',
          modifiers: [
            {
              unit: '%',
              values: '45 / 50 / 55 / 60 / 65'
            }
          ]
        }
      ]
    }
  ]
}
export default ability
