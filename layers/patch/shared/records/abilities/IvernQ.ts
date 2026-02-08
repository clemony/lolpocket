// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'Q',
  name: 'Rootcaller',
  width: '160',
  affects: 'Enemies',
  blurb: 'Active:  Ivern throws a vine in the target direction that deals magic damage and  roots the first enemy hit.',
  castTime: '0.25',
  cooldown: '14 / 13 / 12 / 11 / 10',
  cost: '60',
  damageType: 'Magic damage',
  icon: 'https://cdn.communitydragon.org/latest/champion/Ivern/ability-icon/q',
  notes: 'This ability will cast from wherever the caster is at the start of the cast time.\n Daisy dashes to rooted  monsters, and enemy champions if within 1200 units when Rootcaller hits.\nShe does not dash to enemy minions.(note)\n Daisy can not dash if she\'s more than 1200 units from the target hit. She will not dash even if she later walks in range.(bug)\nRegardless of  Daisy\'s and Ivern\'s distance from the target hit, Ivern dashing does not affect  Daisy in any way.(bug)\nRootcaller will hit  monsters but does not deal damage to it unless the target is an epic monster.\nIvern\'s pull/attack range is determined when he dashes to the target - not from when he initially casts Rootcaller and throws the vine.\nIvern can rightclick on the target hit to dash to it, stopping at his attack range.\nRightclicking while closer than attack range to the target makes Ivern dash to 425 units away from it.\nThis interacts like expected with attack range increases, increasing the dash distance away from the target 1:1.\nIvern will never dash closer than his current distance from the target when rightclicking within attack range.\nRecasting dashes Ivern to on top of the enemy instead of at attack range.\nIvern and his allies are not able to dash to the target unless they are within 1200 units.\nRootcaller cannot be used to  dash while  grounded or  rooted. This applies to Ivern and his allies.\nRootcaller\'s dash does not follow targets, their position at the time of starting the dash is the location Ivern and his allies will stop from.',
  projectile: 'TRUE',
  resource: 'Mana',
  speed: '1300',
  spellEffects: 'Single target',
  spellshieldable: 'True',
  targeting: 'Direction / Auto',
  targetRange: '1150 /  0 /  475 /  Attack range',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Ivern throws a vine in the target direction, dealing magic damage to the first enemy hit and rooting them for a duration, during which they are also revealed. Rootcaller can be recast while the target is rooted.</p>',
      leveling: [
        {
          attribute: 'Magic Damage',
          modifiers: [
            {
              values: '80 / 125 / 170 / 215 / 260'
            },
            {
              unit: '% AP',
              values: '70'
            }
          ]
        },
        {
          attribute: 'Root Duration',
          modifiers: [
            {
              unit: ' seconds',
              values: '1.6 / 1.7 / 1.8 / 1.9 / 2'
            }
          ]
        }
      ]
    },
    {
      description: 'Ivern and allied champions can select the target rooted by Rootcaller to dash to their location, stopping at their attack range.'
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Recast:</span> Ivern dashes to the rooted target.</p>'
    },
    {
      description: 'Hitting a non-epic monster reduces Rootcaller\'s cooldown by 50%.'
    }
  ]
}
export default ability
