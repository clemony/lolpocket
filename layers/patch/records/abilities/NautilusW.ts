// Updated Patch 15.24.1 - 12/26/2025 07:04:08 PM CST

const ability: Ability = {
  key: 'W',
  name: 'Titan\'s Wrath',
  affects: 'Self, Enemies',
  blurb: 'Active:  Nautilus  shields himself for a few seconds. While the shield holds, his  basic attacks apply Pain of Wrath to the target and surrounding enemies.',
  castTime: 'none',
  cooldown: '12',
  cost: '60',
  damageType: 'Magic damage',
  effectRadius: '250',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Nautilus grants himself a shield for 6 seconds, and while it holds, his basic attacks are empowered to apply Pain of Wrath to the target and enemies near them.</p>',
      leveling: [
        {
          attribute: 'Shield Strength',
          modifiers: [
            {
              values: '50 / 60 / 70 / 80 / 90'
            },
            {
              tooltip: 'Scaling per rank:\n8 / 9 / 10 / 11 / 12% maximum health',
              unit: '% maximum health',
              values: '8 - 12'
            }
          ]
        }
      ]
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Pain of Wrath:</span> The target takes magic damage over time, half dealt immediately and the other half dealt after 1.25 seconds.</p>',
      leveling: [
        {
          attribute: 'Total Magic Damage',
          modifiers: [
            {
              values: '30 / 40 / 50 / 60 / 70'
            },
            {
              unit: '% AP',
              values: '40'
            }
          ]
        },
        {
          attribute: 'Magic Damage per Instance',
          modifiers: [
            {
              values: '15 / 20 / 25 / 30 / 35'
            },
            {
              unit: '% AP',
              values: '20'
            }
          ]
        }
      ]
    },
    {
      description: 'Titan\'s Wrath resets Nautilus\' basic attack timer.'
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Nautilus/ability-icon/w',
  notes: 'Pain of Wrath\'s first damage instance is tagged as  spell damage, while the second damage instance is tagged as  persistent damage.\nPain of Wrath damage over time debuff gains another stack when reapplied to the target, but doesn\'t restart its tick timer. Additional stacks of Pain of Wrath expire when the original debuff does and do not deal any additional damage.\nPain of Wrath\'s debuff can last up to 0.25 seconds after dealing the second instance of damage.(bug)\nPain of Wrath will be applied by Nautilus\'s basic attack if he is affected by Titan\'s Wrath at the start of the attack windup, even if Titan\'s Wrath expires during the windup.\nPain of Wrath will not be applied if the basic attack is  dodged or  blocked, but will be applied if it is  missed.\n Spell shield will block the ability (but only a single application).\nThe empowered attack does not apply Pain of Wrath to  structures.',
  resource: 'Mana',
  spellEffects: 'special',
  spellshieldable: 'special',
  targeting: 'Auto'
}
export default ability
