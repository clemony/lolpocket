// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'Q',
  name: 'Avengerang',
  width: '120',
  affects: 'Self, Enemies',
  blurb: 'Active:  Akshan throws a boomerang that deals physical damage to enemies hit, extending the boomerang range and briefly  revealing them. If this hits an enemy  champion, Akshan gains a brief burst of  move speed.',
  castTime: '0.25',
  cooldown: '9 / 8 / 7 / 6 / 5',
  cost: '60 / 65 / 70 / 75 / 80',
  damageType: 'Physical damage',
  effectRadius: '400',
  icon: 'https://cdn.communitydragon.org/latest/champion/Akshan/ability-icon/q',
  notes: 'Spell shield will only block a single hit. They do not prevent the initial throw from extending its range.\nThis ability will cast from wherever the caster is at the end of the cast time.\nThis ability\'s damage is calculated based on the caster\'s current stats and changes dynamically.',
  projectile: 'TRUE',
  resource: 'Mana',
  speed: '1500 / 2400',
  spellEffects: 'spellaoe',
  spellshieldable: 'special',
  targeting: 'Direction',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Akshan throws a boomerang in the target direction that briefly grants sight around its trajectory and deals physical damage to enemies hit, revealing them for 1 second and extending its range each time it hits a target. If this hits an enemy champion, Akshan gains 20% (+ 5% per 100 AP) bonus movement speed that decays over 1 second.</p>',
      leveling: [
        {
          attribute: 'Physical Damage',
          modifiers: [
            {
              values: '5 / 25 / 45 / 65 / 85'
            },
            {
              unit: '% AD',
              values: '80'
            }
          ]
        }
      ]
    },
    {
      description: 'Once the boomerang has passed its original range and has not hit a target in the last 500 units of travelling, it homes back to Akshan and applies the same effects to enemies hit.',
      leveling: [
        {
          attribute: 'Total Physical Damage',
          modifiers: [
            {
              values: '10 / 50 / 90 / 130 / 170'
            },
            {
              unit: '% AD',
              values: '160'
            }
          ]
        }
      ]
    },
    {
      description: 'Avengerang deals reduced damage against non-champions.',
      leveling: [
        {
          attribute: 'Non-Champion Damage',
          modifiers: [
            {
              unit: '%',
              values: '40 / 50 / 60 / 70 / 80'
            }
          ]
        }
      ]
    },
    {
      description: 'Enemies can be hit only once per pass.'
    }
  ]
}
export default ability
