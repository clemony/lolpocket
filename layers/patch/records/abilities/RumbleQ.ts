// Updated Patch 15.24.1 - 12/26/2025 07:04:14 PM CST

const ability: Ability = {
  key: 'Q',
  name: 'Flamespitter',
  affects: 'Enemies',
  angle: '64°',
  blurb: 'Active:  Rumble activates a flamethrower for a short time that continually deals magic damage in a frontal cone.',
  castTime: 'none',
  cooldown: '10 / 9 / 8 / 7 / 6',
  cost: '0',
  damageType: 'Magic damage',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Rumble generates 20 Heat to activate his flamethrower for 3 seconds, spewing forth flames in a frontal cone every 0.25 seconds. Enemies hit by the flame are scorched for 0.6 seconds, taking magic damage every 0.25 seconds as well as upon being hit if not currently scorched, refreshing on subsequent inflictions.Flamespitter\'s damage is reduced to 70% against minions.</p>',
      leveling: [
        {
          attribute: 'Minimum Magic Damage',
          modifiers: [
            {
              values: '15 / 21.25 / 27.5 / 33.75 / 40'
            },
            {
              unit: '% AP',
              values: '25'
            },
            {
              tooltip: 'Scaling per rank:\n1.5 / 1.63 / 1.75 / 1.88 / 2% of target\'s maximum health',
              unit: '% of target\'s maximum health',
              values: '1.5 - 2'
            }
          ]
        },
        {
          attribute: 'Magic Damage per Second',
          modifiers: [
            {
              values: '20 / 28.33 / 36.67 / 45 / 53.33'
            },
            {
              unit: '% AP',
              values: '33.33'
            },
            {
              tooltip: 'Scaling per rank:\n2 / 2.17 / 2.33 / 2.5 / 2.67% of target\'s maximum health',
              unit: '% of target\'s maximum health',
              values: '2 - 2.67'
            }
          ]
        },
        {
          attribute: 'Magic Damage per Tick',
          modifiers: [
            {
              values: '5 / 7.08 / 9.17 / 11.25 / 13.33'
            },
            {
              unit: '% AP',
              values: '8.33'
            },
            {
              tooltip: 'Scaling per rank:\n0.5 / 0.54 / 0.58 / 0.63 / 0.67% of target\'s maximum health',
              unit: '% of target\'s maximum health',
              values: '0.5 - 0.67'
            }
          ]
        },
        {
          attribute: 'Maximum Magic Damage',
          modifiers: [
            {
              values: '75 / 106.25 / 137.5 / 168.75 / 200'
            },
            {
              unit: '% AP',
              values: '125'
            },
            {
              tooltip: 'Scaling per rank:\n7.5 / 8.13 / 8.75 / 9.38 / 10% of target\'s maximum health',
              unit: '% of target\'s maximum health',
              values: '7.5 - 10'
            }
          ]
        },
        {
          attribute: 'Minimum Minion Damage',
          modifiers: [
            {
              values: '10.5 / 14.88 / 19.25 / 23.63 / 28'
            },
            {
              unit: '% AP',
              values: '17.5'
            },
            {
              tooltip: 'Scaling per rank:\n1.05 / 1.14 / 1.23 / 1.31 / 1.4% of target\'s maximum health',
              unit: '% of target\'s maximum health',
              values: '1.05 - 1.4'
            }
          ]
        },
        {
          attribute: 'Minion Damage per Second',
          modifiers: [
            {
              values: '14 / 19.83 / 25.67 / 31.5 / 37.33'
            },
            {
              unit: '% AP',
              values: '23.33'
            },
            {
              tooltip: 'Scaling per rank:\n1.4 / 1.52 / 1.63 / 1.75 / 1.87% of target\'s maximum health',
              unit: '% of target\'s maximum health',
              values: '1.4 - 1.87'
            }
          ]
        },
        {
          attribute: 'Minion Damage per Tick',
          modifiers: [
            {
              values: '3.5 / 4.96 / 6.42 / 7.88 / 9.33'
            },
            {
              unit: '% AP',
              values: '5.83'
            },
            {
              tooltip: 'Scaling per rank:\n0.35 / 0.38 / 0.41 / 0.44 / 0.47% of target\'s maximum health',
              unit: '% of target\'s maximum health',
              values: '0.35 - 0.47'
            }
          ]
        },
        {
          attribute: 'Maximum Minion Damage',
          modifiers: [
            {
              values: '52.5 / 74.38 / 96.25 / 118.13 / 140'
            },
            {
              unit: '% AP',
              values: '87.5'
            },
            {
              tooltip: 'Scaling per rank:\n5.25 / 5.69 / 6.13 / 6.56 / 7% of target\'s maximum health',
              unit: '% of target\'s maximum health',
              values: '5.25 - 7'
            }
          ]
        }
      ]
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Danger Zone Bonus:</span> Flamespitter\'s damage is increased by 50%.Flamespitter\'s total damage based on the target\'s health is capped at 65 - 300 (based on level) against monsters.</p>',
      leveling: [
        {
          attribute: 'Minimum Enhanced Damage',
          modifiers: [
            {
              values: '22.5 / 31.88 / 41.25 / 50.63 / 60'
            },
            {
              unit: '% AP',
              values: '37.5'
            },
            {
              tooltip: 'Scaling per rank:\n2.25 / 2.44 / 2.63 / 2.81 / 3% of target\'s maximum health',
              unit: '% of target\'s maximum health',
              values: '2.25 - 3'
            }
          ]
        },
        {
          attribute: 'Enhanced Damage per Second',
          modifiers: [
            {
              values: '30 / 42.5 / 55 / 67.5 / 80'
            },
            {
              unit: '% AP',
              values: '50'
            },
            {
              tooltip: 'Scaling per rank:\n3 / 3.25 / 3.5 / 3.75 / 4% of target\'s maximum health',
              unit: '% of target\'s maximum health',
              values: '3 - 4'
            }
          ]
        },
        {
          attribute: 'Enhanced Damage per Tick',
          modifiers: [
            {
              values: '7.5 / 10.63 / 13.75 / 16.88 / 20'
            },
            {
              unit: '% AP',
              values: '12.5'
            },
            {
              tooltip: 'Scaling per rank:\n0.75 / 0.81 / 0.88 / 0.94 / 1% of target\'s maximum health',
              unit: '% of target\'s maximum health',
              values: '0.75 - 1'
            }
          ]
        },
        {
          attribute: 'Maximum Enhanced Damage',
          modifiers: [
            {
              values: '112.5 / 159.38 / 206.25 / 253.13 / 300'
            },
            {
              unit: '% AP',
              values: '187.5'
            },
            {
              tooltip: 'Scaling per rank:\n11.25 / 12.19 / 13.13 / 14.06 / 15% of target\'s maximum health',
              unit: '% of target\'s maximum health',
              values: '11.25 - 15'
            }
          ]
        },
        {
          attribute: 'Minimum Enhanced Minion Damage',
          modifiers: [
            {
              values: '15.75 / 22.31 / 28.88 / 35.44 / 42'
            },
            {
              unit: '% AP',
              values: '26.25'
            },
            {
              tooltip: 'Scaling per rank:\n1.58 / 1.71 / 1.84 / 1.97 / 2.1% of target\'s maximum health',
              unit: '% of target\'s maximum health',
              values: '1.58 - 2.1'
            }
          ]
        },
        {
          attribute: 'Enhanced Minion Damage per Second',
          modifiers: [
            {
              values: '21 / 29.75 / 38.5 / 47.25 / 56'
            },
            {
              unit: '% AP',
              values: '35'
            },
            {
              tooltip: 'Scaling per rank:\n2.1 / 2.28 / 2.45 / 2.63 / 2.8% of target\'s maximum health',
              unit: '% of target\'s maximum health',
              values: '2.1 - 2.8'
            }
          ]
        },
        {
          attribute: 'Enhanced Minion Damage per Tick',
          modifiers: [
            {
              values: '5.25 / 7.44 / 9.63 / 11.81 / 14'
            },
            {
              unit: '% AP',
              values: '8.75'
            },
            {
              tooltip: 'Scaling per rank:\n0.53 / 0.57 / 0.61 / 0.66 / 0.7% of target\'s maximum health',
              unit: '% of target\'s maximum health',
              values: '0.53 - 0.7'
            }
          ]
        },
        {
          attribute: 'Maximum Enhanced Minion Damage',
          modifiers: [
            {
              values: '78.75 / 124.69 / 170.63 / 216.56 / 262.5'
            },
            {
              unit: '% AP',
              values: '131.25'
            },
            {
              tooltip: 'Scaling per rank:\n7.88 / 8.53 / 9.19 / 9.84 / 10.5% of target\'s maximum health',
              unit: '% of target\'s maximum health',
              values: '7.88 - 10.5'
            }
          ]
        }
      ]
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Rumble/ability-icon/q',
  notes: 'Flamespitter will deal an additional tick of damage to a minion if it would die to its per-tick damage. This is intended.\nRumble will instantly turn to face the cursor if he is not moving when Flamespitter is cast. He will also instantly turn when issuing an Attack order on an enemy while Flamespitter is active.\nIssuing an Attack Move order at a location will not cause Rumble to instantly turn.(note)\nIf Rumble does not path to a location after an Attack or Attack Move order, and the player issues a Stop or Hold order immediately afterwards, Rumble will not visually turn completely to face the new direction,(bug) but the area will turn to have the correct direction as intended.\nWhen Flamespitter\'s debuff is applied instead of refreshed, the target is dealt one additional instance of the debuff at the same time as the application. This is done by delaying the actual debuff by 0.1 seconds.\nIf the target is already affected by the debuff, its duration is refreshed to the maximum (0.6 seconds).',
  projectile: 'FALSE',
  spellEffects: 'AoeDoT',
  spellshieldable: 'false',
  targeting: 'Auto'
}
export default ability
