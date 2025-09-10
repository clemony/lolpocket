// Updated Patch 25.17 - 09/01/2025 05:26:13 PM CDT

const champion: Champion = {
  id: 7,
  key: 'Leblanc',
  name: 'LeBlanc',
  title: 'the Deceiver',
  fullName: 'Emilia (Evaine) LeBlanc',
  resource: 'Mana',
  attackType: 'Ranged',
  adaptiveType: 'Magic damage',
  stats: {
    health: {
      flat: 598,
      perLevel: 111
    },
    healthRegen: {
      flat: 7.5,
      perLevel: 0.55
    },
    mana: {
      flat: 400,
      perLevel: 25
    },
    manaRegen: {
      flat: 8,
      perLevel: 0.8
    },
    armor: {
      flat: 22,
      perLevel: 4.7
    },
    magicResistance: {
      flat: 30,
      perLevel: 1.3
    },
    attackDamage: {
      flat: 55,
      perLevel: 2.2
    },
    movespeed: {
      flat: 340
    },
    acquisitionRadius: {
      flat: 525
    },
    selectionRadius: {
      flat: 100
    },
    pathingRadius: {
      flat: 35
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
      flat: 0.658,
      perLevel: 2.35
    },
    attackSpeedRatio: {
      flat: 0.4
    },
    attackCastTime: {
      flat: 0.3
    },
    attackTotalTime: {
      flat: 1.6
    },
    attackDelayOffset: {
      flat: -0.133
    },
    attackRange: {
      flat: 525
    }
  },
  positions: [
    'Middle'
  ],
  roles: [
    'Assassin',
    'Burst',
    'Mage'
  ],
  attributeRatings: {
    damage: 3,
    toughness: 1,
    control: 2,
    mobility: 3,
    utility: 1,
    abilityReliance: 100,
    difficulty: 2
  },
  abilities: {
    P: [
      {
        name: 'Mirror Image',
        icon: 'https://cdn.communitydragon.org/latest/champion/Leblanc/ability-icon/p',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Periodically, when LeBlanc is damaged to 40% maximum health, she creates a clone of herself, after which they both instantly become invisible for 1 second.</p>'
          },
          {
            description: 'The clone can cast basic attacks with no effect and lasts 8 seconds. Upon spawning, it starts moving up to 1900 units toward a random direction in front of LeBlanc\'s movement, determined at the moment of its spawning.'
          },
          {
            description: 'See Pets for more details about LeBlanc\'s clone.'
          }
        ],
        targeting: 'Passive',
        affects: 'Self',
        notes: 'The  clone has a leash range.\nUsing a basic attack breaks the stealth at the end of the attack windup.',
        blurb: 'Innate: When  LeBlanc reaches low health, she creates a  clone of herself and together they enter brief  invisibility.'
      }
    ],
    Q: [
      {
        name: 'Sigil of Malice',
        icon: 'https://cdn.communitydragon.org/latest/champion/Leblanc/ability-icon/q',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> LeBlanc projects an orb at the target enemy that deals magic damage and marks them for 3.5 seconds.</p>',
            leveling: [
              {
                attribute: 'Magic Damage',
                modifiers: [
                  {
                    values: [
                      65,
                      90,
                      115,
                      140,
                      165
                    ]
                  },
                  {
                    values: [
                      40
                    ],
                    units: [
                      '% AP'
                    ]
                  }
                ]
              }
            ]
          },
          {
            description: 'LeBlanc\'s next damaging ability against the marked target will consume the mark to deal the same magic damage again.',
            leveling: [
              {
                attribute: 'Total Magic Damage',
                modifiers: [
                  {
                    values: [
                      130,
                      180,
                      230,
                      280,
                      330
                    ]
                  },
                  {
                    values: [
                      80
                    ],
                    units: [
                      '% AP'
                    ]
                  }
                ]
              }
            ]
          },
          {
            description: 'Sigil of Malice\'s orb deals 10 - 146 (based on level) bonus magic damage against minions and refunds 100% of its mana cost and 30% of its remaining cooldown if either the orb or its mark\'s consumption kills the target.'
          }
        ],
        cost: [
          50
        ],
        cooldown: [
          6
        ],
        targeting: 'Unit',
        affects: 'Enemies',
        spellshieldable: 'True',
        resource: 'Mana',
        damageType: 'Magic damage',
        spellEffects: 'Spell',
        projectile: 'TRUE',
        notes: 'Sigil of Malice and  Mimic: Sigil of Malice can detonate each other\'s marks.\nThe floating damage text upon the mark\'s detonation currently displays a real  critical strike icon instead of a success indicator.(bug)\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).',
        blurb: 'Active:  LeBlanc projects an orb at the target enemy, dealing magic damage and marking them for a short time.',
        speed: '2000',
        castTime: '0.25',
        targetRange: '700',
        maxCharges: -1
      }
    ],
    W: [
      {
        name: 'Distortion',
        icon: 'https://cdn.communitydragon.org/latest/champion/Leblanc/ability-icon/w',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> LeBlanc dashes to the target location, dealing magic damage to all nearby enemies upon arrival and leaving a return pad at the cast location for 4 seconds. Distortion can be recast after 0.2 seconds of the dash ending for the pad\'s duration.</p>',
            leveling: [
              {
                attribute: 'Magic Damage',
                modifiers: [
                  {
                    values: [
                      75,
                      115,
                      155,
                      195,
                      235
                    ]
                  },
                  {
                    values: [
                      70
                    ],
                    units: [
                      '% AP'
                    ]
                  }
                ]
              }
            ]
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Recast:</span> LeBlanc blinks to Distortion\'s return pad, regardless of range.</p>'
          }
        ],
        cost: [
          60,
          70,
          80,
          90,
          100
        ],
        cooldown: [
          15,
          13.75,
          12.5,
          11.25,
          10
        ],
        targeting: 'Location / Auto',
        affects: 'Enemies',
        spellshieldable: 'True',
        resource: 'Mana',
        damageType: 'Magic damage',
        spellEffects: 'spellaoe',
        notes: 'Distortion will be buffered and cast as soon as the cooldown ends if the player attempts to cast it within 0.5 seconds of the cooldown ending.\nThe recast will be buffered and cast as soon as it becomes available if the player attempts to cast it within 0.3 seconds of it becoming available to cast.\nThe initial cast counts as an ability activation for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse\'s passive.\nRecasting the ability does not.\n Mimic: Distortion has the same properties.\nDistortion and  Mimic: Distortion have independent return pads and LeBlanc can travel to both while they are active.\nDistortion\'s pad duration starts once the dash ends.',
        blurb: 'Active:  LeBlanc  dashes to the target location, dealing magic damage to nearby enemies upon arrival. She leaves behind a return pad at her original location that lasts a few seconds, during which she can recast.',
        speed: '1450',
        castTime: 'none',
        effectRadius: '240',
        targetRange: '600 / Global',
        maxCharges: -1
      }
    ],
    E: [
      {
        name: 'Ethereal Chains',
        icon: 'https://cdn.communitydragon.org/latest/champion/Leblanc/ability-icon/e',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> LeBlanc flings an illusory chain in the target direction that deals magic damage to the first enemy it hits and forms a tether between LeBlanc and the target for 1.5 seconds, during which they are revealed.</p>',
            leveling: [
              {
                attribute: 'Magic Damage',
                modifiers: [
                  {
                    values: [
                      50,
                      70,
                      90,
                      110,
                      130
                    ]
                  },
                  {
                    values: [
                      40
                    ],
                    units: [
                      '% AP'
                    ]
                  }
                ]
              }
            ]
          },
          {
            description: 'If the tether is not broken by the end of its duration, it fractures to deal magic damage to the target and root them for 1.5 seconds, during which they are revealed.',
            leveling: [
              {
                attribute: 'Magic Damage',
                modifiers: [
                  {
                    values: [
                      80,
                      120,
                      160,
                      200,
                      240
                    ]
                  },
                  {
                    values: [
                      85
                    ],
                    units: [
                      '% AP'
                    ]
                  }
                ]
              },
              {
                attribute: 'Total Damage',
                modifiers: [
                  {
                    values: [
                      130,
                      190,
                      250,
                      310,
                      370
                    ]
                  },
                  {
                    values: [
                      125
                    ],
                    units: [
                      '% AP'
                    ]
                  }
                ]
              }
            ]
          }
        ],
        cost: [
          50
        ],
        cooldown: [
          14,
          13.25,
          12.5,
          11.75,
          11
        ],
        targeting: 'Direction',
        affects: 'Enemies',
        spellshieldable: 'Special',
        resource: 'Mana',
        damageType: 'Magic damage',
        spellEffects: 'spell',
        projectile: 'TRUE',
        notes: 'Both the initial and the delayed damage can detonate  Sigil of Malice.\nEthereal Chains and  Mimic: Ethereal Chains are separate debuffs, and can both be tethered to the same target without overriding each other. The  root duration for either one are unchanged.\n Spell shield will block the tether\'s application and initial damage but not the aftereffects of one already applied.\nThe tether remains for a minimum of 0.25 seconds regardless of distance.\nThis ability will cast from wherever the caster is at the end of the cast time.',
        blurb: 'Active:  LeBlanc flings an illusory chain in the target direction that deals magic damage and  tethers the first enemy hit,  revealing them.',
        tetherRadius: '865',
        speed: '1750',
        width: '110',
        castTime: '0.25',
        targetRange: '950',
        maxCharges: -1
      }
    ],
    R: [
      {
        name: 'Mimic',
        icon: 'https://cdn.communitydragon.org/latest/champion/Leblanc/ability-icon/r',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> LeBlanc casts a mimicked version of her most recently used basic ability, applying the same effects and dealing modified magic damage.</p>'
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Mimic:</span> Sigil of Malice: The orb deals modified damage, while the mark consumption deals double that amount.</p>',
            leveling: [
              {
                attribute: 'Orb Magic Damage',
                modifiers: [
                  {
                    values: [
                      70,
                      140,
                      210
                    ]
                  },
                  {
                    values: [
                      40
                    ],
                    units: [
                      '% AP'
                    ]
                  }
                ]
              },
              {
                attribute: 'Mark Magic Damage',
                modifiers: [
                  {
                    values: [
                      140,
                      280,
                      420
                    ]
                  },
                  {
                    values: [
                      80
                    ],
                    units: [
                      '% AP'
                    ]
                  }
                ]
              },
              {
                attribute: 'Total Magic Damage',
                modifiers: [
                  {
                    values: [
                      210,
                      420,
                      630
                    ]
                  },
                  {
                    values: [
                      120
                    ],
                    units: [
                      '% AP'
                    ]
                  }
                ]
              }
            ]
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Mimic:</span> Distortion: Deals modified damage.</p>',
            leveling: [
              {
                attribute: 'Magic Damage',
                modifiers: [
                  {
                    values: [
                      150,
                      300,
                      450
                    ]
                  },
                  {
                    values: [
                      75
                    ],
                    units: [
                      '% AP'
                    ]
                  }
                ]
              }
            ]
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Mimic:</span> Ethereal Chains: The tether\'s application deals modified damage, while its fracturing deals double that amount.</p>',
            leveling: [
              {
                attribute: 'Application Magic Damage',
                modifiers: [
                  {
                    values: [
                      70,
                      140,
                      210
                    ]
                  },
                  {
                    values: [
                      40
                    ],
                    units: [
                      '% AP'
                    ]
                  }
                ]
              },
              {
                attribute: 'Fracture Magic Damage',
                modifiers: [
                  {
                    values: [
                      140,
                      280,
                      420
                    ]
                  },
                  {
                    values: [
                      85
                    ],
                    units: [
                      '% AP'
                    ]
                  }
                ]
              },
              {
                attribute: 'Total Magic Damage',
                modifiers: [
                  {
                    values: [
                      210,
                      420,
                      630
                    ]
                  },
                  {
                    values: [
                      125
                    ],
                    units: [
                      '% AP'
                    ]
                  }
                ]
              }
            ]
          }
        ],
        cost: [
          0
        ],
        cooldown: [
          45,
          35,
          25
        ],
        targeting: 'Varied',
        affects: 'Self',
        damageType: 'Magic damage',
        notes: 'Mimic will default to  Mimic: Sigil of Malice if LeBlanc ranks up Mimic without having used any abilities beforehand (even if she has not yet learned  Sigil of Malice).\nBoth  Mimic: Ethereal Chains and  Mimic: Sigil of Malice will apply damage twice if the original ability\'s condition to do so is met.',
        blurb: 'Active:  LeBlanc casts a mimicked version of her most recent ability, which deals modified damage.',
        maxCharges: 2
      }
    ]
  },
  lore: 'Mysterious even to other members of the Black Rose cabal, LeBlanc is but one of many names for a pale woman who has manipulated people and events since the earliest days of Noxus. Using her magic to mirror herself, the sorceress can appear to anyone, anywhere, and even be in many places at once. Always plotting just out of sight, LeBlanc\'s true motives are as inscrutable as her shifting identity.',
  faction: 'noxus',
  releaseDate: '2010-11-02',
  patchLastChanged: '25.12',
  price: {
    blueEssence: 1575,
    rp: 790
  }
}
export default champion