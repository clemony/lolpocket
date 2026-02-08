// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'E',
  name: 'Arcane Shift',
  affects: 'Enemies, Self',
  blurb: 'Active:  Ezreal  blinks to the target location and fires a bolt that strikes the nearest enemy, dealing magic damage.',
  castTime: '0.25',
  cooldown: '26 / 23 / 20 / 17 / 14',
  cost: '70',
  damageType: 'Magic damage',
  effectRadius: '750',
  icon: 'https://cdn.communitydragon.org/latest/champion/Ezreal/ability-icon/e',
  notes: 'If Ezreal is moved during the cast time, his range to blink will update accordingly. This does not exceed the maximum target range.\nThe target is revealed as soon as Ezreal fires the missile at them.',
  projectile: 'TRUE',
  resource: 'Mana',
  speed: '2000',
  spellEffects: 'spell',
  spellshieldable: 'True',
  targeting: 'Location',
  targetRange: '475',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Ezreal blinks from his current location to up to 475 units towards the target location, then fires a homing bolt towards the nearest enemy that deals magic damage and reveals them for 1 second.</p>',
      leveling: [
        {
          attribute: 'Magic Damage',
          modifiers: [
            {
              values: '80 / 130 / 180 / 230 / 280'
            },
            {
              unit: '% bonus AD',
              values: '50'
            },
            {
              unit: '% AP',
              values: '75'
            }
          ]
        }
      ]
    },
    {
      description: 'Arcane Shift prioritizes firing at the nearest enemy marked by Essence Flux.'
    },
    {
      description: 'The target does not have to be visible to be hit by this ability.'
    }
  ]
}
export default ability
