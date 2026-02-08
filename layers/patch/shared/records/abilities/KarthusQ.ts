// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'Q',
  name: 'Lay Waste',
  affects: 'Enemies',
  blurb: 'Active:  Karthus conjures a delayed blast at the target location that deals magic damage to all enemies within,  doubled when only one target is struck.',
  castTime: '0.25',
  cooldown: '0',
  cost: '20 / 25 / 30 / 35 / 40',
  damageType: 'Magic damage',
  effectRadius: '160',
  icon: 'https://cdn.communitydragon.org/latest/champion/Karthus/ability-icon/q',
  notes: 'This ability always employs Quick cast.\nThe delay between the cast and the detonation is inconsistent, but always matches up with the VFX.(bug)\n Defile\'s ticks beyond the first has a similar issue.\nApplies  spell damage if it hits a single target and  area damage if it hits multiple targets.\nLay Waste also plays a different sound effect when it only hits one target.',
  resource: 'Mana',
  spellEffects: 'Special',
  spellshieldable: 'True',
  targeting: 'Location',
  targetRange: '875',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Karthus conjures a blast at the target location that detonates after 0.528 seconds to 0.759 seconds, granting sight of the area and dealing magic damage to all enemies within, doubled when only one target is struck.</p>',
      leveling: [
        {
          attribute: 'Magic Damage',
          modifiers: [
            {
              values: '40 / 59 / 78 / 97 / 116'
            },
            {
              unit: '% AP',
              values: '35'
            }
          ]
        },
        {
          attribute: 'Enhanced Damage',
          modifiers: [
            {
              values: '80 / 118 / 156 / 194 / 232'
            },
            {
              unit: '% AP',
              values: '70'
            }
          ]
        }
      ]
    }
  ]
}
export default ability
