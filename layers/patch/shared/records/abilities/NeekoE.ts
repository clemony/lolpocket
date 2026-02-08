// Updated Patch 16.1 - 01/29/2026 04:26:56 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'E',
  name: 'Tangle-Barbs',
  width: '140 / 200',
  affects: 'Enemies',
  blurb: 'Active:  Neeko slings a magical spiral in the target direction that deals magic damage and  roots enemies hit.',
  castTime: '0.25',
  cooldown: '12 / 11.5 / 11 / 10.5 / 10',
  cost: '60 / 65 / 70 / 75 / 80',
  damageType: 'Magic damage',
  icon: 'https://cdn.communitydragon.org/latest/champion/Neeko/ability-icon/e',
  notes: 'This ability will cast from wherever the caster is at the end of the cast time.',
  projectile: 'TRUE',
  resource: 'Mana',
  speed: '1300 / 1500',
  spellEffects: 'AoE',
  spellshieldable: 'True',
  targeting: 'Direction',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Neeko slings a magical spiral in the target direction that deals magic damage to enemies hit and roots them for a duration.</p>',
      leveling: [
        {
          attribute: 'Magic Damage',
          modifiers: [
            {
              values: '70 / 105 / 140 / 175 / 210'
            },
            {
              unit: '% AP',
              values: '65'
            }
          ]
        },
        {
          attribute: 'Root Duration',
          modifiers: [
            {
              unit: ' seconds',
              values: '0.7 / 0.9 / 1.1 / 1.3 / 1.5'
            }
          ]
        }
      ]
    },
    {
      description: 'If the spiral hits at least one enemy, it grows in size and its speed and root duration is increased.',
      leveling: [
        {
          attribute: 'Empowered Root Duration',
          modifiers: [
            {
              unit: ' seconds',
              values: '1.8 / 2.1 / 2.4 / 2.7 / 3'
            }
          ]
        }
      ]
    }
  ]
}
export default ability
