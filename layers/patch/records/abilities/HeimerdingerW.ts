// Updated Patch 15.24.1 - 12/26/2025 07:03:45 PM CST

const ability: Ability = {
  key: 'W',
  name: 'Hextech Rocket Swarm',
  affects: 'Enemies',
  blurb: 'UPGRADE:  Heimerdinger now fires 4 waves of rockets, each rocket dealing magic damage to the first enemy hit. Enemies take less damage from subsequent rockets that hit them.',
  castTime: '0.25',
  cooldown: '11 / 10 / 9 / 8 / 7',
  cost: '50 / 60 / 70 / 80 / 90',
  damageType: 'Magic damage',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">UPGRADE!!! - Active:</span> Heimerdinger unleashes 4 waves of 5 rockets in quick succession that converge upon the target location. Each rocket deals magic damage to the first enemy hit.</p>',
      leveling: [
        {
          attribute: 'Hextech Rocket Swarm scales with UPGRADE!!!\'s rank',
          modifiers: [
            {
              unit: 'Initial Rocket Damage:',
              values: '0'
            }
          ]
        },
        {
          attribute: '135 / 180 / 225 (+ 45% AP)'
        }
      ]
    },
    {
      description: 'Enemies can be hit by multiple rockets. Champions and monsters receive less damage from the second to fifth rockets that hit them, which is reduced by 50% for rockets beyond the fifth. Minions instead always receive 100% of the initial damage from every single rocket.',
      leveling: [
        {
          attribute: 'Rockets 2:5 Magic Damage',
          modifiers: [
            {
              values: '32 / 45 / 58'
            },
            {
              unit: '% AP',
              values: '12'
            }
          ]
        },
        {
          attribute: 'Rockets 6:20 Magic Damage',
          modifiers: [
            {
              values: '16 / 22.5 / 29'
            },
            {
              unit: '% AP',
              values: '6'
            }
          ]
        },
        {
          attribute: 'Combined Total Non-Minion Damage',
          modifiers: [
            {
              values: '503 / 697.5 / 892'
            },
            {
              unit: '% AP',
              values: '183'
            }
          ]
        },
        {
          attribute: 'Minion Damage per Rocket',
          modifiers: [
            {
              values: '135 / 180 / 225'
            },
            {
              unit: '% AP',
              values: '45'
            }
          ]
        },
        {
          attribute: 'Combined Total Minion Damage',
          modifiers: [
            {
              values: '2700 / 3600 / 4500'
            },
            {
              unit: '% AP',
              values: '900'
            }
          ]
        }
      ]
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Heimerdinger/ability-icon/w',
  notes: 'If casting beyond 1000 units based off current Heimerdinger\'s position, every rockets aim towards Heimerdinger\'s position extended towards cast position by 1100 units\nHextech Rocket Swarm\'s direction-targeting allows for custom spread.\nHeimerdinger can move once Hextech Rocket Swarm has been cast, even if the projectiles are still spawning or haven\'t even started to move yet.\nHextech Rocket Swarm\'s will cast from wherever Heimerdinger is at the end of the cast time.',
  projectile: 'TRUE',
  spellEffects: 'spellaoe',
  spellshieldable: 'True',
  targeting: 'Location',
  targetRange: '1150'
}
export default ability
