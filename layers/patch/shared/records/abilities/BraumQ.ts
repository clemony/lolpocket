// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'Q',
  name: 'Winter\'s Bite',
  width: '120',
  affects: 'Enemies',
  blurb: 'Active:  Braum propels freezing ice from his shield,  slowing and dealing magic damage to the first enemy hit.',
  castTime: '0.25',
  cooldown: '8 / 7.5 / 7 / 6.5 / 6',
  cost: '45 / 50 / 55 / 60 / 65',
  damageType: 'Magic damage',
  icon: 'https://cdn.communitydragon.org/latest/champion/Braum/ability-icon/q',
  notes: 'This ability will cast from wherever the caster is at the end of the cast time.',
  projectile: 'TRUE',
  resource: 'Mana',
  speed: '1700',
  spellEffects: 'Single target',
  spellshieldable: 'True',
  targeting: 'Direction',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Braum propels ice from his shield in the target direction, dealing magic damage to the first enemy hit and slowing them by 70% decaying over 2 seconds.</p>',
      leveling: [
        {
          attribute: 'Magic Damage',
          modifiers: [
            {
              values: '75 / 125 / 175 / 225 / 275'
            },
            {
              unit: '% of Braum\'s maximum health',
              values: '2.5'
            }
          ]
        }
      ]
    }
  ]
}
export default ability
