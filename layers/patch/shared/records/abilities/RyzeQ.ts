// Updated Patch 16.1 - 01/29/2026 04:27:06 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'Q',
  name: 'Overload',
  width: '110',
  affects: 'Enemies',
  blurb: 'Passive:  Ryze\'s other  basic ability casts  reset Overload\'s cooldown and generate a  Rune stack, stacking up to 2 times.',
  castTime: '0.25',
  cooldown: '5',
  cost: '40 / 38 / 36 / 34 / 32',
  damageType: 'Magic damage',
  icon: 'https://cdn.communitydragon.org/latest/champion/Ryze/ability-icon/q',
  notes: 'Overload can be buffered 0.5 seconds before it comes off cooldown.\nOverload can be buffered while casting either  Spell Flux or  Rune Prison to cast immediately after the previous spell\'s cast time.\nApplies  spell damage to the primary target and  area damage to secondary targets affected by  Flux.\nThis ability will cast from wherever the caster is at the start of the cast time.',
  projectile: 'TRUE',
  resource: 'Mana',
  speed: '1700',
  spellEffects: 'Special',
  spellshieldable: 'True',
  targeting: 'Direction',
  targetRange: '1000',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Passive:</span> Ryze\'s other basic ability casts reset Overload\'s cooldown and charge a Rune stack for 4 seconds, refreshing on subsequent casts and stacking up to 2 times.</p>'
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Ryze unleashes a runic blast in the target direction that deals magic damage to the first enemy hit and consumes all Rune stacks.</p>',
      leveling: [
        {
          attribute: 'Magic Damage',
          modifiers: [
            {
              values: '75 / 95 / 115 / 135 / 155'
            },
            {
              unit: '% AP',
              values: '55'
            },
            {
              unit: '% bonus mana',
              values: '2'
            }
          ]
        }
      ]
    },
    {
      description: 'If Ryze consumed 2 stacks, he gains bonus movement speed for 2 seconds.',
      leveling: [
        {
          attribute: 'Bonus Movement Speed',
          modifiers: [
            {
              unit: '%',
              values: '28 / 32 / 36 / 40 / 44'
            }
          ]
        }
      ]
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Flux Bonus:</span> Overload deals 25% / 50% / 75% / 100% (based on Realm Warp\'s Rank) increased damage and spreads to surrounding Fluxed enemies.</p>'
    }
  ]
}
export default ability
