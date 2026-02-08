// Updated Patch 16.1 - 01/29/2026 04:27:12 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'R',
  name: 'The Box',
  width: '30',
  affects: 'Enemies',
  blurb: 'Active:  Thresh erects a pentagon of spectral walls around him that each last a few seconds. A wall will break upon enemy champion contact, dealing magic damage and  slowing them for a short time. Subsequent wall breaks will not deal damage but still  slow enemies briefly.',
  castTime: '0.45',
  cooldown: '120 / 100 / 80',
  cost: '100',
  damageType: 'Magic damage',
  icon: 'https://cdn.communitydragon.org/latest/champion/Thresh/ability-icon/r',
  notes: 'This ability will cast from wherever the caster is at the start of the cast time.\nThe Box does not fail to cast if Thresh  dies during its cast time.(note)\nThe Box always faces the same direction Thresh is facing on cast, placing a corner directly in front of him.\nThe cast indicator displays the opposite of the true behavior.(bug)\nIf The Box hits multiple champions with different walls on cast, only one of the walls will deal damage and apply the extended slow duration. This wall is chosen by starting at the wall in front of and to the right of Thresh\'s facing direction on cast, and progressing clockwise.\nThe corners of The Box are placed 400 units around Thresh.\nEach wall is 470.228 units long.\nEach wall passes 323.607 units from the center of The Box at the closest approach (ignoring its width).\nAs a regular pentagon, The Box has an angle of 72° between each corner.\nThresh can see if the walls of The Box are broken even if they are not within  sight.',
  resource: 'Mana',
  spellEffects: 'Area of effect',
  spellshieldable: 'True',
  targeting: 'Auto',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Thresh erects a pentagon of spectral walls around him that each last for 5 seconds. A wall will break upon enemy champion contact, dealing magic damage and slowing them by 99% for 2 seconds. After the first wall breaks, the rest will deal no damage and slow for only 1 second.</p>',
      leveling: [
        {
          attribute: 'Magic Damage',
          modifiers: [
            {
              values: '250 / 400 / 550'
            },
            {
              unit: '% AP',
              values: '100'
            }
          ]
        }
      ]
    },
    {
      description: 'Enemies that break a wall cannot do so again for 1 second.'
    }
  ]
}
export default ability
