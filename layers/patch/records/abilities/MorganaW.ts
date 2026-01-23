// Updated Patch 15.24.1 - 12/26/2025 07:04:07 PM CST

const ability: Ability = {
  key: 'W',
  name: 'Tormented Shadow',
  affects: 'Enemies',
  blurb: 'Passive: Tormented Shadow\'s current cooldown is  reduced whenever  Soul Siphon triggers.',
  castTime: '0.25',
  cooldown: '12',
  cost: '70 / 80 / 90 / 100 / 110',
  damageType: 'Magic damage',
  effectRadius: '280',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Passive:</span> Tormented Shadow\'s current cooldown is reduced by 5% of its total cooldown whenever Soul Siphon triggers. Simultaneous triggers from multiple targets will stack the cooldown reduction.</p>'
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Morgana torments the soil at the target location, causing the area to become desecrated for 5 seconds. Enemies within take magic damage on-cast and every 0.5 seconds thereafter, increased by 0% - 100% (based on target\'s missing health). Tormented Shadow deals 170% damage against monsters.</p>',
      leveling: [
        {
          attribute: 'Minimum Damage Per Tick',
          modifiers: [
            {
              values: '9 / 15.5 / 22 / 28.5 / 35'
            },
            {
              unit: '% AP',
              values: '10'
            }
          ]
        },
        {
          attribute: 'Maximum Damage Per Tick',
          modifiers: [
            {
              values: '18 / 31 / 44 / 57 / 70'
            },
            {
              unit: '% AP',
              values: '20'
            }
          ]
        },
        {
          attribute: 'Minimum Total Damage',
          modifiers: [
            {
              values: '90 / 155 / 220 / 285 / 350'
            },
            {
              unit: '% AP',
              values: '100'
            }
          ]
        },
        {
          attribute: 'Maximum Total Damage',
          modifiers: [
            {
              values: '180 / 310 / 440 / 570 / 700'
            },
            {
              unit: '% AP',
              values: '200'
            }
          ]
        }
      ]
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Morgana/ability-icon/w',
  notes: 'Damage from multiple Tormented Shadows does not stack.',
  resource: 'Mana',
  spellEffects: 'aoedot',
  spellshieldable: 'False',
  targeting: 'Location',
  targetRange: '900'
}
export default ability
