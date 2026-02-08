// Updated Patch 16.1 - 01/29/2026 04:27:05 PM CST
import type { Champion } from '#shared/types'

const champion: Champion = {
  id: 68,
  key: 'Rumble',
  name: 'Rumble',
  title: 'The Mechanized Menace',
  adaptiveType: 'Magic damage',
  attackType: 'Melee',
  patchLastChanged: '25.17',
  releaseDate: '2011-04-26',
  resource: 'Heat',
  abilities: [
    {
      key: 'P',
      name: 'Junkyard Titan',
      affects: 'Self',
      blurb: 'Innate:  Rumble\'s basic ability casts generate  Heat, which gradually expires after a few seconds without generating Heat. Rumble enters the Danger Zone while he has at least  50 Heat, and becomes Overheated at  Max Heat.',
      damageType: 'Magic damage',
      icon: 'https://cdn.communitydragon.org/latest/champion/Rumble/ability-icon/p',
      notes: 'While Rumble is overheating, a  Silenced icon will appear above him to signify he cannot cast abilities. This is visible to all units.\nThe attacks do not deal the bonus damage against structures.',
      spellEffects: 'Proc',
      targeting: 'Passive',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Rumble\'s basic ability casts generate Heat, which decays by 10 Heat per second after not using any basic ability within 4 seconds or The Equalizer within 2 seconds. Rumble\'s mech enters the Danger Zone when at or above 50 Heat, and becomes Overheated while at 150 Heat.</p>'
        },
        {
          description: '<p class="ability-effect"><span class="ability-header">Danger Zone:</span> Rumble\'s mech enters the Danger Zone, empowering his basic abilities.</p>'
        },
        {
          description: '<p class="ability-effect"><span class="ability-header">Overheated:</span> Rumble\'s mech becomes Overheated, disabling his abilities as his Heat decays back down to 0 over 4 seconds. During this time, he gains 50% - 130% (based on level) bonus attack speed and empowers his basic attacks to deal 5 - 40 (based on level) (+ 25% AP) (+ 4% of the target\'s maximum health) bonus magic damage on-hit. The damage based on the target\'s health ratio is capped at 65 - 150 (based on level) against monsters.</p>'
        }
      ]
    },
    {
      key: 'Q',
      name: 'Flamespitter',
      affects: 'Enemies',
      angle: '64°',
      blurb: 'Active:  Rumble activates a flamethrower for a short time that continually deals magic damage in a frontal cone.',
      castTime: 'none',
      cooldown: '10 / 9 / 8 / 7 / 6',
      cost: '0',
      damageType: 'Magic damage',
      icon: 'https://cdn.communitydragon.org/latest/champion/Rumble/ability-icon/q',
      notes: 'Flamespitter will deal an additional tick of damage to a minion if it would die to its per-tick damage. This is intended.\nRumble will instantly turn to face the cursor if he is not moving when Flamespitter is cast. He will also instantly turn when issuing an Attack order on an enemy while Flamespitter is active.\nIssuing an Attack Move order at a location will not cause Rumble to instantly turn.(note)\nIf Rumble does not path to a location after an Attack or Attack Move order, and the player issues a Stop or Hold order immediately afterwards, Rumble will not visually turn completely to face the new direction,(bug) but the area will turn to have the correct direction as intended.\nWhen Flamespitter\'s debuff is applied instead of refreshed, the target is dealt one additional instance of the debuff at the same time as the application. This is done by delaying the actual debuff by 0.1 seconds.\nIf the target is already affected by the debuff, its duration is refreshed to the maximum (0.6 seconds).',
      projectile: 'FALSE',
      spellEffects: 'AoeDoT',
      spellshieldable: 'false',
      targeting: 'Auto',
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
      ]
    },
    {
      key: 'W',
      name: 'Scrap Shield',
      affects: 'Self',
      blurb: 'Active:  Rumble briefly  shields himself and gains  bonus movement speed.',
      castTime: 'none',
      cooldown: '6',
      cost: '0',
      icon: 'https://cdn.communitydragon.org/latest/champion/Rumble/ability-icon/w',
      notes: 'The movement speed buff is supposed to last for 1 second, but due to a bug may last 0.264 seconds longer.\nLike most buffs, the stat bonus is already only gained at the next stat update (every 0.264 seconds). Despite this, the duration still inconsistent.',
      targeting: 'Auto',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Rumble generates 20 Heat to grant himself a shield for 1.5 seconds.</p>',
          leveling: [
            {
              attribute: 'Shield Strength',
              modifiers: [
                {
                  values: '25 / 55 / 85 / 115 / 145'
                },
                {
                  unit: '% AP',
                  values: '30'
                },
                {
                  unit: '% of maximum health',
                  values: '4'
                }
              ]
            }
          ]
        },
        {
          description: 'Rumble also gains bonus movement speed for 1 to 1.32 seconds.',
          leveling: [
            {
              attribute: 'Bonus Movement Speed',
              modifiers: [
                {
                  unit: '%',
                  values: '10 / 15 / 20 / 25 / 30'
                }
              ]
            }
          ]
        },
        {
          description: '<p class="ability-effect"><span class="ability-header">Danger Zone Bonus:</span> Scrap Shield\'s shield strength and bonus movement speed are increased in effectiveness by 50%.</p>',
          leveling: [
            {
              attribute: 'Enhanced Shield Strength',
              modifiers: [
                {
                  values: '37.5 / 82.5 / 127.5 / 172.5 / 217.5'
                },
                {
                  unit: '% AP',
                  values: '45'
                },
                {
                  unit: '% of maximum health',
                  values: '6'
                }
              ]
            },
            {
              attribute: 'Enhanced Bonus Movement Speed',
              modifiers: [
                {
                  unit: '%',
                  values: '15 / 22.5 / 30 / 37.5 / 45'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      key: 'E',
      name: 'Electro Harpoon',
      width: '120',
      affects: 'Enemies',
      blurb: 'Active:  Rumble shoots a harpoon in the target direction that deals magic damage and briefly  slows the first enemy hit, reducing their  magic resist for a few seconds. These effects can stack with multiple harpoons.',
      castTime: '0.25',
      cooldown: '0.5',
      cost: '0',
      damageType: 'Magic damage',
      icon: 'https://cdn.communitydragon.org/latest/champion/Rumble/ability-icon/e',
      notes: 'If Electro Harpoon is empowered with  Danger Zone\'s bonus and hits a target that is afflicted with the non-enhanced slow and shred applied by previous, non-empowered Electro Harpoon casts, the effectiveness of both debuffs on the target are increased to their enhanced values for all stacks of each debuff.\nThis also applies vice versa; a non-empowered Electro Harpoon cast will reduce the enhanced slow and shred applied by previous, empowered Electro Harpoon casts back to the non-enhanced values, for all stacks.\nA buff with the magic resistance reduction tooltip is applied to  minions and  pets, but their magic resistance is unaffected by Electro Harpoon.(bug)\nEach Electro Harpoon cast triggers  Spellblade and reduces  Force Pulse\'s cooldown.\nElectro Harpoon\'s missile will fail to fire if Rumble is  suppressed during the cast time.(note)\nThis ability will cast from wherever the caster is at the end of the cast time.\nRumble stocks an Electro Harpoon charge before the ability is even learned.',
      projectile: 'TRUE',
      rechargeRate: '6 / 6 / 6 / 6 / 6',
      speed: '2000',
      spellEffects: 'spell',
      spellshieldable: 'True',
      targeting: 'Direction',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Rumble generates 20 Heat to shoot a harpoon in the target direction that deals magic damage to the first enemy hit, inflicting them with magic resistance reduction for 4 seconds and slowing them for 2 seconds. These effects stack additively with multiple harpoons, refreshing their duration and stacking up to 2 times.</p>',
          leveling: [
            {
              attribute: 'Magic Damage',
              modifiers: [
                {
                  values: '55 / 80 / 105 / 130 / 155'
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
                  values: '110 / 160 / 210 / 260 / 310'
                },
                {
                  unit: '% AP',
                  values: '100'
                }
              ]
            },
            {
              attribute: 'Magic Resistance Reduction',
              modifiers: [
                {
                  unit: '%',
                  values: '10 / 12 / 14 / 16 / 18'
                }
              ]
            },
            {
              attribute: 'Total MR Reduction',
              modifiers: [
                {
                  unit: '%',
                  values: '20 / 24 / 28 / 32 / 36'
                }
              ]
            },
            {
              attribute: 'Slow',
              modifiers: [
                {
                  unit: '%',
                  values: '15 / 20 / 25 / 30 / 35'
                }
              ]
            },
            {
              attribute: 'Total Slow',
              modifiers: [
                {
                  unit: '%',
                  values: '30 / 40 / 50 / 60 / 70'
                }
              ]
            }
          ]
        },
        {
          description: 'Rumble periodically stocks an Electro Harpoon charge, up to a maximum of 2.'
        },
        {
          description: '<p class="ability-effect"><span class="ability-header">Danger Zone Bonus:</span> Electro Harpoon\'s effects are increased by 50%.</p>',
          leveling: [
            {
              attribute: 'Enhanced Damage',
              modifiers: [
                {
                  values: '82.5 / 120 / 157.5 / 195 / 232.5'
                },
                {
                  unit: '% AP',
                  values: '75'
                }
              ]
            },
            {
              attribute: 'Total Enhanced Damage',
              modifiers: [
                {
                  values: '165 / 240 / 315 / 390 / 465'
                },
                {
                  unit: '% AP',
                  values: '150'
                }
              ]
            },
            {
              attribute: 'Enhanced Magic Resistance Reduction',
              modifiers: [
                {
                  unit: '%',
                  values: '15 / 18 / 21 / 24 / 27'
                }
              ]
            },
            {
              attribute: 'Total Enhanced MR Reduction',
              modifiers: [
                {
                  unit: '%',
                  values: '30 / 36 / 42 / 48 / 54'
                }
              ]
            },
            {
              attribute: 'Enhanced Slow',
              modifiers: [
                {
                  unit: '%',
                  values: '22.5 / 30 / 37.5 / 45 / 52.5'
                }
              ]
            },
            {
              attribute: 'Total Enhanced Slow',
              modifiers: [
                {
                  unit: '%',
                  values: '45 / 60 / 75 / 90 / 105'
                }
              ]
            }
          ]
        },
        {
          description: 'If Rumble casts Electro Harpoon before his mech becomes Overheated, he may still use another charge within 3 seconds of the initial cast.'
        }
      ]
    },
    {
      key: 'R',
      name: 'The Equalizer',
      width: '410 - 368.4',
      affects: 'Enemies',
      blurb: 'Active:  Rumble deploys a barrage of rockets along the target path that create a field which lingers for a few seconds.',
      castTime: 'None / 0.5833',
      cooldown: '130 / 105 / 80',
      cost: '0',
      damageType: 'Magic damage',
      icon: 'https://cdn.communitydragon.org/latest/champion/Rumble/ability-icon/r',
      notes: 'The Equalizer\'s cumulative hitbox consists of a row of six rockets, each having a circular area of effect with a radius of 205 units. Each rocket drops at an offset of 180 units from the previous in the vector of cast.\nThe missile that manages the rockets being deployed starts 150 units behind the target vector origin, and thus drops the first rocket at 30 units in front of the cast vector origin, which is equivalent to a period of 0.132 seconds from the cast point.\nA given field checks for targets to apply or refresh the debuff on once every 0.25 seconds.\nDue to each field expiring at different points in time, champions moving in the duration of the rockets\' launch as they are expiring may sometimes receive 1 more instance of the debuff at most beyond the maximum.(bug)',
      projectile: 'FALSE',
      speed: '1600',
      spellEffects: 'aoedot',
      spellshieldable: 'False',
      targeting: 'Vector',
      targetRange: '1700',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Rumble deploys a barrage of rockets from the sky along the target path in a line over 0.75 seconds. Each rocket impacts the ground to create a field of fire that lasts 4.5 seconds.</p>'
        },
        {
          description: 'Enemies struck by the impact or within the field are marked Burning for 1 second, taking magic damage every 0.25 seconds and being slowed by 35%, refreshing while in the area. Enemies may be Burning for up to 5 seconds, for a total of 20 instances of its effect.',
          leveling: [
            {
              attribute: 'Magic Damage per Tick',
              modifiers: [
                {
                  values: '35 / 52.5 / 70'
                },
                {
                  unit: '% AP',
                  values: '8.75'
                }
              ]
            },
            {
              attribute: 'Magic Damage per Second',
              modifiers: [
                {
                  values: '140 / 210 / 280'
                },
                {
                  unit: '% AP',
                  values: '35'
                }
              ]
            },
            {
              attribute: 'Maximum Magic Damage',
              modifiers: [
                {
                  values: '700 / 1050 / 1400'
                },
                {
                  unit: '% AP',
                  values: '175'
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  attributeRatings: {
    abilityReliance: 90,
    control: 2,
    damage: 3,
    difficulty: 3,
    mobility: 1,
    toughness: 2,
    utility: 1
  },
  positions: [
    'Middle',
    'Top'
  ],
  price: {
    blueEssence: 2400,
    rp: 880
  },
  roles: [
    'Battlemage',
    'Fighter',
    'Mage'
  ],
  stats: {
    armor: 36,
    attackDamage: 64,
    attackRange: 125,
    attackSpeed: 0.6,
    hp: 655,
    hpRegen: 7,
    magicResist: 28,
    movespeed: 345,
    mp: 150
  },
  statsPerLevel: {
    armor: 4.7,
    attackDamage: 3.2,
    attackSpeed: 1.9,
    hp: 105,
    hpRegen: 0.6,
    magicResist: 1.6
  }
}
export default champion