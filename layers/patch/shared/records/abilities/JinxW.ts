// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'W',
  name: 'Zap!',
  width: '120',
  affects: 'Enemies',
  blurb: 'Active:  Jinx fires a shock bolt in the target direction that deals physical damage to the first enemy hit,  slowing and  revealing them for a short time.',
  castTime: '0.6 : 0.4 (based on bonus attack speed)',
  cooldown: '8 / 7 / 6 / 5 / 4',
  cost: '40 / 45 / 50 / 55 / 60',
  damageType: 'Physical damage',
  icon: 'https://cdn.communitydragon.org/latest/champion/Jinx/ability-icon/w',
  notes: 'This ability will cast from wherever the caster is at the start of the cast time.',
  projectile: 'TRUE',
  resource: 'Mana',
  speed: '3300',
  spellEffects: 'Single target',
  spellshieldable: 'True',
  targeting: 'Direction',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Jinx fires a shock blast in the target direction that deals physical damage to the first enemy it hits and reveals and slows them for 2 seconds.</p>',
      leveling: [
        {
          attribute: 'Physical Damage',
          modifiers: [
            {
              values: '10 / 60 / 110 / 160 / 210'
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
              values: '40 / 50 / 60 / 70 / 80'
            }
          ]
        }
      ]
    }
  ]
}
export default ability
