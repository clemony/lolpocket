// Updated Patch 15.24.1 - 12/26/2025 07:04:08 PM CST

const ability: Ability = {
  key: 'W',
  name: 'Ebb and Flow',
  affects: 'Enemies, Allies',
  blurb: 'Active:  Nami unleashes a stream of water onto the target champion or herself, which then bounces to nearby champions up to twice, alternating between enemies and allies and Nami.',
  castTime: '0.25',
  cooldown: '10',
  cost: '70 / 75 / 80 / 85 / 90',
  damageType: 'Magic damage',
  effectRadius: '800',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Nami unleashes a stream of water onto the target champion or herself, which then bounces to nearby unaffected champions up to twice, alternating between enemies and allies and Nami.</p>'
    },
    {
      description: 'Ebb and Flow heals allies and deals magic damage to enemies, with each bounce modifying the effectiveness of the next by -10% (+ 10% per 100 AP).',
      leveling: [
        {
          attribute: 'Heal',
          modifiers: [
            {
              values: '55 / 80 / 105 / 130 / 155'
            },
            {
              unit: '% AP',
              values: '40'
            }
          ]
        },
        {
          attribute: 'Minimum Heal',
          modifiers: [
            {
              values: '44 / 64 / 84 / 104 / 124'
            },
            {
              unit: '% AP',
              values: '32'
            }
          ]
        },
        {
          attribute: 'Magic Damage',
          modifiers: [
            {
              values: '60 / 95 / 130 / 165 / 200'
            },
            {
              unit: '% AP',
              values: '50'
            }
          ]
        },
        {
          attribute: 'Minimum Damage',
          modifiers: [
            {
              values: '48 / 76 / 104 / 132 / 160'
            },
            {
              unit: '% AP',
              values: '40'
            }
          ]
        }
      ]
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Nami/ability-icon/w',
  notes: 'If cast on an enemy with a  spell shield they will not take damage but Ebb and Flow will still continue to bounce, and the target who blocked the ability may be targeted again by the final bounce.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).',
  projectile: 'TRUE',
  resource: 'Mana',
  speed: '2500 / 1500',
  spellEffects: 'aoe',
  spellshieldable: 'True',
  targeting: 'Unit',
  targetRange: '725'
}
export default ability
