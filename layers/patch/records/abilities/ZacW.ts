// Updated Patch 15.24.1 - 12/26/2025 07:04:15 PM CST

const ability: Ability = {
  key: 'W',
  name: 'Unstable Matter',
  affects: 'Enemies',
  blurb: 'Active:  Zac explodes to deal magic damage to nearby enemies hit based on their maximum health.',
  castTime: 'none',
  cooldown: '5',
  cost: '0',
  damageType: 'Magic damage',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Zac explodes to deal magic damage to nearby enemies, capped against minions and monsters.</p>',
      leveling: [
        {
          attribute: 'Magic Damage',
          modifiers: [
            {
              values: '40 / 50 / 60 / 70 / 80'
            },
            {
              tooltip: 'Scaling per rank:\n4 / 5 / 6 / 7 / 8% (+ 3% per 100 AP) of target\'s maximum health',
              unit: '% (+ 3% per 100 AP) of target\'s maximum health',
              values: '4 - 8'
            }
          ]
        },
        {
          attribute: 'Capped Non-Champion Damage',
          modifiers: [
            {
              values: '240 / 250 / 260 / 270 / 280'
            }
          ]
        }
      ]
    },
    {
      description: 'Zac grants ghosting to aggroed monsters hit for 5 seconds.'
    },
    {
      description: 'Unstable Matter\'s current cooldown is reduced by 1 second whenever Zac collects a Cell Division chunk.'
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Zac/ability-icon/w',
  notes: 'If Unstable Matter is the cause of monster aggro, the monsters will not receive  ghosting.\nSubsequent uses of Unstable Matter within 5 seconds after the previous will not grant  ghosting either.(bug)',
  resource: 'Current health',
  spellEffects: 'spellaoe',
  spellshieldable: 'True',
  targeting: 'Auto',
  targetRange: '350'
}
export default ability
