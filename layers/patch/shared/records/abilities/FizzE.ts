// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'E',
  name: 'Trickster',
  affects: 'Enemies',
  blurb: 'Active:  Fizz  vaults in the target direction and slams down, dealing magic damage to nearby enemies.This area is smaller than  Playful.',
  cooldown: '16 / 14 / 12 / 10 / 8',
  cost: '75 / 80 / 85 / 90 / 95',
  damageType: 'Magic damage',
  effectRadius: '225',
  icon: 'https://cdn.communitydragon.org/latest/champion/Fizz/ability-icon/e',
  notes: 'This ability always employs Quick cast.\nTrickster does not count as an ability activation.\nBoth  Playful\'s and Trickster\'s  dashes may be directed separately.\nTrickster has a minimum dash distance of 75 units.\n Flash cannot be used during the dash.\nThe splash occurs immediately if Fizz encounters terrain that cannot be dashed through (he has to be particularly close to the wall).',
  spellEffects: 'spellaoe',
  spellshieldable: 'True',
  targeting: 'Location',
  targetRange: '300',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Fizz dashes to the target location, hopping down and splashing onto the ground prematurely upon arrival to deal the same magic damage in a smaller radius but not applying the slow.</p>',
      leveling: [
        {
          attribute: 'Magic Damage',
          modifiers: [
            {
              values: '80 / 130 / 180 / 230 / 280'
            },
            {
              unit: '% AP',
              values: '95'
            }
          ]
        }
      ]
    }
  ]
}
export default ability
