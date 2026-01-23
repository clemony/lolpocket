// Updated Patch 15.24.1 - 12/26/2025 07:04:15 PM CST

const ability: Ability = {
  key: 'E',
  name: 'Audacious Charge',
  affects: 'Enemies',
  blurb: 'Active:  Xin Zhao  dashes to the target enemy, dealing magic damage to nearby enemies and briefly  slowing them. He then gains  bonus attack speed for a few seconds.',
  castTime: 'none',
  cooldown: '11',
  cost: '50',
  damageType: 'Magic damage',
  effectRadius: '250',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Xin Zhao dashes to the target enemy\'s location, dealing magic damage to enemies near them and slowing them by 30% for 0.5 seconds. Audacious Charge\'s range is increased against Challenged targets.</p>',
      leveling: [
        {
          attribute: 'Magic Damage',
          modifiers: [
            {
              values: '50 / 75 / 100 / 125 / 150'
            },
            {
              unit: '% AP',
              values: '60'
            }
          ]
        }
      ]
    },
    {
      description: 'Xin Zhao then gains bonus attack speed for 5 seconds.',
      leveling: [
        {
          attribute: 'Bonus Attack Speed',
          modifiers: [
            {
              unit: '%',
              values: '40 / 45 / 50 / 55 / 60'
            }
          ]
        }
      ]
    },
    {
      description: 'Three Talon Strike and Crescent Guard can be cast during the dash.'
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/XinZhao/ability-icon/e',
  notes: 'The primary target cannot dodge Audacious Charge\'s effects.\nThe target will always emit the area of effect from their position.\nAudacious Charge has a  forgiveness radius of 200 units.',
  resource: 'Mana',
  speed: '2500',
  spellEffects: 'Area of effect',
  spellshieldable: 'True',
  targeting: 'Unit',
  targetRange: '650 / 1100'
}
export default ability
