// Updated Patch 16.1 - 01/29/2026 04:27:15 PM CST
import type { Ability } from '#shared/types'

const ability: Ability = {
  key: 'Q',
  name: 'Siphon Power',
  affects: 'Enemies / Self',
  blurb: 'Active:  Viktor throws a draining device at the target enemy that deals magic damage. He also gains Discharge and  shields himself for a short time.',
  castTime: '0.25',
  cooldown: '9 / 8 / 7 / 6 / 5',
  cost: '45 / 50 / 55 / 60 / 65',
  damageType: 'Magic damage',
  icon: 'https://cdn.communitydragon.org/latest/champion/Viktor/ability-icon/q',
  notes: 'Discharge does not convert the bonus damage dealt by  Spellblade to magic damage from physical.(bug)\nDischarge disables the bonus damage from  critical strikes.(bug)\n Spell shield does not prevent Viktor from gaining Discharge.\nOnly the initial projectile can be  intercepted.\nThe empowered attack will trigger against turrets but not be consumed nor apply its effects against  wards.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).',
  projectile: 'SPECIAL',
  resource: 'Mana',
  speed: '2000',
  spellEffects: 'spell',
  spellshieldable: 'True',
  targeting: 'Unit',
  targetRange: '600',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Viktor throws a draining device at the target enemy that deals magic damage. He also grants himself a shield for 40 - 140 (based on level) (+ 25% AP) for 2.5 seconds and gains Discharge for 4 seconds.</p>',
      leveling: [
        {
          attribute: 'Magic Damage',
          modifiers: [
            {
              values: '60 / 75 / 90 / 105 / 120'
            },
            {
              unit: '% AP',
              values: '40'
            }
          ]
        }
      ]
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Discharge:</span> Viktor\'s next basic attack is empowered to become non-projectile and deal modified magic damage.</p>',
      leveling: [
        {
          attribute: 'Modified Magic Damage',
          modifiers: [
            {
              values: '20 / 45 / 70 / 95 / 120'
            },
            {
              unit: '% AD',
              values: '100'
            },
            {
              unit: '% AP',
              values: '50'
            }
          ]
        },
        {
          attribute: 'Total Magic Damage',
          modifiers: [
            {
              values: '80 / 120 / 160 / 200 / 240'
            },
            {
              unit: '% AD',
              values: '100'
            },
            {
              unit: '% AP',
              values: '90'
            }
          ]
        }
      ]
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Augment:</span> Turbocharge — After the device hits, Viktor gains 30% bonus movement speed for 2.5 seconds and the shield\'s strength is increased[ by 60%. ][ to 64 - 224 (based on level) (+ 40% AP). ]</p>'
    }
  ]
}
export default ability
