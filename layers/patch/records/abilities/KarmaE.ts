// Updated Patch 15.24.1 - 12/26/2025 07:03:51 PM CST

const ability: Ability = {
  key: 'E',
  name: 'Defiance',
  affects: 'Allies',
  blurb: 'Mantra Bonus:\nInspire\'s shield is increased, and Inspire spreads to surrounding allied champions at reduced power.',
  castTime: 'none',
  cooldown: '10 / 9.5 / 9 / 8.5 / 8',
  cost: '50 / 55 / 60 / 65 / 70',
  effectRadius: '700',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Mantra - Active:</span> Inspire grants a bonus amount of shielding.Inspire spreads to surrounding allied champions, granting them a shield for 2.5 seconds and 15% bonus movement speed for 2 seconds.</p>',
      leveling: [
        {
          attribute: 'Bonus Primary Target Shield',
          modifiers: [
            {
              values: '50 / 100 / 150 / 200'
            },
            {
              unit: '% AP',
              values: '45'
            }
          ]
        },
        {
          attribute: 'Total Primary Target Shield',
          modifiers: [
            {
              values: '80 / 130 / 180 / 230 / 280'
            },
            {
              values: '50 / 100 / 150 / 200'
            },
            {
              unit: '% AP',
              values: '105'
            }
          ]
        },
        {
          attribute: 'Secondary Target Shield',
          modifiers: [
            {
              values: '50 / 100 / 150 / 200'
            },
            {
              unit: '% AP',
              values: '45'
            }
          ]
        }
      ]
    },
    {
      description: 'Defiance scales with Mantra\'s rank.'
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Karma/ability-icon/e',
  notes: 'Defiance has a  forgiveness radius of 175 units.',
  resource: 'Mana',
  targeting: 'Unit'
}
export default ability
