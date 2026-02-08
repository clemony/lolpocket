// Updated Patch 16.1 - 01/29/2026 04:27:09 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'E',
  name: 'Flame Breath',
  width: '120',
  affects: 'Enemies',
  blurb: 'Active:  Shyvana unleashes a fireball in the target direction that stops upon hitting an enemy  champion. The fireball deals magic damage to enemies hit and marks them for a few seconds.',
  castTime: '0.25 / 0.3333',
  cooldown: '12 / 11 / 10 / 9 / 8',
  cost: '0',
  damageType: 'Magic damage',
  effectRadius: '345',
  icon: 'https://cdn.communitydragon.org/latest/champion/Shyvana/ability-icon/e',
  notes: 'The fireball applies  area damage and the on-hit effect against marked targets deals  proc damage.\nIn Dragon Form, the fiery explosion applies  area damage and the burning scorch deals  persistent area damage to all enemies within the area of effect.\nIn Dragon Form, both areas of effect will be centered on the first champion struck, not at the location the missile collided with them.\nThis ability will cast from wherever the caster is at the end of the cast time.\nIn Dragon Form, the visual mark will not be applied to non-champions, but the debuff will still be applied for gameplay purposes.(bug)\nMagic damage on-hit can be dodged by  dodging effects.\nPENDING FOR TEST:: Magic damage on-hit\'s interactions with  blocking and  blinding effects.',
  projectile: 'TRUE',
  speed: '1600 / 1575',
  spellEffects: 'special',
  spellshieldable: 'True',
  targeting: 'Direction / Location',
  targetRange: '925',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Shyvana unleashes a fireball in the target direction that stops upon hitting an enemy champion, dealing magic damage to all enemies hit and marking them for 5 seconds.</p>',
      leveling: [
        {
          attribute: 'Magic Damage',
          modifiers: [
            {
              values: '85 / 125 / 165 / 205 / 245'
            },
            {
              unit: '% bonus AD',
              values: '50'
            },
            {
              unit: '% AP',
              values: '70'
            }
          ]
        }
      ]
    },
    {
      description: 'Shyvana\'s basic attacks against marked enemies are empowered to deal bonus magic damage on-hit equal to 3% (+ 1% per 100 bonus AD) of the target\'s maximum health, capped at 150 against monsters.'
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Dragon Form Bonus:</span> The fireball explodes upon hitting an enemy champion or reaching the target location, dealing increased magic damage and creating a scorched field for 4 seconds. Enemies within the field are marked once and dealt 20 - 50 (based on level) (+ 7.5% bonus AD) (+ 10% AP) magic damage every 0.5 seconds.</p>',
      leveling: [
        {
          attribute: 'Increased Damage',
          modifiers: [
            {
              values: '75 / 78.53 / 82.06 / 85.59 / 89.12 / 92.65 / 96.18 / 99.71 / 103.24 / 106.76 / 110.29 / 113.82 / 117.35 / 120.88 / 124.41 / 127.94 / 131.47 / 135'
            },
            {
              values: '85 / 125 / 165 / 205 / 245'
            },
            {
              unit: '% bonus AD',
              values: '100'
            },
            {
              unit: '% AP',
              values: '90'
            }
          ]
        }
      ]
    }
  ]
}
export default ability
