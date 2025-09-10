// Updated Patch 25.17 - 09/01/2025 05:26:16 PM CDT

const champion: Champion = {
  id: 48,
  key: 'Trundle',
  name: 'Trundle',
  title: 'the Troll King',
  resource: 'Mana',
  attackType: 'Melee',
  adaptiveType: 'Physical damage',
  stats: {
    health: {
      flat: 650,
      perLevel: 110
    },
    healthRegen: {
      flat: 6,
      perLevel: 0.75
    },
    mana: {
      flat: 340,
      perLevel: 45
    },
    manaRegen: {
      flat: 7.5,
      perLevel: 0.6
    },
    armor: {
      flat: 37,
      perLevel: 3.9
    },
    magicResistance: {
      flat: 32,
      perLevel: 2.05
    },
    attackDamage: {
      flat: 68,
      perLevel: 4
    },
    movespeed: {
      flat: 350
    },
    acquisitionRadius: {
      flat: 400
    },
    selectionRadius: {
      flat: 135
    },
    pathingRadius: {
      flat: 25.767
    },
    gameplayRadius: {
      flat: 65
    },
    criticalStrikeDamage: {
      flat: 175
    },
    criticalStrikeDamageModifier: {
      flat: 1
    },
    attackSpeed: {
      flat: 0.67,
      perLevel: 2.9
    },
    attackSpeedRatio: {
      flat: 0.67
    },
    attackCastTime: {
      flat: 0.3
    },
    attackTotalTime: {
      flat: 1.6
    },
    attackDelayOffset: {
      flat: -0.092
    },
    attackRange: {
      flat: 175
    }
  },
  positions: [
    'Jungle',
    'Top'
  ],
  roles: [
    'Fighter',
    'Juggernaut',
    'Tank'
  ],
  attributeRatings: {
    damage: 2,
    toughness: 3,
    control: 1,
    mobility: 1,
    utility: 2,
    abilityReliance: 20,
    difficulty: 1
  },
  abilities: {
    P: [
      {
        name: 'King\'s Tribute',
        icon: 'https://cdn.communitydragon.org/latest/champion/Trundle/ability-icon/p',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Whenever a nearby enemy dies, Trundle heals himself for 1.8% - 5.5% (based on level) of the target\'s maximum health.</p>'
          }
        ],
        targeting: 'Passive',
        affects: 'Self',
        notes: 'King\'s Tribute does not trigger when an enemy structure is destroyed.',
        blurb: 'Innate: Enemies that die near  Trundle cause him to  heal based on their maximum health.',
        effectRadius: '1400'
      }
    ],
    Q: [
      {
        name: 'Chomp',
        icon: 'https://cdn.communitydragon.org/latest/champion/Trundle/ability-icon/q',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Trundle empowers his next basic attack within 7 seconds to have an uncancellable windup, gain 25 bonus range, deal bonus physical damage and slow the target by 75% for 0.1 seconds.</p>',
            leveling: [
              {
                attribute: 'Bonus Physical Damage',
                modifiers: [
                  {
                    values: [
                      10,
                      30,
                      50,
                      70,
                      90
                    ]
                  },
                  {
                    values: [
                      15,
                      25,
                      35,
                      45,
                      55
                    ],
                    units: [
                      '% AD'
                    ]
                  }
                ]
              }
            ]
          },
          {
            description: 'After using the empowered attack, Trundle gains bonus attack damage for 5 seconds and reduces the target\'s bonus attack damage by half that amount for the same duration.',
            leveling: [
              {
                attribute: 'Bonus Attack Damage',
                modifiers: [
                  {
                    values: [
                      20,
                      25,
                      30,
                      35,
                      40
                    ]
                  }
                ]
              },
              {
                attribute: 'Attack Damage Reduction',
                modifiers: [
                  {
                    values: [
                      10,
                      12.5,
                      15,
                      17.5,
                      20
                    ]
                  }
                ]
              }
            ]
          },
          {
            description: 'Chomp resets Trundle\'s basic attack timer.'
          }
        ],
        cost: [
          20
        ],
        cooldown: [
          3.5
        ],
        targeting: 'Auto',
        affects: 'Self, Enemies',
        spellshieldable: 'special',
        resource: 'Mana',
        damageType: 'Physical damage',
        spellEffects: 'spell',
        notes: 'Chomp will still incur the  attack damage increase for Trundle even if the attack is  dodged,  blocked, missed while he is  blinded, or it is blocked by  spell shield.\n Spell shield will only block the attack damage reduction and  slow.',
        blurb: 'Active:  Trundle\'s next basic attack within a few seconds will deal bonus physical damage and briefly  slow the target.',
        castTime: 'none',
        maxCharges: -1
      }
    ],
    W: [
      {
        name: 'Frozen Domain',
        icon: 'https://cdn.communitydragon.org/latest/champion/Trundle/ability-icon/w',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Trundle coats the target location in ice for 8 seconds. While he is within the area, he gains bonus attack speed, bonus movement speed, and 25% increased healing from all sources.</p>',
            leveling: [
              {
                attribute: 'Bonus Attack Speed',
                modifiers: [
                  {
                    values: [
                      30,
                      50,
                      70,
                      90,
                      110
                    ],
                    units: [
                      '%'
                    ]
                  }
                ]
              },
              {
                attribute: 'Bonus Movement Speed',
                modifiers: [
                  {
                    values: [
                      20,
                      28,
                      36,
                      44,
                      52
                    ],
                    units: [
                      '%'
                    ]
                  }
                ]
              }
            ]
          }
        ],
        cost: [
          40
        ],
        cooldown: [
          18,
          17,
          16,
          15,
          14
        ],
        targeting: 'Location',
        affects: 'Self',
        resource: 'Mana',
        notes: 'No additional details.',
        blurb: 'Active:  Trundle coats the target location in ice for a period. While he is within the area, he gains  bonus attack speed,  bonus movement speed, and increased  healing from all sources.',
        castTime: 'none',
        effectRadius: '775',
        targetRange: '750',
        maxCharges: -1
      }
    ],
    E: [
      {
        name: 'Pillar of Ice',
        icon: 'https://cdn.communitydragon.org/latest/champion/Trundle/ability-icon/e',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Trundle erects a pillar of ice at the target location for 6 seconds, which knocks back units hit to 225 units from its center. The pillar acts as terrain and slows nearby enemies.</p>',
            leveling: [
              {
                attribute: 'Slow',
                modifiers: [
                  {
                    values: [
                      34,
                      38,
                      42,
                      46,
                      50
                    ],
                    units: [
                      '%'
                    ]
                  }
                ]
              }
            ]
          }
        ],
        cost: [
          75
        ],
        cooldown: [
          21,
          19.5,
          18,
          16.5,
          15
        ],
        targeting: 'Location',
        affects: 'Enemies',
        spellshieldable: 'False',
        resource: 'Mana',
        notes: 'Pillar of Ice displaces allied units away from the area but does not render them  airborne.\nAllied  channels (e.g.  Recall,  Teleport) will be  interrupted however.\nPillar of Ice cannot be placed inside impassable terrain. Attempting to do so will cause the pillar to spawn in the nearest available spot of accessible terrain.\nPillar Of Ice triggers effects such as drawing turret aggro,  Sudden Impact and applying  Elixir of Sorcery by dealing 0  proc  true damage.',
        blurb: 'Active:  Trundle erects an ice pillar at the target location that remains for a few seconds, which  knocks back units hit. The pillar acts as terrain and  slows nearby enemies.',
        castTime: '0.25',
        effectRadius: '360 / 225',
        targetRange: '1000',
        maxCharges: -1
      }
    ],
    R: [
      {
        name: 'Subjugate',
        icon: 'https://cdn.communitydragon.org/latest/champion/Trundle/ability-icon/r',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Trundle drains the life force out of the target enemy champion, dealing magic damage and healing himself for the same amount. He also steals 40% of their current armor and magic resistance, and increases in size by 18% while reducing the target\'s size by 9.9%.</p>',
            leveling: [
              {
                attribute: 'Total Magic Damage',
                modifiers: [
                  {
                    values: [
                      20,
                      25,
                      30
                    ],
                    units: [
                      '%  of the target\'s maximum health'
                    ]
                  },
                  {
                    values: [
                      2
                    ],
                    units: [
                      '% per 100 AP'
                    ]
                  }
                ]
              }
            ]
          },
          {
            description: 'Half of the total damage and stealing are applied instantly, and the other half, as well as the size modifiers, are applied every second over the next 4 seconds, even if the target has died.',
            leveling: [
              {
                attribute: 'Initial Magic Damage',
                modifiers: [
                  {
                    values: [
                      10,
                      12.5,
                      15
                    ],
                    units: [
                      '%  of the target\'s maximum health'
                    ]
                  },
                  {
                    values: [
                      1
                    ],
                    units: [
                      '% per 100 AP'
                    ]
                  }
                ]
              },
              {
                attribute: 'Magic Damage Per Second',
                modifiers: [
                  {
                    values: [
                      2.5,
                      3.125,
                      3.75
                    ],
                    units: [
                      '%  of the target\'s maximum health'
                    ]
                  },
                  {
                    values: [
                      0.25
                    ],
                    units: [
                      '% per 100 AP'
                    ]
                  }
                ]
              }
            ]
          },
          {
            description: 'The armor and magic resistance will remain stolen for 4 seconds after the drain has ended.'
          }
        ],
        cost: [
          100
        ],
        cooldown: [
          120,
          100,
          80
        ],
        targeting: 'Unit',
        affects: 'Enemies',
        spellshieldable: 'True',
        resource: 'Mana',
        damageType: 'Magic damage',
        spellEffects: 'dot',
        notes: 'The total value of armor and magic resist stolen and damage dealt is determined at the time of cast. The stolen stats do not update dynamically relative to the target\'s stats at any point during the effect, as the steal is applied to the current value of armor and magic resistance.\nTrundle gains 11.7 extra  range on his  basic attacks (relative to his and enemy center) as a consequence of his increased  size.\nSo do his enemies.\nHe gains 3.78 to 6.255 range against the target he subjugated, depending on their base size, and so does the target against him.\nThe debuff on the target also persists through death.\nTrundle will lose the buff if the target loses the debuff, for example if it enters  resurrection.(note)\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).',
        blurb: 'Active:  Trundle drains the life force of the target enemy champion, dealing magic damage based on their maximum health and  healing for the same amount. He also steals a portion of their  armor and  magic resist, and increases in  size while reducing their  size.',
        castTime: '0.25',
        targetRange: '650',
        maxCharges: -1
      }
    ]
  },
  lore: 'Trundle is a hulking and devious troll with a particularly vicious streak, and there is nothing he cannot bludgeon into submission—not even the Freljord itself. Fiercely territorial, he chases down anyone foolish enough to enter his domain. Then, his massive club of True Ice at the ready, he chills his enemies to the bone and impales them with jagged, frozen pillars, laughing as they bleed out onto the tundra.',
  faction: 'freljord',
  releaseDate: '2010-12-01',
  patchLastChanged: '25.07',
  price: {
    blueEssence: 1575,
    rp: 790
  }
}
export default champion