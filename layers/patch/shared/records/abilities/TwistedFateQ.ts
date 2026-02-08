// Updated Patch 16.1 - 01/29/2026 04:27:13 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'Q',
  name: 'Wild Cards',
  width: '80',
  affects: 'Enemies',
  angle: '56°',
  blurb: 'Active:  Twisted Fate throws a fan of three cards in the target direction that each deal magic damage to enemies hit.',
  castTime: '0.25',
  cooldown: '6 / 5.75 / 5.5 / 5.25 / 5',
  cost: '60 / 70 / 80 / 90 / 100',
  damageType: 'Magic damage',
  icon: 'https://cdn.communitydragon.org/latest/champion/TwistedFate/ability-icon/q',
  notes: 'This ability will cast from wherever the caster is at the end of the cast time.',
  projectile: 'TRUE',
  resource: 'Mana',
  speed: '1000',
  spellEffects: 'Area of effect',
  spellshieldable: 'True',
  targeting: 'Direction',
  targetRange: '1450',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Twisted Fate throws a fan of three cards in a cone in the target direction that each deal magic damage to enemies hit.</p>',
      leveling: [
        {
          attribute: 'Magic Damage',
          modifiers: [
            {
              values: '60 / 105 / 150 / 195 / 240'
            },
            {
              unit: '% bonus AD',
              values: '50'
            },
            {
              unit: '% AP',
              values: '85'
            }
          ]
        }
      ]
    },
    {
      description: 'Enemies can be damaged only once per pass.'
    }
  ]
}
export default ability
