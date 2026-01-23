// Updated Patch 15.24.1 - 12/26/2025 07:03:45 PM CST

const ability: Ability = {
  key: 'E',
  name: 'Skip \'n Slash',
  affects: 'Self',
  blurb: 'Active:  Gwen  dashes to the target location, and afterwards empowers her  basic attacks for a duration, gaining  bonus attack speed, magic damage, and  range.',
  castTime: 'none',
  cooldown: '13 / 12.5 / 12 / 11.5 / 11',
  cost: '35',
  damageType: 'Magic damage',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Gwen dashes to the target location, then empowers her basic attacks within the next 4 seconds to deal 15 (+ 20% AP) bonus magic damage on-hit and gain bonus attack speed and 75 bonus attack range.</p>',
      leveling: [
        {
          attribute: 'Bonus Attack Speed',
          modifiers: [
            {
              unit: '%',
              values: '20 / 35 / 50 / 65 / 80'
            }
          ]
        }
      ]
    },
    {
      description: 'Gwen\'s first basic attack within the duration refunds a percentage of Skip \'n Slash\'s cooldown.',
      leveling: [
        {
          attribute: 'Cooldown Refund',
          modifiers: [
            {
              unit: '%',
              values: '25 / 35 / 45 / 55 / 65'
            }
          ]
        }
      ]
    },
    {
      description: 'Skip \'n Slash resets Gwen\'s basic attack timer, and can be cast during any of her abilities, and vice versa.'
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Gwen/ability-icon/e',
  notes: 'Skip \'n Slash has no minimum dash range.\nThe basic attack reset is not considered one for  Hail of Blades.(note)',
  resource: 'Mana',
  spellEffects: 'proc',
  targeting: 'Location',
  targetRange: '350 / 450'
}
export default ability
